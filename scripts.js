const visiblePageOutline = document.getElementById('visible-outline-page');
const printableArea = document.getElementById('printable-area');

//scale to format
setElementSize(visiblePageOutline, formats.a4.width, formats.a4.height);
setElementSize(printableArea, formats.a4.printableWidth, formats.a4.printableHeight);

document.getElementById('addRectangleBtn').addEventListener('click', () => {
    AddRectangle();
})

