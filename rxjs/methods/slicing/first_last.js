const
    Rx = require('rxjs'),
    operators = require('rxjs/operators');


const stream$ = Rx.interval(500)
    .pipe(
        operators.filter(
            n => !(n % 5)
        ),
        operators.concatMap(
            n => Rx.interval(400)
                .pipe(
                    operators.take(3)
                )
        ),
        operators.take(6),
    );

// the stream test
// stream$.subscribe(
//     data => console.log('next: ', data)
// );

// operators.first()
stream$.pipe(operators.first()).subscribe(
    data => console.log('The first element: ', data)
);

// operators.first()
stream$.pipe(operators.last()).subscribe(
    data => console.log('The last element: ', data)
);
