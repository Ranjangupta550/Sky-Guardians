# Placeholder for Python module

from App import create_app
from App.Config.Settings import Config

# Create the app instance using the application factory
app = create_app()

if __name__ == "__main__":
    # Run the application
    app.run(host="0.0.0.0", port=Config.Server_Port, debug=True)
