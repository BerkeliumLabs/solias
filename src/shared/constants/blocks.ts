export const SOLIAS_BLOCKS = [
    // Content
    {
        id: 'div',
        label: '<div>',
        content: '<div></div>',
        category: 'Content'
    },
    {
        id: 'span',
        label: '<span>',
        content: '<span></span>',
        category: 'Content'
    },
    {
        id: 'p',
        label: '<p>',
        content: '<p></p>',
        category: 'Content'
    },
    {
        id: 'h1',
        label: '<headings>',
        content: '<h1>Title</h1>',
        category: 'Content'
    },
    {
        id: 'br',
        label: '<br>',
        content: '<br></br>',
        category: 'Content'
    },
    {
        id: 'a',
        label: '<a>',
        content: '<a></a>',
        category: 'Content'
    },
    // Forms
    {
        id: 'form',
        label: '<form>',
        content: '<form></form>',
        category: 'Forms'
    },
    {
        id: 'button', // id is mandatory
        label: '<button>', // You can use HTML/SVG inside labels
        attributes: { class: 'solias-btn' },
        content: `<button>Button</button>`,
        category: 'Forms'
    },
    {
        id: 'input',
        label: '<input>',
        content: '<input />',
        category: 'Forms'
    },
    {
        id: 'label',
        label: '<label>',
        content: '<label>Label</label>',
        category: 'Forms'
    },
    {
        id: 'select',
        label: '<select>',
        content: '<select></select>',
        category: 'Forms'
    },
    {
        id: 'datalist',
        label: '<datalist>',
        content: '<datalist></datalist>',
        category: 'Forms'
    },
    {
        id: 'option',
        label: '<option>',
        content: {
            type: 'text',
            tagName: 'option',
            traits: ['value', 'label'],
            attributes: {
                value: 'solias',
                label: 'Solias'
            }
        },
        category: 'Forms',
    },
    {
        id: 'textrea',
        label: '<textarea>',
        content: '<textarea class="form-control"></textarea>',
        category: 'Forms'
    },
    {
        id: 'fieldset',
        label: '<fieldset>',
        content: '<fieldset></fieldset>',
        category: 'Forms'
    },
    {
        id: 'legend',
        label: '<legend>',
        content: '<legend>Legend</legend>',
        category: 'Forms'
    },
    // Document Structure
    {
        id: 'header',
        label: '<header>',
        content: '<header></header>',
        category: 'Structure'
    },
    {
        id: 'nav',
        label: '<nav>',
        content: '<nav></nav>',
        category: 'Structure'
    },
    {
        id: 'main',
        label: '<main>',
        content: '<main></main>',
        category: 'Structure'
    },
    {
        id: 'section',
        label: '<section>',
        content: '<section></section>',
        category: 'Structure'
    },
    {
        id: 'article',
        label: '<article>',
        content: '<article></article>',
        category: 'Structure'
    },
    {
        id: 'aside',
        label: '<aside>',
        content: '<aside></aside>',
        category: 'Structure'
    },
    {
        id: 'footer',
        label: '<footer>',
        content: '<footer></footer>',
        category: 'Structure'
    },
    // Lists
    {
        id: 'ul',
        label: '<ul>',
        content: '<ul></ul>',
        category: 'Lists'
    },
    {
        id: 'ol',
        label: '<ol>',
        content: '<ol>lorem ipsum</ol>',
        category: 'Lists'
    },
    {
        id: 'ul',
        label: '<ul>',
        content: '<ul>lorem ipsum</ul>',
        category: 'Lists'
    },
    // Media elements
    {
        id: 'image',
        label: '<image>',
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
        label: '<video>',
        select: true,
        content: { type: 'video' },
        activate: true,
        category: 'Media'
    },
    {
        id: 'audio',
        label: 'audio',
        select: true,
        content: '<audio></audio>',
        activate: true,
        category: 'Media'
    },
    // Table
    {
        id: 'table',
        label: '<table>',
        content: '<table></table>',
        category: 'Table'
    },
    {
        id: 'tr',
        label: '<tr>',
        content: '<tr></tr>',
        category: 'Table'
    },
    {
        id: 'th',
        label: '<th>',
        content: '<th></th>',
        category: 'Table'
    },
    {
        id: 'tr',
        label: '<td>',
        content: '<td></td>',
        category: 'Table'
    },
    // Text Formatting
    {
        id: 'strong',
        label: '<strong>',
        content: '<strong>lorem ipsum</strong>',
        category: 'Text Formatting'
    },
    {
        id: 'em',
        label: '<em>',
        content: '<em>lorem ipsum</em>',
        category: 'Text Formatting'
    },
    {
        id: 'u',
        label: '<u>',
        content: '<u>lorem ipsum</u>',
        category: 'Text Formatting'
    },
    {
        id: 'sup',
        label: '<sup>',
        content: '<sup>lorem ipsum</sup>',
        category: 'Text Formatting'
    },
    {
        id: 'sub',
        label: '<sub>',
        content: '<sub>lorem ipsum</sub>',
        category: 'Text Formatting'
    },
    {
        id: 'strike',
        label: '<strike>',
        content: '<strike>lorem ipsum</strike>',
        category: 'Text Formatting'
    },
    {
        id: 'del',
        label: '<del>',
        content: '<del>lorem ipsum</del>',
        category: 'Text Formatting'
    },
    // Advanced Content
    {
        id: 'pre',
        label: '<pre>',
        content: '<pre></pre>',
        category: 'Advanced Content'
    },
    {
        id: 'code',
        label: '<code>',
        content: '<code></code>',
        category: 'Advanced Content'
    },
    {
        id: 'samp',
        label: '<samp>',
        content: '<samp></samp>',
        category: 'Advanced Content'
    },
    {
        id: 'kbd',
        label: '<kbd>',
        content: '<kbd></kbd>',
        category: 'Advanced Content'
    },
    {
        id: 'mark',
        label: '<mark>',
        content: '<mark></mark>',
        category: 'Advanced Content'
    },
    {
        id: 'var',
        label: '<var>',
        content: '<var></var>',
        category: 'Advanced Content'
    },
];