class RectangleManager {
    constructor() {
        this.rectangles = {};
        this.counter = 0;
    }   

    addRectangle(rectangle) {
        const id = 'rect-'+this.counter;
        const div = printableArea.appendChild(document.createElement('div'));
        div.id = id;
        const font = new Font(FontType.Default, convertToStyleStringPX(16));

        this.rectangles[id] = {
            rect:  rectangle,
            div: div,
            font: font,
            text: id
        }

        renderElement(this.rectangles[id], ['editor-rect']);       

        this.addEventListenerToRectangle(id);
        
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

    addEventListenerToRectangle(id) {
        this.rectangles[id].div = document.getElementById(id);
        this.rectangles[id].text = document.getElementById(id).innerText;

        this.rectangles[id].div.addEventListener('click', () => {
            openMenu(id);
        })
    }
}
