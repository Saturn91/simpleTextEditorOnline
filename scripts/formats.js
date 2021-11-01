class Format {
    constructor(width, height, printableWidth, printableHeight) {
        this.width = this.convertToStyleStringMM(width);
        this.height = this.convertToStyleStringMM(height);
        this.printableWidth = this.convertToStyleStringMM(printableWidth);
        this.printableHeight = this.convertToStyleStringMM(printableHeight);
    }

    convertToStyleStringMM(number) {
        return '' + number + "mm";
    }
}

const formats = {
    a4: new Format(210, 297, 203.2, 289.0)
}