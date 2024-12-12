import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

class Config:
 
    Server_Port = os.getenv("Server_port", "8000")
    SECRET_KEY = os.getenv("SECRET_KEY", "default_secret_key")
    DEBUG = os.getenv("DEBUG", "False") == "True"

    MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/vaayu")

    MQTT_BROKER_URL = os.getenv("MQTT_BROKER_URL", "localhost")
    MQTT_PORT = int(os.getenv("MQTT_PORT", "1883"))

    INFLUX_API_KEY = os.getenv(("INFLUX_API_KEY"))
    ORGANISATION_NAME=os.getenv("ORGANISATIN_NAME")
    URL=os.getenv("URL")

    ENVIRONMENT = os.getenv("ENVIRONMENT", "production")
