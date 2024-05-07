export const SOLIAS_BLOCKS = [
    // Basic elements
    {
        id: 'div',
        label: 'Div',
        content: '<div></div>',
        category: 'Basic'
    },
    {
        id: 'span',
        label: 'Span',
        content: '<span></span>',
        category: 'Basic'
    },
    {
        id: 'p',
        label: 'Paragraph',
        content: '<p></p>',
        category: 'Basic'
    },
    {
        id: 'h1',
        label: 'Headings',
        content: '<h1>Title</h1>',
        category: 'Basic'
    },
    // Form Elements
    {
        id: 'form',
        label: 'Form',
        content: '<form></form>',
        category: 'Form Elements'
    },
    {
        id: 'button', // id is mandatory
        label: 'Button', // You can use HTML/SVG inside labels
        attributes: { class: 'solias-btn' },
        content: `<button class="btn">Button</button>`,
        category: 'Form Elements'
    },
    {
        id: 'input',
        label: 'Input',
        content: '<input class="form-control" />',
        category: 'Form Elements'
    },
    {
        id: 'input-checkbox',
        label: 'Checkbox',
        content: `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="ch-1">
        <label class="form-check-label" for="ch-1">
          Checkbox
        </label>
      </div>`,
        category: 'Form Elements'
    },
    {
        id: 'input-radio',
        label: 'Radio',
        content: `<div class="form-check">
        <input class="form-check-input" type="radio" id="radio-1">
        <label class="form-check-label" for="radio-1">
          Radio
        </label>
      </div>`,
        category: 'Form Elements'
    },
    {
        id: 'label',
        label: 'Label',
        content: '<label>Label</label>',
        category: 'Form Elements'
    },
    {
        id: 'select',
        label: 'Select',
        content: '<select class="form-control"></select>',
        category: 'Form Elements'
    },
    {
        id: 'datalist',
        label: 'Data List',
        content: '<datalist></datalist>',
        category: 'Form Elements'
    },
    {
        id: 'option',
        label: 'Options',
        content: {
            type: 'text',
            tagName: 'option',
            traits: ['value', 'label'],
            attributes: {
                value: 'solias',
                label: 'Solias'
            }
        },
        category: 'Form Elements',
    },
    {
        id: 'textrea',
        label: 'Textarea',
        content: '<textarea class="form-control"></textarea>',
        category: 'Form Elements'
    },
    {
        id: 'range',
        label: 'Range',
        content: '<input type="range" class="form-range" />',
        category: 'Form Elements'
    },
    {
        id: 'fieldset',
        label: 'Fieldset',
        content: '<fieldset><legend>Legend</legend></fieldset>',
        category: 'Form Elements'
    },
    // Media elements
    {
        id: 'image',
        label: 'Image',
        // Select the component once it's dropped
        select: true,
        // You can pass components as a JSON instead of a simple HTML string,
        // in this case we also use a defined component type `image`
        content: { type: 'image' },
        // This triggers `active` event on dropped components and the `image`
        // reacts by opening the AssetManager
        activate: true,
        category: 'Media'
    },
    {
        id: 'video',
        label: 'Video',
        select: true,
        content: { type: 'video' },
        activate: true,
        category: 'Media'
    }
];