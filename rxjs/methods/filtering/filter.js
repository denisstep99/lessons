const
    Rx = require('rxjs'),
    operators = require('rxjs/operators');

Rx.interval(500)
    .pipe(
        operators.filter(
            n => !(n % 2)
        ),
        operators.take(10)
    )
    .subscribe(
        data => console.log('next: ', data)
    );
