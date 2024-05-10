import { contextBridge, ipcRenderer } from "electron";
import { SoliasGrapesJS } from "./classes/grapesjs";

window.onload = () => {
    /* Initialize GrapeJS Editor Instance */
    const grapesjsEditor = new SoliasGrapesJS();
    grapesjsEditor.init();

    /* Context Bridge */
    contextBridge.exposeInMainWorld('soliasCoreService', {
        openDialog: async () => ipcRenderer.invoke('openfile')
    });
};
