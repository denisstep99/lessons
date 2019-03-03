const Rx = require('rxjs');

const stream$ = new Rx.Observable(
    (observer) => {
        let interval = setInterval(
            (timer) => {
                observer.next(`It's been ${timer()}s from the beginning`);
            },
            500,
            (function () {
                let timer = 0;
                return () => timer += 0.5;
            }())
        );

        setTimeout(
            () => {
                observer.error("something wrong!");
                observer.complete();
                clearInterval(interval);
            },
            5100
        );
    });

stream$
    .subscribe(
        (data) => {
            console.log(data);
        },
        (error) => {
            console.log(error);
        },
        () => {
            console.log("finished");
        }
    );
