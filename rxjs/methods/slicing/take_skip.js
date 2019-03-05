const
    Rx = require('rxjs'),
    operators = require('rxjs/operators');

const stream$ = Rx.timer(1000, 400);


//operators.take()
stream$
    .pipe(
    operators.take(10)
)
    .subscribe(
    data => console.log('The first subscriber: ', data)
);

//operators.skip()
stream$
    .pipe(
    operators.skip(5),
    operators.take(5)
)
    .subscribe(
    data => console.log('The second subscriber: ', data)
);
