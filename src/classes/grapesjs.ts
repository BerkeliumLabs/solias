import grapesjs, { Editor } from "grapesjs";
import { SOLIAS_BLOCKS } from "../shared/constants/blocks";
import { SOLIAS_STYLE_SELECTORS } from "../shared/constants/style-selectors";

export class SoliasGrapesJS {
    public editor: Editor;

    init(): void {
        /* Initialize GrapeJS Editor */
        this.editor = grapesjs.init({
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
                sectors: SOLIAS_STYLE_SELECTORS
            },
            // Triats Manager
            traitManager: {
                appendTo: '#traits-palette',
            },
            // Device manager
            deviceManager: {
                devices: [
                    {
                        name: 'Desktop',
                        width: '', // default size
                    }, {
                        name: 'Mobile',
                        width: '320px', // this value will be used on canvas width
                        widthMedia: '480px', // this value will be used in CSS @media
                    }
                ]
            },
        });

        /* Load Panels */
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
                    className: 'material-icons',
                    label: 'border_style',
                    command: 'sw-visibility', // Built-in command
                }, {
                    id: 'export',
                    className: 'material-icons',
                    label: 'code',
                    command: 'export-template',
                    context: 'export-template', // For grouping context of buttons from the same panel
                }, {
                    id: 'show-json',
                    className: 'material-icons',
                    label: 'data_object',
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
        this.editor.Panels.addPanel({
            id: 'panel-devices',
            el: '#panel-devices',
            buttons: [
                {
                    id: 'device-desktop',
                    command: 'set-device-desktop',
                    className: 'material-icons',
                    label: 'desktop_windows',
                    active: true,
                    togglable: false,
                }, {
                    id: 'device-mobile',
                    className: 'material-icons',
                    label: 'phone_android',
                    command: 'set-device-mobile',
                    togglable: false,
                }
            ],
        });
        this.editor.Panels.addPanel({
            id: 'panel-switcher',
            el: '#panel-switcher',
            buttons: [
                {
                    id: 'show-blocks',
                    active: true,
                    command: 'show-blocks',
                    className: 'material-icons',
                    label: 'interests',
                    togglable: false,
                },
                {
                    id: 'show-layers',
                    active: true,
                    command: 'show-layers',
                    className: 'material-icons',
                    label: 'layers',
                    togglable: false,
                },
                {
                    id: 'show-style',
                    active: true,
                    command: 'show-styles',
                    className: 'material-icons',
                    label: 'format_color_fill',
                    togglable: false,
                },
                {
                    id: 'show-traits',
                    active: true,
                    command: 'show-traits',
                    className: 'material-icons',
                    label: 'settings',
                    togglable: false,
                }
            ]
        });

        /* GrapeJS Commands */
        this.editor.Commands.add('show-blocks', {
            getRowEl(editor: Editor) { return editor.getContainer().closest('#solias-workspace'); },
            getLayersEl(row: HTMLDivElement) { return row.querySelector('#blocks-palette') },

            run(editor) {
                const elmt = this.getLayersEl(this.getRowEl(editor));
                elmt.style.display = 'block';
            },
            stop(editor) {
                const elmt = this.getLayersEl(this.getRowEl(editor));
                elmt.style.display = 'none';
            },
        });
        this.editor.Commands.add('show-layers', {
            getRowEl(editor: Editor) { return editor.getContainer().closest('#solias-workspace'); },
            getLayersEl(row: HTMLDivElement) { return row.querySelector('#layers-palette') },

            run(editor) {
                const lmEl = this.getLayersEl(this.getRowEl(editor));
                lmEl.style.display = 'block';
            },
            stop(editor) {
                const lmEl = this.getLayersEl(this.getRowEl(editor));
                lmEl.style.display = 'none';
            },
        });
        this.editor.Commands.add('show-styles', {
            getRowEl(editor: Editor) { return editor.getContainer().closest('#solias-workspace'); },
            getStyleEl(row: HTMLDivElement) { return row.querySelector('#style-palette') },

            run(editor) {
                const smEl = this.getStyleEl(this.getRowEl(editor));
                smEl.style.display = 'block';
            },
            stop(editor) {
                const smEl = this.getStyleEl(this.getRowEl(editor));
                smEl.style.display = 'none';
            },
        });
        this.editor.Commands.add('show-traits', {
            getRowEl(editor: Editor) { return editor.getContainer().closest('#solias-workspace'); },
            getLayersEl(row: HTMLDivElement) { return row.querySelector('#traits-palette') },

            run(editor) {
                const elmt = this.getLayersEl(this.getRowEl(editor));
                elmt.style.display = 'block';
            },
            stop(editor) {
                const elmt = this.getLayersEl(this.getRowEl(editor));
                elmt.style.display = 'none';
            },
        });
        this.editor.Commands.add('set-device-desktop', {
            run: editor => editor.setDevice('Desktop')
        });
        this.editor.Commands.add('set-device-mobile', {
            run: editor => editor.setDevice('Mobile')
        });

        this.editor.on('change:device', () => console.log('Current device: ', this.editor.getDevice()));
    }
}