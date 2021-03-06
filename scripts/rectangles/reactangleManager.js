const localStorgeFilePath = 'filepath';

class RectangleManager {
    constructor() {
        this.rectangles = {};
        this.counter = 0;
    }   

    addRectangle(rectangle, font, text, backgroundImg) {
        const id = 'rect-'+this.counter;
        const div = printableArea.appendChild(document.createElement('div'));
        div.id = id;
        if(!font) font = new Font(FontType.Default, convertToStyleStringPX(16));

        this.rectangles[id] = {
            rect:  rectangle,
            div: div,
            font: font,
            text: text ? text :id,
            backgroundImg: backgroundImg ? backgroundImg : undefined
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
            openToolsMenu();
        })
    }

    saveToJSON() {
        return JSON.stringify(this.rectangles);
    }

    saveToLocalStorage(fileName) {
        const path = localStorgeFilePath + "-" + fileName;
        alert('saved file: ' + path);
        localStorage.setItem(path, JSON.stringify(this.rectangles));
    }

    loadFromLocalStorage(fileName) {
        const path = localStorgeFilePath + "-" + fileName;
        alert('loaded file: ' + path);
        this.loadJSON(localStorage.getItem(path));
    }

    loadJSON(jsonString) {
        const newRectangles = JSON.parse(jsonString);
        let divsToRemove = [];
        Object.keys(this.rectangles).forEach(key => {
            divsToRemove.push(this.rectangles[key].div);
        });

        divsToRemove.forEach(div => {
            printableArea.removeChild(div);
        })

        this.rectangles = {};

        this.counter = 0;

        Object.keys(newRectangles).forEach(key => {
            this.addRectangle(newRectangles[key].rect, newRectangles[key].font, newRectangles[key].text, newRectangles[key].backgroundImg);
            openMenu(key);
        });
    }
}
