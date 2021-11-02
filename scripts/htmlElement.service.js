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

    element.style.setProperty('color', font.color);
}

function renderElement(rectangle, classElements) {
    rectangle.div.style = "";
    setElementSize(rectangle.div,  rectangle.rect.width, rectangle.rect.height);
    positionHTMLElement(rectangle.div, rectangle.rect.x, rectangle.rect.y);
    rectangle.div.style.setProperty('background-color', rectangle.rect.backGroundColor);
    setFont(rectangle.div, rectangle.font);
    rectangle.div.innerText = rectangle.text;
    classElements.forEach(classElement => {
        if(!rectangle.div.classList.contains(classElement)) rectangle.div.classList.add(classElement);
    })    
}
