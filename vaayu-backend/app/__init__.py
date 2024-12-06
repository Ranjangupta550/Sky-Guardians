# Placeholder for Python module

import os
from flask import Flask
from .db.utils import get_db, close_db


def create_app(test_config=None):
    # Create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        MONGO_URI='mongodb://localhost:27017/mydatabase',  # Default MongoDB URI
    )

    if test_config:
        # Load test-specific configuration
        app.config.from_mapping(test_config)

    # Ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # Register teardown function for MongoDB
    app.teardown_appcontext(close_db)

    # Example route
    @app.route('/')
    def hello():
        return 'Hello, MongoDB!'

    # Example route to fetch data from the database
    @app.route('/items')
    def get_items():
        db = get_db()  # Use the database connection
        collection = db['items']  # Replace 'items' with your collection name
        # items = list(collection.find({}))  # Convert cursor to list
        # return {'data': items}
        return {"db connected"}

    return app
