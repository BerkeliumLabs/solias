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
                role: 'minimize'
            },
            {
                role: 'reload'
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