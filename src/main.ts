import { app, BrowserWindow, ipcMain, Menu, SaveDialogReturnValue, shell } from 'electron';
import path from 'path';
import { SOLIAS_MENU_ITEMS } from './utils/menu';
import { SoliasFileManager } from './utils/file-manager';
import { ISoliasFileData } from './shared/interfaces/file-data.interface';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'src/icon.png',
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Set min menu
  const mainMenu = Menu.buildFromTemplate(SOLIAS_MENU_ITEMS)
  Menu.setApplicationMenu(mainMenu);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // open maximized
  mainWindow.maximize();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Set notification App name
if (process.platform === 'win32') {
  app.setAppUserModelId(app.name);
}

// Solias additional functionality
// Handle save function
ipcMain.handle('savefile', async (_, fileData: ISoliasFileData): Promise<SaveDialogReturnValue | void> => {
  const fileService = new SoliasFileManager();
  if (fileData.firstSave) {
    return await fileService.saveFile(fileData.data, fileData.fileType);
  } else {
    await fileService.writeFile(fileData.savedPath, fileData.data);
  }
});
// Handle preview
ipcMain.handle('load-preview', (_, filePath: string) => {
  shell.openPath(filePath).catch(err => alert(err));
});
