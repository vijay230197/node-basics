function call() {
    return new Promise(resolve => setTimeout(() => {


        resolve()
        console.log('hi');

    }, 10000));
}


call()
    .then(function first() { console.log(1) })
    .then(function first() { console.log(2) })
    .then(function first() { console.log(3) });

call()
    .then(function first() { console.log(4) })
    .then(function first() { console.log(5) })
    .then(function first() { console.log(6) });



//2.    

// function call() {

//     return Promise.resolve()

// }



// call()
//     .then(function first() { console.log(1) })
//     .then(function first() { console.log(2) })
//     .then(function first() { console.log(3) });

// call()
//     .then(function first() { console.log(4) })
//     .then(function first() { console.log(5) })
//     .then(function first() { console.log(6) });

