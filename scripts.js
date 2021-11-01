const visiblePageOutline = document.getElementById('visible-outline-page');
const printableArea = document.getElementById('printable-area');

//scale to format
setElementSize(visiblePageOutline, actualFormat.width, actualFormat.height);
setElementSize(printableArea, actualFormat.printableWidth, actualFormat.printableHeight);

document.getElementById('addRectangleBtn').addEventListener('click', () => {
    AddRectangle();
})

document.getElementById('delte-rect-btn').addEventListener('click', () => {
    deleteActualRectangle();
})

document.getElementById('elementForm').addEventListener('change', () => {
    submitChanges();
});

document.getElementById('text-input').addEventListener('keyup', () => {
    submitChanges();
})

const checkboxDefaultFonttype = document.getElementById('default-font-input');
checkboxDefaultFonttype.addEventListener('change', () => {
    if(checkboxDefaultFonttype.checked) updateFontTypeCheckboxes(FontType.Default);
})

const checkboxItalicFonttype = document.getElementById('italic-font-input');
checkboxItalicFonttype.addEventListener('change', () => {
    if(checkboxItalicFonttype.checked) updateFontTypeCheckboxes(FontType.Italic);
})

const checkboxBoldFonttype = document.getElementById('bold-font-input');
checkboxBoldFonttype.addEventListener('change', () => {
    if(checkboxBoldFonttype.checked) updateFontTypeCheckboxes(FontType.Bold);
})

const widthAsMM = document.getElementById('actualWidth-display');
const widthAsProcent = document.getElementById('width-input');
widthAsProcent.onchange = () => {
    widthAsMM.value = convertToStyleStringProzent(widthAsProcent.value);
}