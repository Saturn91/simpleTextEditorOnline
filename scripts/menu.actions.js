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

function showImagePreview(imageData) {
    const imagePreview = document.getElementById('image-preview');
    if(imagePreview.classList.contains('hidden')) imagePreview.classList.remove('hidden');

    const imageSelect = document.getElementById('image-select');
    if(!imageSelect.classList.contains('hidden')) imageSelect.classList.add('hidden');

    document.getElementById('background-image-preview').src = 'data:image/jpeg;base64,'+ encode(imageData.split('|'));
}

function showImageSelect() {
    const imagePreview = document.getElementById('image-preview');
    if(!imagePreview.classList.contains('hidden')) imagePreview.classList.add('hidden');

    const imageSelect = document.getElementById('image-select');
    if(imageSelect.classList.contains('hidden')) imageSelect.classList.remove('hidden');
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
    updateFontTypeCheckboxes(element.font.type);    
    document.getElementById('font-size-input').value = convertPXStyleToNumber(element.font.size);

    //show or hide backgroundImage selector / preview
    if(!element.backgroundImg) showImageSelect();
}

function getRectangleObjFromForm(id) {
    loadBackgroundImagefromFile((data) => {
        rectangleManager.rectangles[id].backgroundImg =  new Uint8Array(data).join('|');
        renderElement(rectangleManager.rectangles[id], []);
        showImagePreview(rectangleManager.rectangles[id].backgroundImg);
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
    const id = document.getElementById('title-input').innerText;
    console.log('rerender');
    rectangleManager.rectangles[id] = getRectangleObjFromForm(id);
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

function deleteCurrentBackgroundImage() {
    rectangleManager.rectangles[document.getElementById('title-input').innerText].backgroundImg = undefined;
    submitChanges();
}
