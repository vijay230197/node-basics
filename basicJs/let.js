//1
// console.log(b);
// let b = 8;
//same with const

//referrence error b is not defined : cannot access b before initilization
//tdz will come into picture


//2
// if (true) {
//     let y = 2;
// }
// console.log(y);
//same with const

//let is blocked scope so not defined outside, referrence error y is not defined.

//3,
// let a = 1;
// let a = 2;
// console.log(a);

//code breaks, Syntax error cannot redeclare let  , Identifier 'a' has already been declared

//4 Browser
// let l = 200;
// console.log(window.l);

//undefined
//let (and const) in global scope do not attach to window.

//5.
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 100);
// }

//   let is block scoped.
//   In a for loop, JavaScript creates a new binding of i for each iteration.
//   Each callback closes over its own separate i, not a shared one.
//   By the time setTimeout runs, those bindings are still preserved (thanks to closures).
//   Output:
//   0 1 2




//6.
// for (let i = 0; i < 2; i++) {
//     let i = 100;
//     console.log(i);
// }

// output
// 100
// 100
// Reason: Inner let shadows outer loop variable.