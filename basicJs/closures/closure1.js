function counter() {
    let count = 0;

    return function increment() {
        count++;
        return count
    }
}


// // 1.
// var increase = counter()()
// var increase = counter()()


// var increase1 = counter()()

// console.log(increase, increase1);

// //same value shown even though increase called twice


// // 2.
// if i want to see 2 values

const inc = counter(); // returns increment function with closure

inc();           // first call → count goes from 0 → 1, returns 1
const val = inc(); // second call → count goes from 1 → 2, returns 2

console.log(val); // 2
