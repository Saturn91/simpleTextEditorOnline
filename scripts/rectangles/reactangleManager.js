class RectangleManager {
    constructor() {
        this.rectangles = {};
        this.counter = 0;
    }   

    addRectangle(rectangle) {
        this.rectangles[this.counter] = (rectangle);
        const id = 'rect-'+this.counter;
        const div = printableArea.appendChild(document.createElement('div'));
        div.id = id;
        renderElement(div, rectangle, 'test', ['editor-rect']);
        document.getElementById(id).addEventListener('click', () => {
            openMenu(rectangle);
        })
        this.counter ++;
    }
}
