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
    rectangle.div.innerHTML = '';
    
    rectangle.div.style = "";
    if(rectangle.backgroundImg) {
        const img = document.createElement('img');
        img.src = 'data:image/jpeg;base64,'+ encode(rectangle.backgroundImg.split('|'));
        img.style.setProperty('width', rectangle.rect.width);
        img.style.setProperty('height', rectangle.rect.height);
        rectangle.div.appendChild(img);
    }
    setElementSize(rectangle.div,  rectangle.rect.width, rectangle.rect.height);
    positionHTMLElement(rectangle.div, rectangle.rect.x, rectangle.rect.y);
    rectangle.div.style.setProperty('background-color', rectangle.rect.backGroundColor);
    setFont(rectangle.div, rectangle.font);
    const p = document.createElement('p');
    p.style.setProperty('width', rectangle.rect.width);
    p.style.setProperty('height', rectangle.rect.height);
    p.innerText = rectangle.text;
    rectangle.div.appendChild(p);
    
    classElements.forEach(classElement => {
        if(!rectangle.div.classList.contains(classElement)) rectangle.div.classList.add(classElement);
    })    
}

function changeChildRenderOrder(child, direction) {
        parent = child.parentNode;

    if (direction === -1 && child.previousElementSibling) {
        parent.insertBefore(child, child.previousElementSibling);
    } else if (direction === 1 && child.nextElementSibling) {
        parent.insertBefore(child, child.nextElementSibling.nextElementSibling)
    }
}