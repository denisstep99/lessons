const Rx = require('rxjs');

Rx.of(1,2,3,4)
    .subscribe(
        (data) => {
            console.log("next: ", data);
        }
    );
