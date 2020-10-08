import { Observable, Subscriber, of } from 'rxjs';

const observable1 = of(2,6,7,8);

observable1.subscribe(x => console.log(x))
observable1.subscribe(x => console.log('second',x))


function fromEvents(target: string, eventName : string ): Observable<unknown> {
   return new Observable(( observer) => {
        observer.next(target);
        console.log("'i'm called");
        return () =>  {
            console.log('destroy');
        }
   })
}

fromEvents('Successfully', 'Typed').subscribe( (data) => {
    console.log('data received',data);
})