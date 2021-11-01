const rectangleManager = new RectangleManager();

function AddRectangle() {
    rectangleManager.addRectangle(new Rectangle(0, 0, 100, 10));
}

function openMenu(id) {
    console.log(rectangleManager.rectangles[id]);
    console.log(id + " was opened!");
}
