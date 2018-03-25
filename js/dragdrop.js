console.log('dragdrop.js loaded ...');

let x = 0, y = 0;


window.onDragM = function onDragM(e) {

    //console.log('onDragM: ', e);
    let t = e.target;
    x = e.pageX;
    y = e.pageY;
    console.log('Current: ', t.style.getPropertyValue('top'), t.style.getPropertyValue('left'));

    setTimeout(() => {

        //let cStyle = window.getComputedStyle(e.target);
        //console.log(cStyle.getPropertyValue('top'), cStyle.getPropertyValue('left'));
        if (x, y) {
            console.log('New: ', x, y);
            t.style.left = x + 'px';
            t.style.top = y + 'px';
        }
    }, 10);
}


window.onDragEndM = function onDragEndM(e) {
    //console.log('Event OnDragEnd fired');
}


window.onDragEnterM = function onDragEnterM(e) {
    //console.log('Event OnDragEnter fired');
}


window.onDragExitM = function onDragExitM(e) {
    //console.log('Event OnDragExit fired');
}


window.onDragLeaveM = function onDragLeaveM(e) {
    //console.log('Event OnDragLeave fired');
}


window.onDragOverM = function onDragOverM(e) {
    //console.log('Event OnDragOver fired');
}


window.onDragStartM = function onDragStartM(e) {
    //console.log('Event OnDragStart fired');
}


window.onDropM = function onDropM(e) {
    //console.log('Event OnDrop fired');
}

window.clickkk = function clickkk(e) {
    console.log('Clicked');
}
