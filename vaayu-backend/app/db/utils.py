# Placeholder for Python module

from pymongo import MongoClient
from flask import current_app, g
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def get_db():
   
    if 'db' not in g:
        try:
            mongo_client = MongoClient(current_app.config['mongodb://localhost:27017/mydatabase'])
            g.db = mongo_client.get_default_database()
            logger.info("MongoDB connection established successfully.")
        except Exception as e:
            logger.error(f"Failed to connect to MongoDB: {e}")
            raise
    return g.db


def close_db(exception=None):
   
    db = g.pop('db', None)
    if db:
        try:
            db.client.close()
            logger.info("MongoDB connection closed successfully.")
        except Exception as e:
            logger.error(f"Failed to close MongoDB connection: {e}")
