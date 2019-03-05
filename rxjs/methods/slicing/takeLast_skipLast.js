const
    Rx = require('rxjs'),
    operators = require('rxjs/operators');


const stream$ = Rx.interval(500)
    .pipe(
        operators.map(n => n ** 2),
        operators.take(20)
    );


//operators.takeLast()
stream$
    .pipe(
        operators.takeLast(5)
    )
    .subscribe(data => console.log('The first subscriber: ', data));

//operators.skipLast()
stream$
    .pipe(
        operators.skipLast(10)
    )
    .subscribe(data => console.log('The second subscriber: ', data));
