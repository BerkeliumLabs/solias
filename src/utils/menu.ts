import { MenuItemConstructorOptions, shell } from 'electron';
import { SoliasFileManager } from './file-manager';

// isMac = process.platform === 'darwin';
export const SOLIAS_MENU_ITEMS: MenuItemConstructorOptions[] = [
    {
        id: 'file',
        label: 'File',
        submenu: [
            {
                label: 'Open',
                click: async (_, win) => {
                    const fileService = new SoliasFileManager();
                    const fileData = await fileService.openFile();
                    win.webContents.send('openfile', fileData);
                },
                accelerator: 'CmdOrCtrl+O'
            },
            {
                label: 'Save',
                click: async (_, win) => {
                    win.webContents.send('savefile-from-menu');
                },
                accelerator: 'CmdOrCtrl+S'
            },
            {
                label: 'Export',
                click: async (_, win) => {
                    win.webContents.send('export-from-menu');
                },
                accelerator: 'CmdOrCtrl+E'
            },
            {
                type: 'separator',
            },
            {
                role: 'quit',
            }
        ]
    },
    {
        role: 'window',
        submenu: [
            {
                role: 'togglefullscreen',
                accelerator: 'F11'
            },
            {
                role: 'reload',
                accelerator: 'CmdOrCtrl+R'
            },
            {
                type: 'separator',
            },
            {
                role: 'toggleDevTools'
            },
            {
                role: 'close'
            }
        ]
    },
    {
        role: 'help',
        submenu: [
            {
                label: 'About',
                click: () => shell.openExternal('https://www.buddhilive.com'),
                accelerator: 'Alt+F1'
            }
        ]
    }
];