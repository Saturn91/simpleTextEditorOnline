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

function reRenderFileSelect() {
    const fileSelect = document.getElementById('fileSelect');
    const actualOptions = [...fileSelect.children];
    actualOptions.forEach(child => {
        fileSelect.removeChild(child);
    });

    const option1 = fileSelect.appendChild(document.createElement('option'));
    option1.value = 'none';
    option1.innerHTML = 'no File selected'
    let files = [];

    for (var key in localStorage){
        if(key.includes(localStorgeFilePath+"-")) files.push(key.substring(localStorgeFilePath.length+1));
    }

    for (let i = 0; i<files.length; i++){
        let opt = document.createElement('option');
        opt.value = files[i];
        opt.innerHTML = files[i];
        fileSelect.appendChild(opt);
    }
}

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
    });

    document.getElementById('saveFileBtn').addEventListener('click', () => {
        rectangleManager.saveToLocalStorage(document.getElementById('fileNameInput').value);
    });

    reRenderFileSelect();

    document.getElementById('loadFileBtn').addEventListener('click', () => {
        rectangleManager.loadFromLocalStorage(document.getElementById('fileSelect').value);
    });
}

init();
