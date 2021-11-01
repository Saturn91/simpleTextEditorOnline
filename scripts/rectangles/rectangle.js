class Rectangle {
    constructor(x, y, width, height) {
        this.x = convertToStyleStringMM(x); 
        this.y = convertToStyleStringMM(y);
        this.width = convertToStyleStringProzent(width);
        this.height = convertToStyleStringMM(height);
    }
}