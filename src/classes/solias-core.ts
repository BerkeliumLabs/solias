import { WORKFLOW_TEMPLATE } from "../templates/workflow.template";
import { DESIGNER_TEMPLATE } from "../templates/designer.template";
import { DATABASE_TEMPLATE } from "../templates/database.template";
import { LAUNCH_TEMPLATE } from "../templates/launch.template";
import { SoliasDesigner } from "./solias-designer";

export class SoliasCore {
    public controlMap = {
        NAV_ITEMS: document.querySelectorAll('.solias-core__nav-item'),
        VIEW_PANELS: document.querySelectorAll('.view-panel'),
        DESIGNER_VIEW: document.querySelector('#nav-design'),
        WORKFLOW_VIEW: document.querySelector('#nav-workflow'),
        DATABASE_VIEW: document.querySelector('#nav-database'),
        LAUNCHER_VIEW: document.querySelector('#nav-launch')
    };

    init(): void {
        this.controlMap.NAV_ITEMS.forEach((item: HTMLLIElement) => {
            item.addEventListener('click', (ev: MouseEvent) => this.changeView(ev, item));
            if (item.getAttribute('data-view') == 'nav-design') {
                item.click();
            }
        });
        this.clearViews();
        this.controlMap.DESIGNER_VIEW.innerHTML = DESIGNER_TEMPLATE;
        this.controlMap.WORKFLOW_VIEW.innerHTML = WORKFLOW_TEMPLATE;
        this.controlMap.DATABASE_VIEW.innerHTML = DATABASE_TEMPLATE;
        this.controlMap.LAUNCHER_VIEW.innerHTML = LAUNCH_TEMPLATE;
        const designer = new SoliasDesigner();
        designer.init();
    }

    changeView(evt: Event, listItem: HTMLLIElement) {
        this.controlMap.NAV_ITEMS.forEach((item: HTMLLIElement) => item.classList.remove('nav-item--active'));
        listItem.classList.add('nav-item--active');
        const view = Array.from(this.controlMap.VIEW_PANELS).find((item: HTMLDivElement) => item.id == listItem.getAttribute('data-view'));
        this.controlMap.VIEW_PANELS.forEach((item: HTMLDivElement) => item.style.display = 'none');
        if (view) {
            (view as HTMLDivElement).style.display = 'flex';
        }
    }

    private clearViews(): void {
        document.querySelectorAll('.view-panel').forEach((item: HTMLDivElement) => item.innerHTML = '');
    }
}