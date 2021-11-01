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

const widthAsMM = document.getElementById('actualWidth-display');
const widthAsProcent = document.getElementById('width-input');
widthAsProcent.onchange = () => {
    widthAsMM.value = convertToStyleStringProzent(widthAsProcent.value);
}