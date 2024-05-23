import { contextBridge, ipcRenderer } from "electron";
import { SoliasCore } from "./classes/solias-core";
import { SoliasCoreService } from "./shared/interfaces/window.interface";
import { SoliasCLIOptions } from "./shared/interfaces/cli-options.interface";
import { ERROR_TEMPLATE } from "./templates/error.template";
import { CORE_TEMPLATE } from "./templates/core.template";

/* Context Bridge */
contextBridge.exposeInMainWorld('soliasCoreService', {
    version: (args: SoliasCLIOptions) => ipcRenderer.invoke('cli-spawn', args)
});

/* Extend Global Variables */
declare global {
    interface Window { soliasCoreService: SoliasCoreService; }
}

let appRoot: HTMLDivElement;

window.onload = () => {
    appRoot = document.querySelector('#app-root');
    setMessage('Initializing...');
    /* Check Versions */
    checkVersions();
};

function checkVersions() {
    const nodeVersion = 18.18;
    const ngVersion = 17;

    try {
        ipcRenderer.invoke('cli-spawn', { cmd: 'node', params: ['-v'] }).then((data) => {
            if (data[0]) {
                const versionNo = String(data[0]).replace('v', '').split('.');
                const currentNodeVersion = parseFloat(`${versionNo[0]}.${versionNo[1]}`);
                if (currentNodeVersion >= nodeVersion) {
                    ipcRenderer.invoke('cli-exec').then((data) => {
                        const regex = /Angular CLI: (\d+\.\d+\.\d+)/;

                        const match = regex.exec(data[0]);

                        if (match) {
                            const angularCliVersion = match[1];
                            const currentNgVersion = parseFloat(angularCliVersion.split('.')[0]);
                            if (currentNgVersion == ngVersion) {
                                /* Initialize Solias App */
                                appRoot.innerHTML = CORE_TEMPLATE;
                                loadApp();
                            } else {
                                setMessage(`Angular CLI version required: ${ngVersion}.x.x, but found ${angularCliVersion}.
                                Please install Angular CLI version using: npm i @angular/cli@${ngVersion}`);
                            }
                        } else {
                            setMessage("Angular CLI version not found in the string.");
                        }
                    }).catch((error) => {
                        setMessage(error);
                        console.error(error);
                    });
                } else {
                    setMessage(`Node version required: ${nodeVersion}, but found ${currentNodeVersion}.
                    Please install Node version: ${nodeVersion}.`);
                }
            }
        }).catch((error) => {
            console.error(error);
        });

    } catch (error) {
        setMessage(error);
        console.error(error);
    }
}

function setMessage(msg: string) {
    appRoot.innerHTML = ERROR_TEMPLATE;
    const msgBody = appRoot.querySelector('#error-msg');
    msgBody.innerHTML = msg;
}

function loadApp() {
    const soliasApp = new SoliasCore();
    soliasApp.init();
}