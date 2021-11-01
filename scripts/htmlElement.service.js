function setElementSize(element, width, height) {
    element.style.minWidth = width;
    element.style.maxWidth = width;
    element.style.minHeight = height;
    element.style.maxHeight = height;
}

function positionHTMLElement(element, x, y) {
    element.style.left =  convertToStyleStringMM(x);
    element.style.top =  convertToStyleStringMM(y);
}
