const map = require('rxjs/operators');
const Rx = require('rxjs');


let stream$ = new Rx.Observable((observer) => {
    let time = 0;

    let eventMaker = setInterval(function(change) {
        observer.next("it's: " + change() + "s")
    }, 500, () => time += 0.5);

    setTimeout(() => {
        observer.next("Stopped");
        clearInterval(eventMaker);
    }, 5000);
});

stream$.subscribe((data) => {
    console.log(data);
});
