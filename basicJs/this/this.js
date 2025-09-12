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