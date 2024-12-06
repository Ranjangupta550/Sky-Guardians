import os

# Define the directory structure
DIR_STRUCTURE = {
    "vaayu-backend": [
        "app/api/web",
        "app/api/mobile",
        "app/api/system",
        "app/api/cloud",
        "app/core",
        "app/db",
        "app/services",
        "app/config",
        "tests",
        "docs",
        "scripts",
    ]
}

FILES = {
    "vaayu-backend": [
        "requirements.txt",
        "README.md",
        ".env",
        ".gitignore",
        "run.py",
    ],
    "vaayu-backend/app": ["__init__.py"],
    "vaayu-backend/app/api": ["__init__.py", "utils.py"],
    "vaayu-backend/app/api/web": ["__init__.py", "routes.py"],
    "vaayu-backend/app/api/mobile": ["__init__.py", "routes.py"],
    "vaayu-backend/app/api/system": ["__init__.py", "routes.py"],
    "vaayu-backend/app/api/cloud": ["__init__.py", "routes.py"],
    "vaayu-backend/app/core": [
        "__init__.py",
        "calibration.py",
        "data_processing.py",
        "flight_management.py",
    ],
    "vaayu-backend/app/db": ["__init__.py", "models.py", "utils.py"],
    "vaayu-backend/app/services": [
        "__init__.py",
        "cloud_service.py",
        "mqtt_service.py",
        "auth_service.py",
        "notification_service.py",
    ],
    "vaayu-backend/app/config": ["__init__.py", "settings.py", "secrets.py"],
    "vaayu-backend/tests": ["__init__.py", "test_api.py", "test_core.py", "test_services.py"],
    "vaayu-backend/docs": ["architecture.md", "api_endpoints.md", "setup_guide.md"],
    "vaayu-backend/scripts": ["deploy.py", "db_setup.py", "cron_jobs.py"],
}

# Function to create directories
def create_dirs():
    for parent, subdirs in DIR_STRUCTURE.items():
        for subdir in subdirs:
            path = os.path.join(parent, subdir)
            os.makedirs(path, exist_ok=True)
            print(f"Created directory: {path}")

# Function to create files with placeholders
def create_files():
    for parent, files in FILES.items():
        for file in files:
            path = os.path.join(parent, file)
            if not os.path.exists(path):
                with open(path, "w") as f:
                    # Add placeholders for certain files
                    if file.endswith(".py"):
                        f.write("# Placeholder for Python module\n")
                    elif file.endswith(".md"):
                        f.write("# Documentation Placeholder\n")
                    else:
                        f.write("")
                print(f"Created file: {path}")

# Main function to initialize the backend structure
def main():
    print("Initializing VAAYU Backend Directory Structure...")
    create_dirs()
    create_files()
    print("Initialization complete.")

if __name__ == "__main__":
    main()
