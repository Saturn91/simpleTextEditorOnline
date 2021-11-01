function setElementSize(element, width, height) {
    element.style.minWidth = width;
    element.style.maxWidth = width;
    element.style.minHeight = height;
    element.style.maxHeight = height;
}

function positionHTMLElement(element, x, y) {
    element.style.setProperty("left", x);
    element.style.setProperty("top", y);
}

function setFont(element, font) {
    if(font.type === FontType.Bold) {
        element.style.setProperty("font-weight", font.type);
    } else {
        element.style.setProperty("font-style", font.type);
    } 

    element.style.setProperty('font-size', font.size);
}

function renderElement(element, rectangle, font, innerHtml, classElements) {
    element.style = "";
    setElementSize(element,  rectangle.width, rectangle.height);
    positionHTMLElement(element, rectangle.x, rectangle.y);
    setFont(element, font);
    element.innerText = innerHtml;
    classElements.forEach(classElement => {
        if(!element.classList.contains(classElement)) element.classList.add(classElement);
    })    
}
