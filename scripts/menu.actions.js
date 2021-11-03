const rectangleManager = new RectangleManager();

let actualRectangle = undefined;

function AddRectangle() {
    let rectangle = actualRectangle ? actualRectangle.rect : new Rectangle(0, 0, 100, 10);
    openMenu(rectangleManager.addRectangle(rectangle));
}

function openToolsMenu() {
    document.getElementById('file-menu').style.setProperty('display', 'none');
    document.getElementById('editor-menu').style.setProperty('display', 'block');
}

function openFileMenu() {
    document.getElementById('file-menu').style.setProperty('display', 'block');
    document.getElementById('editor-menu').style.setProperty('display', 'none');
}

function openMenu(id) {
    if(actualRectangle) {
        if(actualRectangle.div.classList.contains('highlighted')) actualRectangle.div.classList.remove('highlighted');
    } 
    const elementForm = document.getElementById('elementForm');
    if (elementForm.classList.contains('hidden')) elementForm.classList.remove('hidden');

    actualRectangle = rectangleManager.rectangles[id];

    actualRectangle.div.classList.add('highlighted');

    fillMenuValues(actualRectangle);
}

function closeMenu() {
    document.getElementById('elementForm').classList.add('hidden');
}

function updateFontTypeCheckboxes(fontType) {
    document.getElementById('default-font-input').checked = fontType == FontType.Default;
    document.getElementById('italic-font-input').checked = fontType == FontType.Italic;
    document.getElementById('bold-font-input').checked = fontType == FontType.Bold;
}

function getFontTypeFromCheckboxes() {
    if(document.getElementById('default-font-input').checked) return FontType.Default;
    if(document.getElementById('italic-font-input').checked) return FontType.Italic;
    if(document.getElementById('bold-font-input').checked) return FontType.Bold;
}

function fillMenuValues(element) {
    document.getElementById('elementForm').reset();
    document.getElementById('title-input').innerText = element.div.id;
    document.getElementById('positionX-input').value = convertMMStyleToNumber(element.rect.x);
    document.getElementById('positionY-input').value = convertMMStyleToNumber(element.rect.y);
    document.getElementById('width-input').value = convertMMToProcent(element.rect.width);
    document.getElementById('actualWidth-display').value = element.rect.width;
    document.getElementById('height-input').value = convertMMStyleToNumber(element.rect.height);
    document.getElementById('text-input').value = element.div.innerText;
    document.getElementById('backgroundColor-input').value = element.rect.backGroundColor;
    document.getElementById('font-color-input').value = element.font.color;
    if (element.backgroundImg) document.getElementById('backgroundImage-upload').value = element.backgroundImg;
    updateFontTypeCheckboxes(element.font.type);    
    document.getElementById('font-size-input').value = convertPXStyleToNumber(element.font.size);
}

function getRectangleObjFromForm() {
    loadBackgroundImagefromFile((data) => {
        actualRectangle.backgroundImg = data;
    });
    return {
        rect: new Rectangle(
            document.getElementById('positionX-input').value,
            document.getElementById('positionY-input').value,
            document.getElementById('width-input').value,
            document.getElementById('height-input').value,
            document.getElementById('backgroundColor-input').value
        ),
        div: actualRectangle.div,
        font: new Font(
            getFontTypeFromCheckboxes(),
            convertToStyleStringPX(document.getElementById('font-size-input').value),
            document.getElementById('font-color-input').value
        ),
        text: document.getElementById('text-input').value == '' ? ' ' : document.getElementById('text-input').value,
        backgroundImg: actualRectangle.backgroundImg
    }
}

function submitChanges() {
    rectangleManager.rectangles[document.getElementById('title-input').innerText] = getRectangleObjFromForm();
    const formInput = rectangleManager.rectangles[document.getElementById('title-input').innerText];
    renderElement(formInput, []);
}

function deleteActualRectangle() {
    id = rectangleManager.deleteRectangle(document.getElementById('title-input').innerText);
    if(!id) {
        closeMenu();
    } else {
        openMenu(id);
    }
}
