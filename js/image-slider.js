import '../css/image-slider.css';

import data from './image-slider-data';

let index = 0;

function apply(margin) {
    setTimeout(() => {
        document.querySelector('.images-container').style['margin-left'] = margin +'px';
    }, 10);
}

window.slideLeft = function () {
    index -= 240;
    if (index )
    apply(index);
}

window.slideRight = function () {
    index += 240;
    if (index )
        apply(index);
}


