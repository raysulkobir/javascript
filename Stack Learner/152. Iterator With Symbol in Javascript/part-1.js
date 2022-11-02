let arr = [100, 2, 3, 4, 5, 6, 7];

let a = arr[Symbol.iterator]();
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());

let msg = 'hello';

let b = msg[Symbol.iterator]()
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());

console.log(msg[0]);
console.log(msg[1]);