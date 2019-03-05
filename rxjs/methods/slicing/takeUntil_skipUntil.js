const
    Rx = require('rxjs'),
    operators = require('rxjs/operators');


const stream$ = Rx.interval(500)
    .pipe(
        operators.map(n => n ** 2),
        operators.take(20)
    );


//operators.takeUntil<T>(notifier: Observable<any>): MonoTypeOperatorFunction<T>
//Emits the values emitted by the source Observable until a notifier Observable emits a value.
stream$
    .pipe(
        operators.takeUntil(Rx.timer(3000, 0))
    )
    .subscribe(data => console.log('The first subscriber: ', data));

//operators.skipUntil<T>(notifier: Observable<any>): MonoTypeOperatorFunction<T>
stream$
    .pipe(
        operators.skipUntil(Rx.timer(3000, 0))
    )
    .subscribe(data => console.log('The second subscriber: ', data));
