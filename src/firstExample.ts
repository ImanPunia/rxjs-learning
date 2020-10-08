import { Observable } from "rxjs";

function abc(callback:any,arg:string) {
  callback(arg);
}


function callback(value: string) {
  console.log("Iman" , value);
}

abc(callback,'Kaur');

var inputNode = document.createElement('input');
inputNode.id = 'yourname';
document.body.appendChild(inputNode);

function def() {
    const ESC_KEY = 27;
    const nameInput = document.getElementById('yourname') as HTMLInputElement;
  //  nameInput.addEventListener('keydown',()=>console.log('event attached'));
    this.fromEvents(nameInput, 'keydown')
    .subscribe((e: KeyboardEvent) => {
      if (e.keyCode === ESC_KEY) {
        nameInput.value = '';
      }
    });
}
    
 

 function fromEvents(target: HTMLInputElement, eventName: string) {
    return new Observable((observer) => {
      const handler = (e: unknown) => observer.next(e);
  
      target.addEventListener(eventName, handler);
  
      return () => {
        target.removeEventListener(eventName, handler);
      };
    });
  }

  def();