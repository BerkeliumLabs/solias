import { contextBridge, ipcRenderer } from "electron";

window.onload = () => {
    /* Context Bridge */
    contextBridge.exposeInMainWorld('soliasCoreService', {
        openDialog: async () => ipcRenderer.invoke('openfile')
    });
};
