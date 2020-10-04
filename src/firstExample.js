function abc(callback, arg) {
    callback(arg);
}
function callback(value) {
    console.log("Iman", value);
}
abc(callback, 'Kaur');
// var inputNode = document.createElement('input');
// inputNode.id = 'yourname';
// document.body.appendChild(inputNode);
// function abc() {
//     const ESC_KEY = 27;
//     const nameInput = document.getElementById('yourname') as HTMLInputElement;
//   //  nameInput.addEventListener('keydown',()=>console.log('event attached'));
//     this.fromEvents(nameInput, 'keydown')
//     .subscribe((e: KeyboardEvent) => {
//       if (e.keyCode === ESC_KEY) {
//         nameInput.value = '';
//       }
//     });
// }
//  function fromEvents(target: HTMLInputElement, eventName: string) {debugger;
//     return new Observable((observer) => {
//       const handler = (e: unknown) => observer.next(e);
//       target.addEventListener(eventName, handler);
//       return () => {
//         target.removeEventListener(eventName, handler);
//       };
//     });
//   }
//   abc();
