# Placeholder for Python module

from flask import Flask, request, jsonify
from App.Config.Settings import Config
# from App.Api.Web.Routes import web_blueprint
# from App.Api.Mobile.Routes import mobile_blueprint
# from App.Api.System.Routes import system_blueprint
# from App.Api.Cloud.Routes import cloud_blueprint
from App.Db import initialize_influxdb_connection
# from App.Api.Sensor import sensor_bp

def create_app():
    """
    Application Factory to initialize the Flask application.
    """
    # Create Flask app instance
    app = Flask(__name__)
    
    # Load configurations
    app.config.from_object(Config)
    print("app created successfully")

    # Initialize extensions (e.g., database, authentication)
    initialize_extensions(app)

    # call core methods
    
   
    
    # Register blueprints
    
    # app.register_blueprint(sensor_bp, url_prefix='/Sensor')
    # register_blueprints(app)

    return app

def initialize_extensions(app):
   
    initialize_influxdb_connection()

# def register_blueprints(app):
#     """
#     Register API blueprints.
#     """
#     app.register_blueprint(web_blueprint, url_prefix="/api/web")
#     app.register_blueprint(mobile_blueprint, url_prefix="/api/mobile")
#     app.register_blueprint(system_blueprint, url_prefix="/api/system")
#     app.register_blueprint(cloud_blueprint, url_prefix="/api/cloud")
