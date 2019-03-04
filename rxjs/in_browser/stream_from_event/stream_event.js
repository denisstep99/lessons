import {fromEvent} from 'rxjs';

let button = document.querySelector("button");

let btnClick$ = fromEvent(button, 'click');
btnClick$.subscribe(
    (data) => {
        console.log(data);
    },
    (error) => {
        console.log(error);
    },
    () => {
        console.log("completed");
    }
);

let keydown$ = fromEvent(document, 'keydown');
keydown$.subscribe(
    (data) => {
        console.log(data);
    }
);
