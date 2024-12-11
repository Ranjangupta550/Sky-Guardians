// splash.js
const { app, BrowserWindow } = require('electron');
let splash, mainWindow;

app.on('ready', () => {
  // Create Splash Screen
  splash = new BrowserWindow({
    width: 400,
    height: 400,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
  });

  splash.loadFile('src/renderer/pages/splash.html');

  // Create Main Window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false, // Hide the main window initially
    webPreferences: {
      preload: `${__dirname}/preload.js`,
    },
  });

  mainWindow.loadFile('src/renderer/pages/login.html');

  // Show Main Window after 3 seconds and close the splash screen
  setTimeout(() => {
    splash.close();
    mainWindow.show();
  }, 3000);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
