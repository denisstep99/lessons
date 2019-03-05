const
    Rx = require('rxjs'),
    operators = require('rxjs/operators');


const stream$ = Rx.interval(500)
    .pipe(
        operators.map(n => n ** 2),
        operators.take(20)
    );


//operators.takeWhile(function())
stream$
    .pipe(
        operators.takeWhile(n => n < 100)
    )
    .subscribe(data => console.log('The first subscriber: ', data));

//operators.skipWhile(function())
stream$
    .pipe(
        operators.skipWhile(n => n < 140)
    )
    .subscribe(data => console.log('The second subscriber: ', data));
