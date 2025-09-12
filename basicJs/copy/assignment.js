//1.
// let a = 5;
// let b = a;

// b = 10;

// console.log(a, b);

// a stays the same because a is primitive

//2.
// let a = {
//     name: 'vijay',
//     details: {
//         city: 'vadodara'
//     }
// }

// let b = a;

// b.name = 'soam';
// b.details.city = 'mumbai';

// console.log(a);
// console.log(b);
//let b = a; → same reference (no copy at all).



//3.

// const obj = {
//     a: 1
// };
// const copy = obj;

// copy.a = 2;

// console.log(obj.a);
//Output:

// 2