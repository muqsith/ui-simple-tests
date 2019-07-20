function printDocumentDimensions() {
    console.log(`${window.screen.width} x ${window.screen.height}`);
    console.log(`${window.innerWidth} x ${window.innerHeight}`);
}

if (document.querySelector('#rgrid-container')) {
    //window.addEventListener('resize', printDocumentDimensions, false);
}

