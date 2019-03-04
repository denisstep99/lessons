const Rx = require('rxjs');
const operators = require('rxjs/operators');

Rx.timer(3000, 200)
    .pipe(operators.take(10))
    .subscribe(
        (data) => {
            console.log("next: ", data);
        }
);
