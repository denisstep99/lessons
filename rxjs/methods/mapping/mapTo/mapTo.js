import {fromEvent} from 'rxjs';
import {mapTo} from 'rxjs/operators';


// Emits the given constant value on the output Observable every time the source Observable emits a value.

fromEvent(
    document.getElementsByTagName('input'),
    'keyup'
).pipe(
    mapTo(10)
).subscribe(
    (data) => console.log(data)
);
