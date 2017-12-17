if (document.querySelector('#responsive-container')) {
    window.addEventListener('resize', function() {
        console.log(`${window.screen.width} x ${window.screen.height}`);
        console.log(`${window.innerWidth} x ${window.innerHeight}`);
    }, false);
}

