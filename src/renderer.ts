/* Solias Styles */
import './scss/index.scss';

/* View Functions */

const navItems = document.querySelectorAll('.solias-core__nav-item');
const viewPanels = document.querySelectorAll('.view-panel');

navItems.forEach((item: HTMLLIElement) => {
    item.addEventListener('click', (ev: MouseEvent) => changeView(ev, item));
});

function changeView(evt: Event, listItem: HTMLLIElement) {
    navItems.forEach((item: HTMLLIElement) => item.classList.remove('nav-item--active'));
    listItem.classList.add('nav-item--active');
    const view = Array.from(viewPanels).find((item: HTMLDivElement) => item.id == listItem.getAttribute('data-view'));
    viewPanels.forEach((item: HTMLDivElement) => item.style.display = 'none');
    if (view) {
      (view as HTMLDivElement).style.display = 'flex';
    }
    console.log(evt, listItem);
}