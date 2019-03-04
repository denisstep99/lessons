//stream from array
console.log("from array");
const Rx = require('rxjs');
Rx.from([1, 2, 3, 3, 45, 36]).subscribe(
    (data) => {
        console.log("next: ", data);
    }
);

//stream from generator
console.log("\nfrom generator");
let genObj = (function* generator(stop) {
    let i = 0;
    while (i++ < stop) {
        yield i;
    }
}(10));

Rx.from(genObj).subscribe(
    (data) => {
        console.log("next: ", data);
    }
);

//stream from Set
console.log("\nfrom set");
Rx.from(new Set().add(10).add(20).add(30)).subscribe(
    (data) => {
        console.log("next: ", data);
    }
);
