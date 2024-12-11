document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const newPlanBtn = document.getElementById('newPlanBtn');
    const newPlanModal = document.getElementById('newPlanModal');
    const closeBtn = document.querySelector('.close');
    const newPlanForm = document.getElementById('newPlanForm');
    const historyPlanList = document.getElementById('historyPlanList');
    const sensorValues = {
      aqi: document.getElementById('aqiValue'),
      temperature: document.getElementById('temperatureValue'),
      humidity: document.getElementById('humidityValue'),
      coLevel: document.getElementById('coLevel'),
      pm25: document.getElementById('pm25Value'),
      pm10: document.getElementById('pm10Value')
    };
  
    // Initialize Google Map
    function initMap() {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -9.62882585, lng: -22.40238598 },
        zoom: 10
      });
    }
  
    initMap(); // Call map initialization function
  
    // Show Modal
    newPlanBtn.addEventListener('click', () => {
      newPlanModal.style.display = 'flex';
    });
  
    // Close Modal
    closeBtn.addEventListener('click', () => {
      newPlanModal.style.display = 'none';
    });
  
    // Add new plan form submission
    newPlanForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const planName = document.getElementById('planName').value;
      const planDate = document.getElementById('planDate').value;
      const planTime = document.getElementById('planTime').value;
      const planLocation = document.getElementById('planLocation').value;
  
      // Validate and submit to backend here
      console.log('Plan submitted:', { planName, planDate, planTime, planLocation });
  
      // Add to History Plan Section
      const planItem = document.createElement('li');
      planItem.textContent = `${planName} - ${planDate} ${planTime} at ${planLocation}`;
      historyPlanList.appendChild(planItem);
  
      // Clear form
      newPlanForm.reset();
      newPlanModal.style.display = 'none';
    });
  
    // Update sensor data function
    function updateSensorData(data) {
      sensorValues.aqi.textContent = data.aqi || '--';
      sensorValues.temperature.textContent = data.temperature || '--';
      sensorValues.humidity.textContent = data.humidity || '--';
      sensorValues.coLevel.textContent = data.coLevel || '--';
      sensorValues.pm25.textContent = data.pm25 || '--';
      sensorValues.pm10.textContent = data.pm10 || '--';
    }
  
    // Mock function to simulate receiving sensor data
    function fetchSensorData() {
      // Simulating data fetch from backend
      return {
        aqi: Math.floor(Math.random() * 100),
        temperature: (Math.random() * 30).toFixed(1),
        humidity: (Math.random() * 100).toFixed(1),
        coLevel: (Math.random() * 10).toFixed(2),
        pm25: Math.floor(Math.random() * 100),
        pm10: Math.floor(Math.random() * 100)
      };
    }
  
    // Update sensor data every 5 seconds
    setInterval(() => {
      const data = fetchSensorData();
      updateSensorData(data);
    }, 5000);
  });
  
// Example function to fetch and display user data
function fetchUserData() {
    // Simulated user data fetch
    const userData = {
        username: 'user123',
        settings: {
            theme: 'dark',
            notifications: true
        }
    };

    document.getElementById('usernameDisplay').innerText = `Hello, ${userData.username}`;
    // Additional UI updates based on user settings can go here
}

// Fetch user data when dashboard loads
window.onload = fetchUserData;
