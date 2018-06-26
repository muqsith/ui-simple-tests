import applyPerformanceWrapper from 'performance-wrapper';
import prettyMs from 'pretty-ms';

console.log('dragdrop.js loaded ...');

let x = 0, y = 0;

class DnD {
    move(t) {
        //let cStyle = window.getComputedStyle(e.target);
        //console.log(cStyle.getPropertyValue('top'), cStyle.getPropertyValue('left'));
        if (x, y) {
            console.log('New: ', x, y);
            t.style.left = x + 'px';
            t.style.top = y + 'px';
        }
    }
    OnDragM(e, cb) {

        //console.log('onDragM: ', e);
        let t = e.target;
        x = e.pageX;
        y = e.pageY;
        console.log('Current: ', t.style.getPropertyValue('top'), t.style.getPropertyValue('left'));

        setTimeout(() => {
            cb(t);
        }, 10);
    }


    OnDragEndM(e) {
        //console.log('Event OnDragEnd fired');
    }


    OnDragEnterM(e) {
        //console.log('Event OnDragEnter fired');
    }


    OnDragExitM(e) {
        //console.log('Event OnDragExit fired');
    }


    OnDragLeaveM(e) {
        //console.log('Event OnDragLeave fired');
    }


    OnDragOverM(e) {
        //console.log('Event OnDragOver fired');
    }


    OnDragStartM(e) {
        //console.log('Event OnDragStart fired');
    }


    OnDropM(e) {
        //console.log('Event OnDrop fired');
    }

    Clickkk(e) {
        console.log('Clicked');
    }

}

window.dnd = applyPerformanceWrapper(new DnD(), 'dnd', (perf) => {
    console.log(`function ${perf.functionName} with arguments ${perf.args} took ${prettyMs(perf.endTime - perf.startTime)}` );
});
