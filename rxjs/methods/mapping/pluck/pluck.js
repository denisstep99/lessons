import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';


//Maps each source value (an object) to its specified nested property.

const clicks = fromEvent(document, 'click');
const tagNames = clicks.pipe(pluck('srcElement', 'clientWidth'));
tagNames.subscribe(x => console.log(x));
