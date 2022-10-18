export function multipleElementsEventListener(elements, event, eventHandler) {
    for (const element of elements) {
        element.addEventListener(event, eventHandler);
    }
}

export function appendMutipleChilds(parent, ...childs) {
    for (const child of childs) {
        parent.appendChild(child);
    }
}

export function prependMutipleChilds(parent, ...childs) {
    for (const child of childs) {
        parent.prepend(child);
    }
}