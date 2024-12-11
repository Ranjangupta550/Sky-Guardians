const { ipcRenderer } = require('electron');

document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Send login attempt to main process
  ipcRenderer.send('login-attempt', { username, password });
});

// Handle login error from main process
ipcRenderer.on('login-error', () => {
  document.getElementById('notification').textContent = 'Username or password not valid';
});
