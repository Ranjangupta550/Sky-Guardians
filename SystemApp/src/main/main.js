const { app, BrowserWindow, ipcMain } = require('electron');
let splash, mainWindow, dashboardWindow;

app.on('ready', () => {
  splash = new BrowserWindow({
    width: 800,
    height: 400,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
  });

  splash.loadFile('src/renderer/pages/splash.html');

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      preload: `${__dirname}/preload.js`,
    },
  });

  mainWindow.loadFile('src/renderer/pages/mainDashboard.html');

  setTimeout(() => {
    splash.close();
    mainWindow.show();
  }, 3000);

  
});

ipcMain.on('login-attempt', (event, { username, password }) => {
  const userData = {
    username: 'user123',
    password: 'password123'
  };

  if (username === userData.username && password === userData.password) {
    event.sender.send('login-successful');
  } else {
    event.sender.send('login-error');
  }
});

ipcMain.on('login-successful', () => {
  dashboardWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: `${__dirname}/preload.js`,
    },
  });

  dashboardWindow.loadFile('src/renderer/pages/mainDashboard.html');

  dashboardWindow.webContents.send('show-notification', 'Login Successful! Redirecting to the dashboard.');
  mainWindow.close();
});

ipcMain.on('logout', () => {
  if (dashboardWindow) {
    dashboardWindow.close();
  }

  mainWindow.show();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
