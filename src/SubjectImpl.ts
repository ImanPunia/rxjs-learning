import { observable, Observable, Subject } from "rxjs"

const subj = new Subject<number>();

//registering observers
subj.subscribe({
    next: (a) => console.log(`observer 1: ${a}`)
  });

subj.subscribe({
next: (b) => console.log(`observer 2: ${b}`)
});
   
//execution
subj.next(3);
subj.next(7);

const obser = new Observable((x)=> {
    x.next(1);
    x.next(2);
})

//execution n registering observer
obser.subscribe((x)=> console.log('Observable' , x));
obser.subscribe((y) => console.log('observable', y));