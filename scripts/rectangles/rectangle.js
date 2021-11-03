class Rectangle {
    constructor(x, y, width, height, backgroundColor, backgroundImg) {
        this.x = convertToStyleStringMM(x); 
        this.y = convertToStyleStringMM(y);
        this.width = convertToStyleStringProzent(width);
        this.height = convertToStyleStringMM(height);
        this.backGroundColor = backgroundColor ? backgroundColor : '#ffffff';
        this.backgroundImg = backgroundImg;
    }
}