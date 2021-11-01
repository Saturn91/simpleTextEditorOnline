//--print--
let originalContent = '';

window.onbeforeprint = () => {
    originalContent = document.body.innerHTML;
    document.body.innerHTML = '';
    document.body.appendChild(visiblePageOutline);     
}

window.onafterprint = () => {
    document.body.innerHTML = originalContent;
    closeMenu();
    init();
}