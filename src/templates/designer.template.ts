export const DESIGNER_TEMPLATE = `<div class="solias-designer">
    <div class="solias-designer__container">
        <div id="solias-canvas" class="solias-designer__canvas">
            <div class="empty-block">
                <span class="material-icons">add</span>
            </div>
        </div>
    </div>
    <div class="solias-designer__side-panel">
        <div class="solias-designer__panel-switch">
            <div class="panel-switcher active" data-panel="container-components">
                <span class="material-icons">category</span>
            </div>
            <div class="panel-switcher" data-panel="container-attributes">
                <span class="material-icons">tune</span>
            </div>
        </div>
        <div class="solias-designer__panel-container">
            <div class="panel-container" id="container-components">components</div>
            <div class="panel-container" id="container-attributes">attributes</div>
        </div>
    </div>
</div>
<dialog class="solias-designer__blocks" id="blocks-dialog"></dialog>`;