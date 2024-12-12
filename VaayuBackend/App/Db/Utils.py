from influxdb_client.client.write_api import SYNCHRONOUS

# INFLUXDB_BUCKET = "gas_sensor_bucket"

def write_data_to_influxdb(client, data_point, bucket):
    if not client:
        print("Invalid InfluxDB client. Cannot write data.")
        return

    try:
        write_api = client.write_api(write_options=SYNCHRONOUS)
        write_api.write(bucket=bucket, org=client.org, record=data_point)
        print("Data written successfully to InfluxDB!")
    except Exception as e:
        print(f"Error while writing to InfluxDB: {e}")
