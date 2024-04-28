const { ipcRenderer } = require("electron");
const fs = require('fs');

window.onload = () => {
    const controlElements = {
        openFileBtn: document.querySelector('#aside-action-open'),
        saveFileBtn: document.querySelector('#aside-action-save'),
        textArea: document.querySelector('textarea')
    };

    controlElements.openFileBtn.addEventListener('click', async () => {
        const fileInfo = await ipcRenderer.invoke('dialog:open', { openType: 'openFile'});
        const content = await fs.readFileSync(fileInfo.filePaths[0], { encoding: 'utf-8' });
        controlElements.textArea.value = content;
        console.log(fileInfo.filePaths);
    });

    controlElements.saveFileBtn.addEventListener('click', async () => {
        const content = controlElements.textArea.value;
        const fileInfo = await ipcRenderer.invoke('dialog:save');

        if (!fileInfo.canceled) {
            try {
                fs.writeFileSync(fileInfo.filePath, content);
            } catch (err) {
                console.log({ body: err });
            }
        }
        console.log(fileInfo);
    });
}