export class SoliasDesigner {

    public controlMap = {
        CANVAS: document.querySelector('#solias-canvas'),
        PANEL_SWITCHES: document.querySelectorAll('.panel-switcher'),
        PANEL_CONTAINER_COMPONENTS: document.querySelector('#container-components'),
        PANEL_CONTAINER_ATTRIBUTES: document.querySelector('#container-attributes')
    };

    init(): void {
        this.controlMap.PANEL_SWITCHES.forEach((item: HTMLDivElement) => {
            item.addEventListener('click', () => this.switchPanel(item));

        });
        (this.controlMap.PANEL_CONTAINER_COMPONENTS as HTMLDivElement).style.display = 'flex';
    }

    switchPanel(switchEl: HTMLDivElement) {
        this.controlMap.PANEL_SWITCHES.forEach((item: HTMLDivElement) => {
            item.classList.remove('active');
        });
        switchEl.classList.add('active');

        document.querySelectorAll('.panel-container').forEach((item: HTMLDivElement) => {
            item.style.display = 'none';
        });

        switch (switchEl.getAttribute('data-panel')) {
            case 'container-components':
                (this.controlMap.PANEL_CONTAINER_COMPONENTS as HTMLDivElement).style.display = 'flex';
                break;
            case 'container-attributes':
                (this.controlMap.PANEL_CONTAINER_ATTRIBUTES as HTMLDivElement).style.display = 'flex';
                break;
            default:
                (this.controlMap.PANEL_CONTAINER_COMPONENTS as HTMLDivElement).style.display = 'flex';
                break;
        }
    }
}