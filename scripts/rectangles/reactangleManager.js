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
        div.innerHTML = 'test';
        div.classList.add('editor-rect');
        setElementSize(div, rectangle.width, rectangle.height);
        positionHTMLElement(div, rectangle.x, rectangle.y);
        document.getElementById(id).addEventListener('click', () => {
            alert('id: ' + id + ' was clicked!');
        })
        this.counter ++;
    }
}
