const visiblePageOutline = document.getElementById('visible-outline-page');
const printableArea = document.getElementById('printable-area');

//scale to format
setElementSize(visiblePageOutline, actualFormat.width, actualFormat.height);
setElementSize(printableArea, actualFormat.printableWidth, actualFormat.printableHeight);

document.getElementById('addRectangleBtn').addEventListener('click', () => {
    AddRectangle();
})

