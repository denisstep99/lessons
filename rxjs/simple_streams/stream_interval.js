const Rx = require('rxjs');
const operators = require('rxjs/operators');


Rx.interval(500)
    .pipe(operators.take(10))
    .subscribe(
        (data) => {
            console.log("next: ", data);
        }
    );
