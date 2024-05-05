export const SOLIAS_BLOCKS = [
    {
        id: 'button', // id is mandatory
        label: 'Button', // You can use HTML/SVG inside labels
        attributes: { class: 'solias-btn' },
        content: `<button>Button</button>`
    },
    {
        id: 'input-text',
        label: 'Text Input',
        content: '<input type="text" />',
    },
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
    }
];