if (document.querySelector('#positions-container')) {
    function getCss(el) {
        let style = null;
        if (el) {
            style = window.getComputedStyle(el, null);
        }        
        return style;
    }

    let style = getCss(document.querySelector('.p-block-1'));
}