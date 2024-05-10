import { dialog } from "electron";

export class SoliasFileManager {
    // Open File Dialog
    async openFile() {
        const result = await dialog.showOpenDialog({
            filters: [{
                name: 'HTML Files',
                extensions: ['html']
            }],
            properties: ['openFile']
        });
        return result;
    }
}