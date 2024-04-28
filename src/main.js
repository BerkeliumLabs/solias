const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const url = require('url');
const path = require('path');
const fs = require('fs');
// Watch and reload for changes
require('electron-reloader')(module);

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        // icon: path.join(__dirname, 'assets/icon.png'),
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'js/preload.js'),
        },
    });

    //load the index.html from a url
    win.loadURL(url.format({
        pathname: path.join(
            __dirname,
            'views/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Open the DevTools.
    win.webContents.openDevTools();

    // open maximized
    win.maximize()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.

    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
});

// Open File Dialog
ipcMain.handle('dialog:open', async (_, args) => {
    const result = await dialog.showOpenDialog({
        filters: [{
            name: 'ASIDE Files',
            extensions: ['txt']
        }],
        properties: [args.openType]
    });
    console.log(args);
    return result;
});

// Save File Dialog
ipcMain.handle('dialog:save', async (_) => {
    const result = await dialog.showSaveDialog({
        filters: [{
            name: 'ASIDE Files',
            extensions: ['txt']
        }],
        properties: ['createDirectory']
    });

    return result;
});

function notificationShow({...args}) {
    const { Notification } = require('electron');
  
    const notify = new Notification({
      title: args['title'],
      subtitle: args['subtitle'],
      body: args['body'],
    });
    notify.show();
  }