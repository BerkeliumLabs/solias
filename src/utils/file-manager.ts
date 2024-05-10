import { dialog } from "electron";
import * as fs from 'fs';
import { SoliasNotifications } from "./notifications";

export class SoliasFileManager {

    notification = new SoliasNotifications();

    // Open File Dialog
    async openFile() {
        const result = await dialog.showOpenDialog({
            filters: [{
                name: 'HTML Files',
                extensions: ['html', 'json']
            }],
            properties: ['openFile']
        });
        return result;
    }

    // Save file
    async saveFile(content: string) {
        const result = await dialog.showSaveDialog({
            filters: [{
                name: 'Solias Files',
                extensions: ['json']
            }],
            properties: ['createDirectory']
        });

        if (!result.canceled) {
            try {
                fs.writeFileSync(result.filePath, content);
                this.notification.show({ title: 'File saved!', body: `File saved to ${result.filePath}` });
            } catch (err) {
                this.notification.show({ title: 'File saving error' ,body: err });
            }
        }

        return result;
    }
}