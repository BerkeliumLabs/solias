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
        buildProps: ['display-prop'],
        properties: [
            {
                id: 'display-prop',
                name: 'Display',
                property: 'display',
                type: 'select',
                defaults: 'block',
                options: [
                    { id: "1", value: 'block', name: 'block' },
                    { id: "1", value: 'inline', name: 'inline' },
                    { id: "1", value: 'inline-block', name: 'inline-block' },
                    { id: "1", value: 'none', name: 'none' },
                ],
            }
        ]
    }
];