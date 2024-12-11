// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const mapContainer = document.getElementById("map");

  // Initialize the map using Google Maps API
  const map = new google.maps.Map(mapContainer, {
    center: { lat: 28.6139, lng: 77.209 }, // New Delhi coordinates
    zoom: 10,
  });

  // Add a marker at the map's center
  const marker = new google.maps.Marker({
    position: { lat: 28.6139, lng: 77.209 },
    map: map,
    title: "Vaayu Drone Location",
  });

  console.log("Google Map loaded successfully!");

  // Fetch data from backend API and update the dashboard
  function fetchSensorData() {
    // Example endpoint for sensor data (replace with your actual endpoint)
    fetch('/api/sensor-data')
      .then(response => response.json())
      .then(data => {
        updateSensorValues(data);
      })
      .catch(error => console.error('Error fetching sensor data:', error));
  }

  // Update sensor values on the dashboard
  function updateSensorValues(data) {
    document.getElementById("aqiValue").textContent = data.aqi || '--';
    document.getElementById("temperatureValue").textContent = data.temperature || '--';
    document.getElementById("humidityValue").textContent = data.humidity || '--';
    document.getElementById("coLevel").textContent = data.coLevel || '--';
    document.getElementById("pm25Value").textContent = data.pm25 || '--';
    document.getElementById("pm10Value").textContent = data.pm10 || '--';
  }

  // Handle new plan creation
  document.getElementById("newPlanForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const planName = document.getElementById("planName").value;
    const planLocation = document.getElementById("planLocation").value;
    const planTime = document.getElementById("planTime").value;

    // Example endpoint for creating a new plan (replace with your actual endpoint)
    fetch('/api/new-plan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ planName, planLocation, planTime })
    })
    .then(response => response.json())
    .then(data => {
      addPlanToHistory(data);  // Add the new plan to the history list
    })
    .catch(error => console.error('Error creating new plan:', error));
  });
  document.getElementById('newPlanBtn').addEventListener('click', function() {
    // Get form values
    const planName = document.getElementById('planName').value;
    const planLocation = document.getElementById('planLocation').value;
    const planTime = document.getElementById('planTime').value;
    
    // Clear input fields after getting the values
    document.getElementById('planName').value = '';
    document.getElementById('planLocation').value = '';
    document.getElementById('planTime').value = '';
  
    // Create a new plan item in the history
    const newPlanItem = document.createElement('li');
    newPlanItem.textContent = `${planName} - ${planLocation} at ${planTime}`;
  
    // Add the new plan item to the history list
    document.getElementById('historyPlanList').appendChild(newPlanItem);
  });

  function addPlanToHistory(plan) {
    const planItem = document.createElement("li");
    planItem.textContent = `${plan.name} - ${plan.location} at ${new Date(plan.time).toLocaleString()}`;
    document.getElementById("historyPlanList").appendChild(planItem);
  }

  // Modal handling
  const modal = document.getElementById("newPlanModal");
  const closeBtn = document.getElementsByClassName("close")[0];

  document.getElementById("newPlanBtn").addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close the modal if user clicks outside of it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Fetch initial sensor data
  fetchSensorData();
});
