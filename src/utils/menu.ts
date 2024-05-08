import { MenuItemConstructorOptions, shell } from 'electron';

// isMac = process.platform === 'darwin';
export const SOLIAS_MENU_ITEMS: MenuItemConstructorOptions[] = [
    {
        id: 'file',
        label: 'File',
        submenu: [
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