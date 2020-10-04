import { observable, Observable, Subject } from "rxjs"

const subj = new Subject<number>();

subj.subscribe({
    next: (a) => console.log(`observer 1: ${a}`)
  });

subj.subscribe({
next: (b) => console.log(`observer 2: ${b}`)
});

const obser = new Observable((x)=> {
    x.next(1);
    x.next(2);
})

obser.subscribe(subj);

