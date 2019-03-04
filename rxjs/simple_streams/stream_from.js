const Rx = require('rxjs');
Rx.from([1, 2, 3, 3, 45, 36]).subscribe(
    (data) => {
        console.log("next: ", data);
    }
);
