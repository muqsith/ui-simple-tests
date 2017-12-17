/**
 * IDs: 
 * container
 * level-1-div
 * level-1-button-group
 * level-1-button
 * level-2-div
 * level-2-button-group
 * level-2-button
 * level-3-div
 * level-3-button-group
 * level-3-button
 * level-4-div
 */

let level3div = document.querySelector('#level-3-div');
if (level3div) {
    level3div
    .addEventListener(
        'click', 
        function(e) {
             console.log('#level-3-div', e);
        }, 
        {
            
        }
     );
}

let level2div = document.querySelector('#level-2-div');
if (level2div) {
    level2div
    .addEventListener(
        'click', 
        function(e) {
            console.log('#level-2-div', e);
        }, 
        {
           capture: true
        }
    );
}
 
let level1div = document.querySelector('#level-1-div');
if (level1div) {
    level1div
    .addEventListener(
        'click', 
        function(e) {
            console.log('#level-1-div', e);
        }, 
        {
            capture: true
        }
     );
}

function causeSomeSeriousDelay() {
    var num = 9999999999, i = 2;
    while (i < num) {
        i += 1;
        var limit = Math.sqrt(i);
        var isPrime = true;
        for (var j=2; j<=limit; j+=1) {
            if (i%j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            //console.log(i, ' is prime');
        }
    }
}
if (document.querySelector('#events-container')) {
    document.addEventListener(
        'scroll',
        function(e) {
            //causeSomeSeriousDelay();
            e.preventDefault();
        },
        {
            passive: false
        }
    );
}
