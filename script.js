// Function to toggle the visibility of the project details
function toggleDetails(projectId) {
  var details = document.getElementById('details-' + projectId);
  if (details.style.display === 'none') {
    details.style.display = 'block';
  } else {
    details.style.display = 'none';
  }
}

// Function to close the project window
function closeWindow(windowId) {
  var windowElement = document.getElementById(windowId);
  windowElement.style.display = 'none';
}

// Function to open the project window
function openWindow(windowId) {
  var windowElement = document.getElementById(windowId);
  windowElement.style.display = 'block';
}
