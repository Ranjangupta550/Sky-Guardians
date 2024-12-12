from flask import Flask, jsonify, request
from pymavlink import mavutil
import threading
import time

# Initialize Flask app
app = Flask(__name__)

# Global variables
vehicle = None
connection_status = {"status": "Not Connected"}
gps_avg_array = []
Lats_sum = 0
Longs_sum = 0
Alt_sum = 0
count = 0  # To keep track of the number of updates

# Global variable to hold telemetry data
telemetry_data = {
    "gps": None,
    "position": None,
    "attitude": None,
    "battery": None
}

# Route to handle drone connection requests
@app.route('/connect', methods=['GET'])
def connect():
    connection_string = 'tcp:127.0.0.1:14550'  # Replace with your connection string
    
    # Start the connection process in a separate thread
    connection_status["status"] = "Not Connected"
    connection_thread = threading.Thread(target=connect_to_vehicle, args=(connection_string,))
    connection_thread.start()

    # Wait for the connection to complete by checking the status
    while connection_status["status"] == "Not Connected":
        time.sleep(0.1)  # Short delay to prevent busy waiting

    if connection_status["status"] == "Connected":
        return jsonify({"message": "Drone Connected Successfully!"}), 200
    else:
        return jsonify({"message": "Failed to Connect to Drone"}), 500

# Route to start telemetry data collection
@app.route('/start_telemetry', methods=['GET'])
def start_telemetry():
    start_telemetry_thread()  # Start the telemetry thread when this endpoint is hit
    return jsonify({"message": "Telemetry started!"}), 200

# Connect to the drone and start receiving telemetry
def connect_to_vehicle(connection_string):
    global vehicle
    try:
        print("Connecting to vehicle...")
        vehicle = mavutil.mavlink_connection(connection_string)

        # Wait for heartbeat with timeout
        start_time = time.time()
        while time.time() - start_time < 10:
            try:
                vehicle.wait_heartbeat(blocking=False)
                print("Connection established with vehicle!")
                connection_status["status"] = "Connected"
                return
            except Exception:
                time.sleep(1)  # Wait briefly and retry

        raise TimeoutError("Heartbeat not received within the timeout period.")
    except Exception as e:
        print(f"Failed to connect: {str(e)}")
        connection_status["status"] = "Not Connected"

# Start a background thread to update telemetry data
def start_telemetry_thread():
    telemetry_thread = threading.Thread(target=update_telemetry_data)
    telemetry_thread.daemon = True
    telemetry_thread.start()

# GPS average calculator
# def GPS_avg(Lat, Long, Alt):
#     global Lats_sum, Longs_sum, Alt_sum, count
#     Lats_sum += Lat
#     Longs_sum += Long
#     Alt_sum += Alt
#     count += 1
#     return [Lats_sum / count, Longs_sum / count, Alt_sum / count]

# Function to continuously receive and store telemetry data
def update_telemetry_data():
    # global gps_avg_array
    start_time = time.time()  # Record the start time

    while True:
        if vehicle is None:
            time.sleep(1)
            continue

        msg = vehicle.recv_match(blocking=True)
        if msg:
            if msg.get_type() == "GPS_RAW_INT":
                telemetry_data["gps"] = {
                    "latitude": msg.lat / 1e7,
                    "longitude": msg.lon / 1e7,
                    "altitude": msg.alt / 1000
                }

                # gps_avg_array = GPS_avg(telemetry_data['gps']['latitude'], 
                #                         telemetry_data['gps']['longitude'], 
                #                         telemetry_data['gps']['altitude'])

            elif msg.get_type() == "GLOBAL_POSITION_INT":
                telemetry_data["position"] = {
                    "latitude": msg.lat / 1e7,
                    "longitude": msg.lon / 1e7,
                    "altitude": msg.relative_alt / 1000
                }

            elif msg.get_type() == "ATTITUDE":
                telemetry_data["attitude"] = {
                    "roll": msg.roll,
                    "pitch": msg.pitch,
                    "yaw": msg.yaw
                }

            elif msg.get_type() == "BATTERY_STATUS":
                voltage = msg.voltages[0] / 1000  # mV to V
                current = msg.current_battery / 100  # cA to A
                telemetry_data["battery"] = {
                    "voltage": voltage,
                    "current": current,
                    "remaining": msg.battery_remaining
                }

            print(telemetry_data)
        # Stop the loop after 20 seconds
        if time.time() - start_time >= 20:
            break

        time.sleep(1)  # Delay to reduce data processing load

    print("GPS Average Values:", gps_avg_array)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8001, debug=True)
