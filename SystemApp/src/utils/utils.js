/**
 * Initialize the Google Map
 * @param {string} elementId - The ID of the HTML element where the map will be displayed
 */
export function initializeMap(elementId) {
    const map = new google.maps.Map(document.getElementById(elementId), {
        center: { lat: 0, lng: 0 },
        zoom: 8,
    });

    // Return the map instance for further use
    return map;
}

/**
 * Update the history plan list with a new plan
 * @param {string} plan - The new plan to add
 */
export function updateHistoryPlan(plan) {
    const historyPlanList = document.getElementById('historyPlanList');
    const listItem = document.createElement('li');
    listItem.textContent = plan;
    historyPlanList.appendChild(listItem);
}

/**
 * Show a modal
 * @param {HTMLElement} modal - The modal element to show
 */
export function showModal(modal) {
    modal.style.display = 'flex';
}

/**
 * Close a modal
 * @param {HTMLElement} modal - The modal element to close
 */
export function closeModal(modal) {
    modal.style.display = 'none';
}
