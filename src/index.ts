import { Observable, SubscribableOrPromise, Subscriber } from 'rxjs';

var observable = new Observable(observer => {
    observer.next("Rxjs");
    let x =0;
    setTimeout(() => {
        x=x+1;
        observer.next(x);
      }, 1000);
})


observable.subscribe((x) => console.log("x",x));
observable.subscribe((y) => console.log("y",y));
observable.subscribe((z) => console.log("z",z));

function observerFunction(a:Subscriber<unknown>){
 a.next(1);
  };
  
  const returnedObservable = new Observable(observerFunction);
  
  returnedObservable.subscribe(value => {
    console.log("val",value)
  });