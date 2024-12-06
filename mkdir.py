import os

# Define the directory structure in CamelCase
DIR_STRUCTURE = {
    "VaayuBackend": [
        "App/Api/Web",
        "App/Api/Mobile",
        "App/Api/System",
        "App/Api/Cloud",
        "App/Core",
        "App/Db",
        "App/Services",
        "App/Config",
        "Tests",
        "Docs",
        "Scripts",
    ]
}

FILES = {
    "VaayuBackend": [
        "Requirements.txt",
        "ReadMe.md",
        ".env",
        ".GitIgnore",
        "Run.py",
    ],
    "VaayuBackend/App": ["__Init__.py"],
    "VaayuBackend/App/Api": ["__Init__.py", "Utils.py"],
    "VaayuBackend/App/Api/Web": ["__Init__.py", "Routes.py"],
    "VaayuBackend/App/Api/Mobile": ["__Init__.py", "Routes.py"],
    "VaayuBackend/App/Api/System": ["__Init__.py", "Routes.py"],
    "VaayuBackend/App/Api/Cloud": ["__Init__.py", "Routes.py"],
    "VaayuBackend/App/Core": [
        "__Init__.py",
        "Calibration.py",
        "DataProcessing.py",
        "FlightManagement.py",
    ],
    "VaayuBackend/App/Db": ["__Init__.py", "Models.py", "Utils.py"],
    "VaayuBackend/App/Services": [
        "__Init__.py",
        "CloudService.py",
        "MqttService.py",
        "AuthService.py",
        "NotificationService.py",
    ],
    "VaayuBackend/App/Config": ["__Init__.py", "Settings.py", "Secrets.py"],
    "VaayuBackend/Tests": ["__Init__.py", "TestApi.py", "TestCore.py", "TestServices.py"],
    "VaayuBackend/Docs": ["Architecture.md", "ApiEndpoints.md", "SetupGuide.md"],
    "VaayuBackend/Scripts": ["Deploy.py", "DbSetup.py", "CronJobs.py"],
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
