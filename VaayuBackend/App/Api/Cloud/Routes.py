# from flask import request, jsonify
# from influxdb_client import InfluxDBClient
# from influxdb_client.client.write_api import SYNCHRONOUS
# import os

# # Initialize Flask app
# app = Flask(__name__)


# @app.route("/api/gas-data", methods=["POST"])
# def receive_gas_data():
#     """
#     Endpoint to receive gas data from IoT devices or sensors.
#     Expects a JSON payload with `sensor_id`, `location`, `gas_type`, and `value`.
#     """
#     try:
#         # Parse JSON request body
#         data = request.json
        
#         # Validate payload
#         required_keys = ["sensor_id", "location", "gas_type", "value", "timestamp"]
#         if not all(key in data for key in required_keys):
#             return jsonify({"error": "Invalid payload. Missing required keys."}), 400
        
#         # Create InfluxDB data point in line protocol format
#         data_point = f"{data['gas_type']},sensor_id={data['sensor_id']},location={data['location']} value={data['value']} {data['timestamp']}"
        
#         # Write data to InfluxDB
#         write_api.write(bucket=INFLUXDB_BUCKET, org=INFLUXDB_ORG, record=data_point)
        
#         # Respond with success
#         return jsonify({"message": "Gas data received and stored successfully"}), 200
    
#     except Exception as e:
#         print(f"Error receiving gas data: {e}")
#         return jsonify({"error": "Failed to process gas data"}), 500
