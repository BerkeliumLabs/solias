import { WORKFLOW_TEMPLATE } from "../templates/workflow.template";
import { DESIGNER_TEMPLATE } from "../templates/designer.template";
import { DATABASE_TEMPLATE } from "../templates/database.template";
import { LAUNCH_TEMPLATE } from "../templates/launch.template";

export class SoliasCore {
    public controlMap = {
        DESIGNER_VIEW: document.querySelector('#nav-design'),
        WORKFLOW_VIEW: document.querySelector('#nav-workflow'),
        DATABASE_VIEW: document.querySelector('#nav-database'),
        LAUNCHER_VIEW: document.querySelector('#nav-launch')
    };

    init(): void {
        this.clearViews();
        this.controlMap.DESIGNER_VIEW.innerHTML = DESIGNER_TEMPLATE;
        this.controlMap.WORKFLOW_VIEW.innerHTML = WORKFLOW_TEMPLATE;
        this.controlMap.DATABASE_VIEW.innerHTML = DATABASE_TEMPLATE;
        this.controlMap.LAUNCHER_VIEW.innerHTML = LAUNCH_TEMPLATE;
    }

    private clearViews(): void {
        document.querySelectorAll('.view-panel').forEach((item: HTMLDivElement) => item.innerHTML = '');
    }
}