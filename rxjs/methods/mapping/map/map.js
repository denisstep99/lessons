import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';


// Applies a given project function to each value emitted by the source Observable,
// and emits the resulting values as an Observable.
// it is used with Observable.pipe()

fromEvent(
    document.getElementsByTagName('input'),
    'keypress'
).pipe(
    map((e) => e.code),
    map((t) => t.toUpperCase())
).subscribe(
    (data) => console.log(data)
);
