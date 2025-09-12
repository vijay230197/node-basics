function counter() {
    let count = 0;

    return function increment() {
        count++
    }
}



var increase = counter()()
var increase = counter()()


var increase1 = counter()()