export const SOLIAS_STYLE_SELECTORS = [
    {
        name: 'Dimension',
        open: true,
        // Use built-in properties
        buildProps: ['width', 'height', 'min-width', 'min-height'],
    },
    {
        name: 'Spacing',
        open: false,
        buildProps: ['padding', 'margin'],
    },
    {
        name: 'Typography',
        open: false,
        buildProps: [
            'font-family',
            'font-size',
            'font-weight',
            'letter-spacing',
            'text-align',
        ],
    },
    {
        name: 'Colors',
        open: false,
        buildProps: ['background-color', 'color'],
    },
    {
        name: 'Borders',
        open: false,
        buildProps: ['border', 'border-radius'],
    },
    {
        name: 'Extra',
        open: false,
        buildProps: ['box-shadow', 'custom-prop'],
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
];