import grapesjs, { Editor } from 'grapesjs';
import { SOLIAS_BLOCKS } from './_shared/blocks';
import { SoliasPanels } from './classes/panels';

window.onload = () => {

    const editor = grapesjs.init({
        // Indicate where to init the editor. You can also pass an HTMLElement
        container: '#gjs',
        // Get the content for the canvas directly from the element
        // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
        fromElement: true,
        // Size of the editor
        height: 'auto',
        width: 'auto',
        // Disable the storage manager for the moment
        storageManager: false,
        // Layers manager
        layerManager: {
            appendTo: '#layers-palette'
        },
        // Avoid any default panel
        panels: {
            defaults: [
                {
                    id: 'layers',
                    el: '#right-panel',
                    // Make the panel resizable
                    resizable: {
                        maxDim: 350,
                        minDim: 200,
                        tc: false, // Top handler
                        cl: true, // Left handler
                        cr: false, // Right handler
                        bc: false, // Bottom handler
                        // Being a flex child we need to change `flex-basis` property
                        // instead of the `width` (default)
                        keyWidth: 'flex-basis',
                    },
                },
                {
                    id: 'panel-switcher',
                    el: '#panel-switcher',
                    buttons: [
                        {
                            id: 'show-blocks',
                            active: true,
                            command: 'show-blocks',
                            // Once activated disable the possibility to turn it off
                            togglable: false,
                        },
                        {
                            id: 'show-layers',
                            active: true,
                            command: 'show-layers',
                            togglable: false,
                        },
                        {
                            id: 'show-style',
                            active: true,
                            command: 'show-styles',
                            togglable: false,
                        }
                    ]
                }
            ]
        },
        // Block Manager
        blockManager: {
            appendTo: '#blocks-palette',
            blocks: SOLIAS_BLOCKS
        },
        // The Selector Manager allows to assign classes and
        // different states (eg. :hover) on components.
        // Generally, it's used in conjunction with Style Manager
        // but it's not mandatory
        selectorManager: {
            appendTo: '#style-palette'
        },
        styleManager: {
            appendTo: '#style-palette',
            sectors: [
                {
                    name: 'Dimension',
                    open: false,
                    // Use built-in properties
                    buildProps: ['width', 'min-height', 'padding'],
                    // Use `properties` to define/override single property
                    properties: [
                        {
                            // Type of the input,
                            // options: integer | radio | select | color | slider | file | composite | stack
                            type: 'integer',
                            name: 'The width', // Label for the property
                            property: 'width', // CSS property (if buildProps contains it will be extended)
                            units: ['px', '%'], // Units, available only for 'integer' types
                            defaults: 'auto', // Default value
                            min: 0, // Min value, available only for 'integer' types
                        }
                    ]
                },
                {
                    name: 'Extra',
                    open: false,
                    buildProps: ['background-color', 'box-shadow', 'custom-prop'],
                    properties: [
                        {
                            id: 'custom-prop',
                            name: 'Custom Label',
                            property: 'font-size',
                            type: 'select',
                            defaults: '32px',
                            // List of options, available only for 'select' and 'radio'  types
                            options: [
                                { id: "1", value: '12px', name: 'Tiny' },
                                { id: "1", value: '18px', name: 'Medium' },
                                { id: "1", value: '32px', name: 'Big' },
                            ],
                        }
                    ]
                }
            ]
        }
    });

    const soliasPanels = new SoliasPanels(editor);
    soliasPanels.loadPanels();

    // Define commands
    editor.Commands.add('show-blocks', {
        getRowEl(editor: Editor) { return editor.getContainer().closest('#solias-workspace'); },
        getLayersEl(row: HTMLDivElement) { return row.querySelector('#blocks-palette') },

        run(editor, sender) {
            const elmt = this.getLayersEl(this.getRowEl(editor));
            elmt.style.display = 'block';
        },
        stop(editor, sender) {
            const elmt = this.getLayersEl(this.getRowEl(editor));
            elmt.style.display = 'none';
        },
    });
    editor.Commands.add('show-layers', {
        getRowEl(editor: Editor) { return editor.getContainer().closest('#solias-workspace'); },
        getLayersEl(row: HTMLDivElement) { return row.querySelector('#layers-palette') },

        run(editor, sender) {
            const lmEl = this.getLayersEl(this.getRowEl(editor));
            lmEl.style.display = 'block';
        },
        stop(editor, sender) {
            const lmEl = this.getLayersEl(this.getRowEl(editor));
            lmEl.style.display = 'none';
        },
    });
    editor.Commands.add('show-styles', {
        getRowEl(editor: Editor) { return editor.getContainer().closest('#solias-workspace'); },
        getStyleEl(row: HTMLDivElement) { return row.querySelector('#style-palette') },

        run(editor, sender) {
            const smEl = this.getStyleEl(this.getRowEl(editor));
            smEl.style.display = 'block';
        },
        stop(editor, sender) {
            const smEl = this.getStyleEl(this.getRowEl(editor));
            smEl.style.display = 'none';
        },
    });

};
