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

    deleteRectangle(id) {
        printableArea.removeChild(rectangleManager.rectangles[id].div);
        delete rectangleManager.rectangles[id];
        let numOfRects = Object.keys(rectangleManager.rectangles).length;
        if(numOfRects > 0) {
            return Object.keys(rectangleManager.rectangles)[numOfRects-1];
        } else {
            return undefined;
        }
    }
}
