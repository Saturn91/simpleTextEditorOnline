const rectangleManager = new RectangleManager();

let actualRectangle = undefined;

function AddRectangle() {
    openMenu(rectangleManager.addRectangle(new Rectangle(0, 0, 100, 10)));
}

function openMenu(id) {
    const elementForm = document.getElementById('elementForm');
    if (elementForm.classList.contains('hidden')) elementForm.classList.remove('hidden');
    fillMenuValues(rectangleManager.rectangles[id]);
}

function fillMenuValues(element) {
    actualRectangle = element;
    document.getElementById('title-input').innerText = element.div.id;
    document.getElementById('positionX-input').value = convertMMStyleToNumber(element.rect.x);
    document.getElementById('positionY-input').value = convertMMStyleToNumber(element.rect.y);
    document.getElementById('width-input').value = convertMMToProcent(element.rect.width);
    document.getElementById('actualWidth-display').value = element.rect.width;
    document.getElementById('height-input').value = convertMMStyleToNumber(element.rect.height);
    document.getElementById('text-input').value = element.div.innerText;
}

function getRectangleObjFromForm() {
    let temp = actualRectangle.div;
    temp.innerText = document.getElementById('text-input').value;
    return {
        rect: new Rectangle(
            document.getElementById('positionX-input').value,
            document.getElementById('positionY-input').value,
            document.getElementById('width-input').value,
            document.getElementById('height-input').value
        ),
        div: temp
    }
}

function submitChanges() {
    rectangleManager.rectangles[document.getElementById('title-input').innerText] = getRectangleObjFromForm();
    const formInput = rectangleManager.rectangles[document.getElementById('title-input').innerText];
    renderElement(actualRectangle.div, formInput.rect, formInput.div.innerText, []);
}
