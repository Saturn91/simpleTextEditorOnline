function loadFromFile() {
    const file = document.getElementById('load-file-input').files[0];
    if(file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            console.log(evt.target.result);
            rectangleManager.loadJSON(evt.target.result);
        }
        reader.onerror = function (evt) {
            document.getElementById('load-file-input').innerHTML = "error reading file";
        }   
    }
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}