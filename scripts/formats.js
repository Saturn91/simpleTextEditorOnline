class Format {
    constructor(width, height, printableWidth, printableHeight) {
        this.width = convertToStyleStringMM(width);
        this.height = convertToStyleStringMM(height);
        this.printableWidth = convertToStyleStringMM(printableWidth);
        this.printableHeight = convertToStyleStringMM(printableHeight);
    }
}

const formats = {
    a4: new Format(210, 297, 203.2, 289.0)
}

let actualFormat = formats.a4;
