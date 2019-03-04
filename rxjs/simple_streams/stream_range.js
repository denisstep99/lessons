const Rx = require('rxjs');
const operators = require('rxjs/operators');

Rx.range(10, 20)
    .subscribe(
        (data) => {
            console.log("next: ", data);
        }
    );
