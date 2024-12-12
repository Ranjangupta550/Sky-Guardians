import numpy as np

def calculate_particle_concentration(grid, emissions, decay_rate, deposition_velocity, grid_height, time_elapsed):
    """
    Calculate particle concentrations in a 3D grid considering decay and deposition.

    Parameters:
    - grid: Tuple (nx, ny, nz) defining the grid size in x, y, z directions.
    - emissions: 3D numpy array of emission intensities (particles/s) for each grid cell.
    - decay_rate: Decay rate (lambda) in s^-1.
    - deposition_velocity: Deposition velocity (m/s).
    - grid_height: Height of each grid cell (m).
    - time_elapsed: Time elapsed (seconds).

    Returns:
    - 3D numpy array of particle concentrations (particles/m^3).
    """

    # Initialize grid dimensions
    nx, ny, nz = grid

    # Initialize concentration array
    concentrations = np.zeros((nx, ny, nz))

    # Calculate concentration for each grid cell
    for i in range(nx):
        for j in range(ny):
            for k in range(nz):
                # Emission intensity for the current cell
                emission_intensity = emissions[i, j, k]

                # Calculate concentration
                rate_factor = decay_rate + deposition_velocity / grid_height
                concentrations[i, j, k] = (
                    (emission_intensity / rate_factor) * np.exp(-rate_factor * time_elapsed)
                )

    return concentrations


# Example Usage
if __name__ == "__main__":
    # Define grid dimensions (nx, ny, nz)
    nx, ny, nz = 10, 10, 5

    # Define emission intensities (random example data for each grid cell)
    emissions = np.random.uniform(low=0.1, high=5.0, size=(nx, ny, nz))  # particles/s

    # Define parameters
    decay_rate = 0.01  # s^-1
    deposition_velocity = 0.005  # m/s
    grid_height = 10  # m
    time_elapsed = 3600  # 1 hour

    # Calculate particle concentrations
    concentrations = calculate_particle_concentration(
        (nx, ny, nz), emissions, decay_rate, deposition_velocity, grid_height, time_elapsed
    )

    print("Particle Concentrations (particles/m^3):")
    print(concentrations)
