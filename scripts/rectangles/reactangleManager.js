class RectangleManager {
    constructor() {
        this.rectangles = {};
        this.counter = 0;
    }   

    addRectangle(rectangle) {
        const id = 'rect-'+this.counter;
        const div = printableArea.appendChild(document.createElement('div'));
        div.id = id;
        renderElement(div, rectangle, id, ['editor-rect']);

        this.rectangles[id] = {
            rect:  rectangle,
            div: div
        }

        document.getElementById(id).addEventListener('click', () => {
            openMenu(id);
        })

        
        this.counter ++;
        return id;
    }
}
