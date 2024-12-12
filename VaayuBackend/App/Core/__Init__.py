from .EmissionRate import calculate_emission_rate
from ParticleCount import calculate_particle_concentration
from PlumeTrajectory import simulate_plume , wind_field
from ShortestPath import find_shortest_path
import numpy as np
import numpy as np
import matplotlib.pyplot as plt
import random , math



# Example usage:
# if __name__ == "__main__":

    # # Define input parameters
    # point_sources = [
    #     {"R": 0.1},  # Release rate 0.1 kg/s for point source 1
    #     {"R": 0.2},  # Release rate 0.2 kg/s for point source 2
    # ]
    # line_sources = [
    #     {"R": 0.05, "L": 100},  # Release rate 0.05 kg/m/s, length 100m
    # ]
    # h_min = 5  # Minimum height (meters)
    # h_max = 100  # Maximum height (meters)
    # time_step = 10  # Current time (seconds)
    # time_period = 60  # Time period for cyclic variation (seconds)

    # # Calculate emission rate
    # emission_rate = calculate_emission_rate(point_sources, line_sources, h_min, h_max, time_step, time_period)
    # print(f"Total Emission Rate: {emission_rate:.4f} kg/s")

    # #.
    # #.
    # #.

    # # Define grid dimensions (nx, ny, nz)
    # nx, ny, nz = 10, 10, 5

    # # Define emission intensities (random example data for each grid cell)
    # emissions = np.random.uniform(low=0.1, high=5.0, size=(nx, ny, nz))  # particles/s

    # # Define parameters
    # decay_rate = 0.01  # s^-1
    # deposition_velocity = 0.005  # m/s
    # grid_height = 10  # m
    # time_elapsed = 3600  # 1 hour

    # # Calculate particle concentrations
    # concentrations = calculate_particle_concentration(
    #     (nx, ny, nz), emissions, decay_rate, deposition_velocity, grid_height, time_elapsed
    # )

    # print("Particle Concentrations (particles/m^3):")
    # print(concentrations)

    # #.
    # #.
    # #.

    #  # Initial particle positions
    # num_particles = 100
    # particles = np.random.uniform(0, 10, (num_particles, 3))  # Random initial positions

    # # Parameters
    # turbulence = (0.1, 0.1, 0.05)  # Turbulence intensities
    # decay_rate = 0.001  # s^-1
    # time_steps = 100  # Number of time steps
    # grid_limits = [0, 20, 0, 20, 0, 10]  # Grid limits
    # delta_t = 1  # Time step duration (s)

    # # Simulate plume
    # trajectory = simulate_plume(particles, wind_field, turbulence, decay_rate, time_steps, grid_limits, delta_t)

    # # Visualization
    # trajectory = np.array(trajectory)
    # for i in range(num_particles):
    #     plt.plot(trajectory[:, i, 0], trajectory[:, i, 1], alpha=0.5)

    # plt.xlabel("X")
    # plt.ylabel("Y")
    # plt.title("Plume Trajectory (2D projection)")
    # plt.show()

    # #.
    # #.
    # #.

    # # Example input waypoints (latitude, longitude, altitude)
    # waypoints = [
    # (28.7041, 77.1025, 216),
    # (27.1767, 78.0081, 170),
    # (26.9124, 75.7873, 431),
    # (28.5355, 77.3910, 220),
    # (27.4728, 77.6737, 150)
    # ]






