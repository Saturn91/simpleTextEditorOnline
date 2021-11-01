function convertToStyleStringMM(number) {
    return '' + number + "mm";
}

function convertMMStyleToNumber(style) {
    return Number(style.substring(0, style.length-2));
}

function convertToStyleStringProzent(number) {
    return (number / 100 * convertMMStyleToNumber(actualFormat.printableWidth)) + "mm";
}

function convertMMToProcent(style) {
    return convertMMStyleToNumber(style) / convertMMStyleToNumber(actualFormat.printableWidth) * 100;
}
