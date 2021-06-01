const path = require('path');
const { app, BrowserWindow } = require('electron');

const startPackages = require('./packages');

// Window
function createWindow () {
  const main = new BrowserWindow({
    width: 1024,
    height: 768,
    autoHideMenuBar: true,
    show: false,
    backgroundColor: '#5C16C5',
    titleBarStyle: 'hidden',
    icon: path.join(__dirname, '/assets/icon.png')
  });
  const splash = new BrowserWindow({
    width: 810,
    height: 610,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    icon: path.join(__dirname, '/assets/icon.png')
  });

  splash.loadFile(path.join(__dirname, '/splash.html'));
  main.loadURL('http://localhost:8000');

  main.webContents.on('did-fail-load', () => {
    main.loadURL('http://localhost:8000');
  });

  main.webContents.on('did-stop-loading', () => {
    splash.destroy();
    main.show();
  });
}

app.whenReady().then(() => {
  startPackages();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
