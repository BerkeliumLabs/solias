import { contextBridge, ipcRenderer } from "electron";
import { SoliasCore } from "./classes/solias-core";

window.onload = () => {
    /* Context Bridge */
    contextBridge.exposeInMainWorld('soliasCoreService', {
        openDialog: async () => ipcRenderer.invoke('openfile')
    });

    /* Initialize Solias App */
    const soliasApp = new SoliasCore();
    soliasApp.init();
};
