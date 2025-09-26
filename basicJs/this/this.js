//1.
// const obj = {
//     name: 'vijay',
//     greet: function () {
//         console.log('hello', this.name);
//     }
// };

// console.log(obj.greet());
//Hello vijay

//2.
// const fn = obj.greet;
// fn(); // 
// ❌ "hello undefined"
//
// When you extract the method into a standalone variable, it loses its binding to obj



//3.
// const obj = {
//     name: 'vijay',
//     greet: () => console.log('hello', this.name)
// };

// console.log(obj.greet());

//hello undefined for arrow function, they inherit from the enclosing scope.
//Arrow functions don’t have their own this.

// (function () {
//     var a = b = 5;
// })();
// console.log(typeof a); // ?
// console.log(typeof b); // ?

//undefined
//number

// b = 5;    // assignment first
// var a = b;
// // var a → declared inside function scope, so it’s local.
// b = 5 → since no var/let/const, it implicitly becomes global (in sloppy mode).

// const obj = {
//     name: "Alice",
//     regularFn: function () {
//         console.log("regularFn this.name:", this.name);
//     },
//     arrowFn: () => {
//         console.log("arrowFn this.name:", this.name);
//     }
// };

// obj.regularFn(); // ✅ "Alice"
// obj.arrowFn();   // ❌ undefined (or error in strict mode)


// //4
// const obj = {
//     value: 42,
//     getValue: (() => {
//         return this.value;
//     })
// };
// console.log(obj.getValue());

// //undefined