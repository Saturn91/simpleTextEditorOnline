//--print--
let originalContent = '';

window.onbeforeprint = () => {
    originalContent = document.body.innerHTML;
    document.body.innerHTML = '';
    document.body.appendChild(visiblePageOutline); 
    document.body.classList.add('print');
}

window.onafterprint = () => {
    document.body.innerHTML = originalContent;
    closeMenu();
    init();
    updateJsonField();
    document.body.classList.remove('print');
}