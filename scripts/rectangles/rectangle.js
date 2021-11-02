class Rectangle {
    constructor(x, y, width, height, backgroundColor) {
        this.x = convertToStyleStringMM(x); 
        this.y = convertToStyleStringMM(y);
        this.width = convertToStyleStringProzent(width);
        this.height = convertToStyleStringMM(height);
        this.backGroundColor = backgroundColor ? backgroundColor : '#ffffff';
    }
}