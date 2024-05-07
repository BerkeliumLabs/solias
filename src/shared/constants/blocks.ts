export const SOLIAS_BLOCKS = [
    // Content
    {
        id: 'div',
        label: '&lt;div&gt;',
        content: '<div></div>',
        category: 'Content'
    },
    {
        id: 'span',
        label: '&lt;span&gt;',
        content: '<span></span>',
        category: 'Content'
    },
    {
        id: 'p',
        label: '&lt;p&gt;',
        content: '<p></p>',
        category: 'Content'
    },
    {
        id: 'h1',
        label: '&lt;headings&gt;',
        content: '<h1>Title</h1>',
        category: 'Content'
    },
    {
        id: 'br',
        label: '&lt;br&gt;',
        content: '<br></br>',
        category: 'Content'
    },
    {
        id: 'a',
        label: '&lt;a&gt;',
        content: '<a></a>',
        category: 'Content'
    },
    // Forms
    {
        id: 'form',
        label: '&lt;form&gt;',
        content: '<form></form>',
        category: 'Forms'
    },
    {
        id: 'button', // id is mandatory
        label: '&lt;button&gt;', // You can use HTML/SVG inside labels
        attributes: { class: 'solias-btn' },
        content: `<button>Button</button>`,
        category: 'Forms'
    },
    {
        id: 'input',
        label: '&lt;input&gt;',
        content: '<input />',
        category: 'Forms'
    },
    {
        id: 'label',
        label: '&lt;label&gt;',
        content: '<label>Label</label>',
        category: 'Forms'
    },
    {
        id: 'select',
        label: '&lt;select&gt;',
        content: '<select></select>',
        category: 'Forms'
    },
    {
        id: 'datalist',
        label: '&lt;datalist&gt;',
        content: '<datalist></datalist>',
        category: 'Forms'
    },
    {
        id: 'option',
        label: '&lt;option&gt;',
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
        label: '&lt;textarea&gt;',
        content: '<textarea class="form-control"></textarea>',
        category: 'Forms'
    },
    {
        id: 'fieldset',
        label: '&lt;fieldset&gt;',
        content: '<fieldset></fieldset>',
        category: 'Forms'
    },
    {
        id: 'legend',
        label: '&lt;legend&gt;',
        content: '<legend>Legend</legend>',
        category: 'Forms'
    },
    // Document Structure
    {
        id: 'header',
        label: '&lt;header&gt;',
        content: '<header></header>',
        category: 'Structure'
    },
    {
        id: 'nav',
        label: '&lt;nav&gt;',
        content: '<nav></nav>',
        category: 'Structure'
    },
    {
        id: 'main',
        label: '&lt;main&gt;',
        content: '<main></main>',
        category: 'Structure'
    },
    {
        id: 'section',
        label: '&lt;section&gt;',
        content: '<section></section>',
        category: 'Structure'
    },
    {
        id: 'article',
        label: '&lt;article&gt;',
        content: '<article></article>',
        category: 'Structure'
    },
    {
        id: 'aside',
        label: '&lt;aside&gt;',
        content: '<aside></aside>',
        category: 'Structure'
    },
    {
        id: 'footer',
        label: '&lt;footer&gt;',
        content: '<footer></footer>',
        category: 'Structure'
    },
    // Lists
    {
        id: 'ul',
        label: '&lt;ul&gt;',
        content: '<ul></ul>',
        category: 'Lists'
    },
    {
        id: 'ol',
        label: '&lt;ol&gt;',
        content: '<ol>lorem ipsum</ol>',
        category: 'Lists'
    },
    {
        id: 'ul',
        label: '&lt;ul&gt;',
        content: '<ul>lorem ipsum</ul>',
        category: 'Lists'
    },
    // Media elements
    {
        id: 'image',
        label: '&lt;image&gt;',
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
        label: '&lt;video&gt;',
        select: true,
        content: { type: 'video' },
        activate: true,
        category: 'Media'
    },
    {
        id: 'audio',
        label: '&lt;audio&gt;',
        select: true,
        content: '<audio></audio>',
        activate: true,
        category: 'Media'
    },
    // Table
    {
        id: 'table',
        label: '&lt;table&gt;',
        content: '<table></table>',
        category: 'Table'
    },
    {
        id: 'tr',
        label: '&lt;tr&gt;',
        content: '<tr></tr>',
        category: 'Table'
    },
    {
        id: 'th',
        label: '&lt;th&gt;',
        content: '<th></th>',
        category: 'Table'
    },
    {
        id: 'tr',
        label: '&lt;td&gt;',
        content: '<td></td>',
        category: 'Table'
    },
    // Text Formatting
    {
        id: 'strong',
        label: '&lt;strong&gt;',
        content: '<strong>lorem ipsum</strong>',
        category: 'Text Formatting'
    },
    {
        id: 'em',
        label: '&lt;em&gt;',
        content: '<em>lorem ipsum</em>',
        category: 'Text Formatting'
    },
    {
        id: 'u',
        label: '&lt;u&gt;',
        content: '<u>lorem ipsum</u>',
        category: 'Text Formatting'
    },
    {
        id: 'sup',
        label: '&lt;sup&gt;',
        content: '<sup>lorem ipsum</sup>',
        category: 'Text Formatting'
    },
    {
        id: 'sub',
        label: '&lt;sub&gt;',
        content: '<sub>lorem ipsum</sub>',
        category: 'Text Formatting'
    },
    {
        id: 'strike',
        label: '&lt;strike&gt;',
        content: '<strike>lorem ipsum</strike>',
        category: 'Text Formatting'
    },
    {
        id: 'del',
        label: '&lt;del&gt;',
        content: '<del>lorem ipsum</del>',
        category: 'Text Formatting'
    },
    // Advanced Content
    {
        id: 'pre',
        label: '&lt;pre&gt;',
        content: '<pre></pre>',
        category: 'Advanced Content'
    },
    {
        id: 'code',
        label: '&lt;code&gt;',
        content: '<code></code>',
        category: 'Advanced Content'
    },
    {
        id: 'samp',
        label: '&lt;samp&gt;',
        content: '<samp></samp>',
        category: 'Advanced Content'
    },
    {
        id: 'kbd',
        label: '&lt;kbd&gt;',
        content: '<kbd></kbd>',
        category: 'Advanced Content'
    },
    {
        id: 'mark',
        label: '&lt;mark&gt;',
        content: '<mark></mark>',
        category: 'Advanced Content'
    },
    {
        id: 'var',
        label: '&lt;var&gt;',
        content: '<var></var>',
        category: 'Advanced Content'
    },
];