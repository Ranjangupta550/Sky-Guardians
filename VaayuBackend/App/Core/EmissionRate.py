import math

def calculate_emission_rate(
    point_sources,        # List of dictionaries, each defining point sources
    line_sources,         # List of dictionaries, each defining line sources
    h_min,                # Minimum height of the grid
    h_max,                # Maximum height of the grid
    time_step,            # Current time step (seconds)
    time_period           # Time period for cyclic variation (seconds)
):
    """
    Calculate the emission rate for a grid of pollution sources.
    
    Parameters:
    - point_sources: List of point sources [{R: float, P: float (optional)}, ...]
    - line_sources: List of line sources [{R: float, L: float}, ...]
    - h_min: Minimum height of the grid (meters).
    - h_max: Maximum height of the grid (meters).
    - time_step: Current time step (seconds).
    - time_period: Time period for temporal cyclic variation (seconds).
    
    Returns:
    - Total emission rate for the grid.
    """
    
    # Temporal pattern: Cyclic variation
    temporal_factor = math.sin((2 * math.pi * time_step) / time_period)
    temporal_factor = max(0, temporal_factor)  # No negative emissions
    
    # Initialize total emission rate
    total_emission_rate = 0

    # Calculate emission rate for point sources
    for source in point_sources:
        R = source['R']  # Release rate (kg/s)
        total_emission_rate += R * temporal_factor

    # Calculate emission rate for line sources (treated as multiple point sources)
    for source in line_sources:
        R = source['R']  # Release rate per unit length (kg/m/s)
        L = source['L']  # Length of the line source (meters)
        num_point_sources = int(L / (h_max - h_min))  # Divide line into point sources
        
        for _ in range(num_point_sources):
            total_emission_rate += R * (h_max - h_min) * temporal_factor

    return total_emission_rate


# Example usage:
if __name__ == "__main__":
    # Define input parameters
    point_sources = [
        {"R": 0.1},  # Release rate 0.1 kg/s for point source 1
        {"R": 0.2},  # Release rate 0.2 kg/s for point source 2
    ]
    line_sources = [
        {"R": 0.05, "L": 100},  # Release rate 0.05 kg/m/s, length 100m
    ]
    h_min = 5  # Minimum height (meters)
    h_max = 100  # Maximum height (meters)
    time_step = 10  # Current time (seconds)
    time_period = 60  # Time period for cyclic variation (seconds)

    # Calculate emission rate
    emission_rate = calculate_emission_rate(point_sources, line_sources, h_min, h_max, time_step, time_period)
    print(f"Total Emission Rate: {emission_rate:.4f} kg/s")
