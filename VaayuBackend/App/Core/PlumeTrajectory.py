import numpy as np
import matplotlib.pyplot as plt

def simulate_plume(particles, wind_field, turbulence, decay_rate, time_steps, grid_limits, delta_t):
    """
    Simulate pollutant dispersion using Lagrangian Particle Dispersion Model.

    Parameters:
    - particles: Initial positions of particles as (N, 3) array [x, y, z].
    - wind_field: Function (x, y, z, t) -> (U, V, W), providing wind velocity at a position.
    - turbulence: Turbulence intensities as (sigma_x, sigma_y, sigma_z).
    - decay_rate: Decay rate of particles (s^-1).
    - time_steps: Number of time steps to simulate.
    - grid_limits: Spatial limits of the grid as [x_min, x_max, y_min, y_max, z_min, z_max].
    - delta_t: Time step duration (s).

    Returns:
    - trajectory: List of particle positions at each time step.
    """
    # Unpack parameters
    sigma_x, sigma_y, sigma_z = turbulence
    x_min, x_max, y_min, y_max, z_min, z_max = grid_limits

    # Initialize trajectory list
    trajectory = [particles.copy()]

    for t in range(time_steps):
        # Get current positions
        current_positions = trajectory[-1]

        # Initialize new positions
        new_positions = np.zeros_like(current_positions)

        for i, (x, y, z) in enumerate(current_positions):
            # Get wind velocity at current position
            U, V, W = wind_field(x, y, z, t * delta_t)

            # Update position with advection
            new_x = x + U * delta_t
            new_y = y + V * delta_t
            new_z = z + W * delta_t

            # Add turbulence
            new_x += np.random.normal(0, sigma_x)
            new_y += np.random.normal(0, sigma_y)
            new_z += np.random.normal(0, sigma_z)

            # Apply grid constraints
            new_x = np.clip(new_x, x_min, x_max)
            new_y = np.clip(new_y, y_min, y_max)
            new_z = np.clip(new_z, z_min, z_max)

            # Apply decay (optional)
            if decay_rate > 0:
                concentration = np.exp(-decay_rate * t * delta_t)
            else:
                concentration = 1  # No decay

            # Save updated position
            new_positions[i] = [new_x, new_y, new_z]

        # Save new positions to trajectory
        trajectory.append(new_positions)

    return trajectory


# Example wind field function
def wind_field(x, y, z, t):
    # Example: Simple uniform wind
    U = 1.0  # m/s
    V = 0.5  # m/s
    W = 0.1  # m/s
    return U, V, W


# Example Usage
if __name__ == "__main__":
    # Initial particle positions
    num_particles = 100
    particles = np.random.uniform(0, 10, (num_particles, 3))  # Random initial positions

    # Parameters
    turbulence = (0.1, 0.1, 0.05)  # Turbulence intensities
    decay_rate = 0.001  # s^-1
    time_steps = 100  # Number of time steps
    grid_limits = [0, 20, 0, 20, 0, 10]  # Grid limits
    delta_t = 1  # Time step duration (s)

    # Simulate plume
    trajectory = simulate_plume(particles, wind_field, turbulence, decay_rate, time_steps, grid_limits, delta_t)

    # Visualization
    trajectory = np.array(trajectory)
    for i in range(num_particles):
        plt.plot(trajectory[:, i, 0], trajectory[:, i, 1], alpha=0.5)

    plt.xlabel("X")
    plt.ylabel("Y")
    plt.title("Plume Trajectory (2D projection)")
    plt.show()
