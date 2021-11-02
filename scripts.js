let visiblePageOutline = document.getElementById('visible-outline-page');
let printableArea = document.getElementById('printable-area');
let checkboxDefaultFonttype = document.getElementById('default-font-input');
let checkboxItalicFonttype = document.getElementById('italic-font-input');
let checkboxBoldFonttype = document.getElementById('bold-font-input');
let widthAsMM = document.getElementById('actualWidth-display');
let widthAsProcent = document.getElementById('width-input');

//scale to format
setElementSize(visiblePageOutline, actualFormat.width, actualFormat.height);
setElementSize(printableArea, actualFormat.printableWidth, actualFormat.printableHeight);

function init() {

    visiblePageOutline = document.getElementById('visible-outline-page');
    printableArea = document.getElementById('printable-area');

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
    
    checkboxDefaultFonttype = document.getElementById('default-font-input');
    checkboxDefaultFonttype.addEventListener('change', () => {
        if(checkboxDefaultFonttype.checked) updateFontTypeCheckboxes(FontType.Default);
    })
    
    checkboxItalicFonttype = document.getElementById('italic-font-input');
    checkboxItalicFonttype.addEventListener('change', () => {
        if(checkboxItalicFonttype.checked) updateFontTypeCheckboxes(FontType.Italic);
    })
    
    checkboxBoldFonttype = document.getElementById('bold-font-input');
    checkboxBoldFonttype.addEventListener('change', () => {
        if(checkboxBoldFonttype.checked) updateFontTypeCheckboxes(FontType.Bold);
    })
    
    widthAsMM = document.getElementById('actualWidth-display');
    widthAsProcent = document.getElementById('width-input');
    widthAsProcent.onchange = () => {
        widthAsMM.value = convertToStyleStringProzent(widthAsProcent.value);
    }

    Object.keys(rectangleManager.rectangles).forEach(key => rectangleManager.addEventListenerToRectangle(key));

    document.getElementById('load-json-btn').addEventListener('click', () => {
        rectangleManager.loadJSON(document.getElementById('json-input').value);
    })
}

init();
