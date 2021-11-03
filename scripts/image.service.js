function displayFileImageInDiv(file, div) {
    const img = div.appendChild(document.createElement('img'));
    img.src = URL.createObjectURL(file);
}