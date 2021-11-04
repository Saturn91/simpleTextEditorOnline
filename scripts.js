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

function reRenderBrowserFiles() {
    reRenderBrowserFileSelect();
    reRenderBrowserFileList();
}

function reRenderBrowserFileSelect() {
    const fileSelect = document.getElementById('fileSelect');
    const actualOptions = [...fileSelect.children];
    actualOptions.forEach(child => {
        fileSelect.removeChild(child);
    });

    const option1 = fileSelect.appendChild(document.createElement('option'));
    option1.value = 'none';
    option1.innerHTML = 'no File selected'
    const files = getAllBrowserFiles();

    for (let i = 0; i<files.length; i++){
        let opt = document.createElement('option');
        opt.value = files[i];
        opt.innerHTML = files[i];
        fileSelect.appendChild(opt);
    }
}

function onDeleteBrowserFile(browserFile) {
    alert('delete: ' + browserFile);
    localStorage.removeItem(localStorgeFilePath+"-"+browserFile);
    reRenderBrowserFiles();
}

function reRenderBrowserFileList() {
    const browserList = document.getElementById('browser-file-list');

    const files = getAllBrowserFiles();

    browserList.innerHTML = "";

    files.forEach(file => {
        const div = browserList.appendChild(document.createElement('div'));
        div.innerHTML = `
            <label for="delBtn">${file}</label>
            <button id='delBtn-${file}'>Delete</button>
        `;
        document.getElementById('delBtn-'+ file).addEventListener('click', () => onDeleteBrowserFile(file));
    })
}

function getAllBrowserFiles() {
    let files = [];

    for (var key in localStorage){
        if(key.includes(localStorgeFilePath+"-")) files.push(key.substring(localStorgeFilePath.length+1));
    }

    return files;
}

function init() {

    visiblePageOutline = document.getElementById('visible-outline-page');
    printableArea = document.getElementById('printable-area');

    document.getElementById('show-file-menu-btn').addEventListener('click', () => {
        openFileMenu();
    })

    document.getElementById('show-tools-menu-btn').addEventListener('click', () => {
        openToolsMenu();
    })

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

    document.getElementById('saveFileBtn').addEventListener('click', () => {
        rectangleManager.saveToLocalStorage(document.getElementById('fileNameInput').value);
        reRenderBrowserFiles();
    });

    reRenderBrowserFiles();

    document.getElementById('loadFileBtn').addEventListener('click', () => {
        rectangleManager.loadFromLocalStorage(document.getElementById('fileSelect').value);
    });

    document.getElementById('load-file-btn').addEventListener('click', () => {
        loadJSONasDocument();
    })

    document.getElementById('save-file-btn').addEventListener('click', () => {
        download('my-online-text-editor.txt',rectangleManager.saveToJSON());
    })

    document.getElementById('z-Up-Btn').addEventListener('click', () => {
        changeChildRenderOrder(document.getElementById(document.getElementById('title-input').innerText), 1);
    });

    document.getElementById('z-Down-Btn').addEventListener('click', () => {
        changeChildRenderOrder(document.getElementById(document.getElementById('title-input').innerText), -1);
    });

    document.getElementById('delete-backgroundImage-btn').addEventListener('click', () => {
        deleteCurrentBackgroundImage();
    });
}

init();
