from influxdb_client import InfluxDBClient
from App.Config.Settings import Config
from App.Db.Utils import write_data_to_influxdb

INFLUXDB_URL = Config.URL
INFLUXDB_TOKEN = Config.INFLUX_API_KEY
INFLUXDB_ORG = Config.ORGANISATION_NAME
# INFLUXDB_BUCKET =   


def initialize_influxdb_connection():
    try:
        #bucket 
        bucket = "SensorData"
        # Create the InfluxDB client instance
        client = InfluxDBClient(url=INFLUXDB_URL, token=INFLUXDB_TOKEN, org=INFLUXDB_ORG)
        # create data point
        data_point = {
         "measurement": "temperature",
         "tags": {
         " location": "delhi",
         "sensor": "sensor01"
         },
         "fields": {
         "value": 25.3
         },
         "time": "2024-12-05T10:00:00Z"
}

        # Verify connection
        health = client.ping()
        if health:
            print("InfluxDB connection established successfully!")
            write_data_to_influxdb(client, data_point, bucket)
            return client
        else:
            print("Unable to connect to InfluxDB. Please check your connection settings.")
            return None

    except Exception as e:
        print(f"An error occurred while connecting to InfluxDB: {e}")
        return None
    