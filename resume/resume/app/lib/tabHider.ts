
export function hideElement(elmnt: HTMLElement) : void {
    const tab = document.getElementById(elmnt.id.replace("close", "div"));
    
    if (tab) {
        tab.classList.add("hidden");
    }

}

export function showElement(elmnt: HTMLElement) : void {
    const tab = document.getElementById(elmnt.id + "div");

    if (tab) {
        tab.classList.remove("hidden");
    }

}