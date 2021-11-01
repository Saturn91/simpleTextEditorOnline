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

function renderElement(element, rectangle, innerHtml, classElements) {
    setElementSize(element,  rectangle.width, rectangle.height);
    positionHTMLElement(element, rectangle.x, rectangle.y);
    element.innerText = innerHtml;
    classElements.forEach(classElement => {
        if(!element.classList.contains(classElement)) element.classList.add(classElement);
    })    
}
