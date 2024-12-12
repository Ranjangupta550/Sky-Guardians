import math
import random
import heapq
import numpy as np
import matplotlib.pyplot as plt

def calculate_3d_distance(wp1, wp2):
    lat1, lon1, alt1 = wp1
    lat2, lon2, alt2 = wp2

    R = 6371  # Earth's radius in kilometers
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    
    a = math.sin(dlat / 2)**2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dlon / 2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))

    ground_distance = R * c  # Distance on Earth's surface
    vertical_distance = abs(alt2 - alt1) / 1000  # Convert altitude difference to kilometers

    return math.sqrt(ground_distance**2 + vertical_distance**2)

def find_shortest_path(waypoints):
    n = len(waypoints)
    graph = {i: [] for i in range(n)}

    for i in range(n):
        for j in range(i + 1, n):
            distance = calculate_3d_distance(waypoints[i], waypoints[j])
            graph[i].append((distance, j))
            graph[j].append((distance, i))

    start = min(range(n), key=lambda i: waypoints[i][2])

    visited = [False] * n
    path = []
    current_node = start

    while len(path) < n:
        visited[current_node] = True
        path.append(current_node)

        next_node = None
        min_distance = float('inf')

        for distance, neighbor in graph[current_node]:
            if not visited[neighbor] and distance < min_distance:
                min_distance = distance
                next_node = neighbor

        if next_node is None:
            break

        current_node = next_node

    return path

def reorder_waypoints(waypoints, path):
    return [waypoints[i] for i in path]

def generate_waypoints_file(reordered_waypoints, file_name="output.waypoints"):
    with open(file_name, "w") as file:
        file.write("QGC WPL 110\n")
        for idx, (lat, lon, alt) in enumerate(reordered_waypoints):
            file.write(f"{idx + 1}\t0\t3\t16\t0\t0\t0\t0\t{lat}\t{lon}\t{alt}\t1\n")

def generate_dummy_waypoints(center_lat, center_lon, center_alt, area_radius_km, num_waypoints, min_altitude, max_altitude):
    waypoints = []
    for _ in range(num_waypoints):
        # Generate random latitude and longitude within the bounding box
        delta_lat = random.uniform(-area_radius_km / 110.574, area_radius_km / 110.574)
        delta_lon = random.uniform(-area_radius_km / (111.320 * abs(math.cos(math.radians(center_lat)))), 
                                   area_radius_km / (111.320 * abs(math.cos(math.radians(center_lat)))))
        latitude = center_lat + delta_lat
        longitude = center_lon + delta_lon
        
        # Generate random altitude within the specified range, centered around center_alt
        altitude = random.uniform(center_alt + min_altitude, center_alt + max_altitude)
        
        waypoints.append((latitude, longitude, altitude))
    return waypoints

def implementCore(waypoints, file_name="output.waypoints"):
    path = find_shortest_path(waypoints)
    reordered_waypoints = reorder_waypoints(waypoints, path)
    generate_waypoints_file(reordered_waypoints, file_name)
    return reordered_waypoints, file_name

# Example usage
if __name__ == "__main__":
    # Generate dummy waypoints
    center_lat = 28.6139  # Latitude for Delhi
    center_lon = 77.2090  # Longitude for Delhi
    center_alt = 216  # Approximate central altitude
    area_radius_km = 5  # Small area radius in kilometers
    num_waypoints = 250  # Number of waypoints
    min_altitude = -50  # Minimum altitude offset from center altitude (meters)
    max_altitude = 50  # Maximum altitude offset from center altitude (meters)

    waypoints = generate_dummy_waypoints(center_lat, center_lon, center_alt, area_radius_km, num_waypoints, min_altitude, max_altitude)

    # Process waypoints
    reordered_waypoints, output_file_name = implementCore(waypoints)
    print(f"Reordered waypoints saved to {output_file_name}")
