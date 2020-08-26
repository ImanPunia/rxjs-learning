import { Observable, Subscriber, of, interval } from 'rxjs';

const observable1 = of(2,6,7,8);

observable1.subscribe(x => console.log(x))
observable1.subscribe(x => console.log('second',x))