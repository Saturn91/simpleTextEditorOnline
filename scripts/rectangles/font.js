const FontType = {
    Default: 'normal', 
    Italic: 'italic',
    Bold: 'bold'
}

class Font {
    constructor(type, size, color) {
        this.type = type;
        this.size = size;
        this.color = color ? color : '#000000';
    }
}
