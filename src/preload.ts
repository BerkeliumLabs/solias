import grapesjs from 'grapesjs';
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
        panels: { defaults: [{
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
          }] },
        // Block Manager
        blockManager: {
            appendTo: '#blocks',
            blocks: SOLIAS_BLOCKS
        },
    });

    const soliasPanels = new SoliasPanels(editor);
    soliasPanels.loadPanels();

};
