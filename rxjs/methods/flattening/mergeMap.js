const Rx = require('rxjs');
const operators = require('rxjs/operators');

Rx.of('a', 'b', 'c')
    .pipe(
        operators.mergeMap(
            data => Rx.interval(500)
                .pipe(operators.map(
                    x => x + data
                    )
                )
        ),
        operators.take(10)
    )
    .subscribe(
    data => console.log('next ' + data)
);
