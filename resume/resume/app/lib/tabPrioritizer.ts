let zIndexCounter = 1000;

export function prioritizeTab(elmnt: HTMLElement) : void {
    const tab = document.getElementById(elmnt.id);

    if (tab) {
        tab.style.zIndex = `${++zIndexCounter}`;
    }

}