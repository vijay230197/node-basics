//1.

// const a = 5;
// a = 4;

//type error, assignment to const variable.

//2.

// console.log(bar); // ❌ ReferenceError: Cannot access 'bar' before initialization
// bar();            // ❌ ReferenceError

// const bar = function () {
//     console.log("bar called");
// };

//3.

// const obj = {
//     a: 1
// };

// obj.a = 2;

// console.log(obj.a);

// obj = { a: 3 };


// Output:

// 2
// TypeError: Assignment to constant variable.


//4

// const a = 1;
// const b = a;
// b = 2;
// //// Output:


// TypeError: Assignment to constant variable.
// Reason: Cannot reassign const variable.