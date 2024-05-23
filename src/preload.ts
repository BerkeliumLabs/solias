import { contextBridge, ipcRenderer } from "electron";
import { SoliasCore } from "./classes/solias-core";
import { SoliasCoreService } from "./shared/interfaces/window.interface";

/* Context Bridge */
contextBridge.exposeInMainWorld('soliasCoreService', {
    version: () => ipcRenderer.invoke('cli')
});

/* Extend Global Variables */
declare global {
    interface Window { soliasCoreService: SoliasCoreService; }
}

window.onload = () => {
    /* Initialize Solias App */
    const soliasApp = new SoliasCore();
    soliasApp.init();
};
