//1.
// console.log(b);
// var b = 8;

// var is hoisted, but value is given undefined during memory phase


// 2. 
// {
//     var a = 8;
// }

// console.log(a);

//8
//var is function scope, so it ignores block scope and its available outside


//3

// var a = 1;
// var a = 2;
// console.log(a);

// //var allows redeclararions

// //4. *****************************************************************************
// console.log(foo); // undefined
// foo();            // ❌ TypeError: foo is not a function

// var foo = function () {
//     console.log("foo called");
// };


// //11.
// console.log(square);
// var square = function sq(n) {
//     return n * n;
// }

// sq(3)

// //undefined
// //Referrence error: sq is not defined

//5 {IN BROWSER}
// var v = 100;
// console.log(window.y);

//gives 10 in browser
//var in global scope attaches to window.


// //6.
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 100);
// }

// i = 0. at the end of iteration i will be 1 
// i = 1. at the end of iteration i will be 2 
// i = 2. at the end of iteration i will be 3

// var is function-scoped (or global if outside any function), not block-scoped.
// That means all iterations of the loop share the same single variable i.
// The loop runs synchronously → increments i until it reaches 3.
// By the time the async setTimeout callbacks actually run, i = 3.
// So all three callbacks log 3.

//7.
// for (var i = 0; i < 2; i++) {
//     setTimeout(function () { console.log(i); }, 100);
// }


// Output:

// 2
// 2

//8.
// function test() {
//     var a = 1;
//     let b = 2;
//     const c = 3;
//     console.log(a, b, c);
// }
// test();
// console.log(a, b, c);

// 1 2 3
// ReferenceError: a is not defined


//9.
// var x = 1;

// function foo() {
//     var x = 2;
//     console.log(x);
// }

// foo();
// console.log(x);

//Output:

// 2
// 1


//11.
// var x = 20;
// function foo(){
//      console.log(x)
//      var x = 10
//      console.log(x)
// }
// foo()
 
// undefined 10


//10.
// var a = 1;
// if(true){ 
//     var a = 2; 
// }
// console.log(a);
// Output:

// 2 
// Reason: var ignores block scope; outer a is overwritten. VAR DOESNNT RESPECT BLOCK SCOPE