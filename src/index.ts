import { Observable } from 'rxjs';

var observable = new Observable(observer => {
    observer.next("Hello Rxjs");
    observer.next(1);
})

observable.subscribe((x) => console.log(x));