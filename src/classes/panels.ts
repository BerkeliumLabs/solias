import { Editor } from 'grapesjs';

export class SoliasPanels {

    constructor(private editor: Editor) { }

    loadPanels() {
        this.editor.Panels.addPanel({
            id: 'panel-top',
            el: '#tool-bar',
        });
        this.editor.Panels.addPanel({
            id: 'basic-actions',
            el: '#tool-actions',
            buttons: [
                {
                    id: 'visibility',
                    active: true, // active by default
                    className: 'btn-toggle-borders',
                    label: '<u>B</u>',
                    command: 'sw-visibility', // Built-in command
                }, {
                    id: 'export',
                    className: 'btn-open-export',
                    label: 'Exp',
                    command: 'export-template',
                    context: 'export-template', // For grouping context of buttons from the same panel
                }, {
                    id: 'show-json',
                    className: 'btn-show-json',
                    label: 'JSON',
                    context: 'show-json',
                    command: (() => {
                        this.editor.Modal.setTitle('Components JSON')
                            .setContent(`<textarea style="width:100%; height: 250px;">
                      ${JSON.stringify(this.editor.getComponents())}
                    </textarea>`)
                            .open();
                    }).bind(this),
                }
            ],
        });
    }
}
