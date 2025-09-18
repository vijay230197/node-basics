//1.

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C");
// });

// console.log("D");

// // A
// // D
// // C
// // B


//2.

// console.log("1");

// const p = new Promise((resolve) => {
//   console.log("2");
//   resolve();
// });

// p.then(() => console.log("3"));

// console.log("4");

// 1
// 2
// 4
// 3


//3.
// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// setImmediate(() => console.log("Immediate"));

// console.log("End");

// Start
// End
// Timeout
// Immediate


//4.
// console.log("X");

// new Promise((resolve) => {
//   console.log("Y");
//   setTimeout(() => console.log("Z"), 0);
//   setImmediate(() => console.log("I"));
//   resolve();
// }).then(() => {
//   console.log("Then");
// });

// console.log("W");

// X
// Y
// W
// Then
// Z
// I

//5
// console.log("alpha");

// process.nextTick(() => console.log("beta"));

// Promise.resolve().then(() => {
//   console.log("gamma");
//   process.nextTick(() => console.log("delta"));
// });

// console.log("epsilon");

// alpha
// epsilon
// beta
// gamma
// delta

//6
// console.log("start");

// const p = new Promise((resolve) => {
//   console.log("inside executor");
//   setImmediate(() => console.log("immediate in executor"));
//   resolve();
// });

// p.then(() => {
//   console.log("inside then");
//   setTimeout(() => console.log("timeout in then"), 0);
//   setImmediate(() => console.log("immediate in then"));
// });

// setTimeout(() => console.log("outside timeout"), 0);

// console.log("end");


// start
// inside executor
// end
// inside then
// outside timeout
// timeout in then
// immediate in executor
// immediate in then


//7
// console.log("A");

// process.nextTick(() => console.log("B"));

// Promise.resolve().then(() => {
//   console.log("C");
// });

// setTimeout(() => console.log("D"), 0);

// console.log("E");

// A E B C D


//8
// async function foo() {
//     console.log("1");
//     await null;
//     console.log("2");
// }

// console.log("start");

// foo();

// Promise.resolve().then(() => console.log("3"));

// setImmediate(() => console.log("4"));

// console.log("end");

//   start 1 end 2 3 4



//9
// console.log("X");

// setTimeout(() => console.log("Y"), 0);

// Promise.resolve().then(() => {
//   console.log("Z");
//   process.nextTick(() => console.log("W"));
// });

// console.log("Q");

// X Q Z W Y


//10
// async function bar() {
//     console.log("alpha");
//     await Promise.resolve();
//     console.log("beta");
//   }

//   console.log("start");

//   process.nextTick(() => console.log("epsilon"));

//   bar();

//   setImmediate(() => console.log("gamma"));

//   setTimeout(() => console.log("delta"), 0);

//   console.log("end");

//   start alpha end epsilon beta delta gamma


//11
// console.log("A");

// setTimeout(() => {
//   console.log("B");
//   Promise.resolve().then(() => console.log("C"));
// }, 0);

// Promise.resolve().then(() => {
//   console.log("D");
//   setImmediate(() => console.log("E"));
// });

// console.log("F");

// A F D B C E

//12
// async function task() {
//     console.log("1");
//     await null;
//     console.log("2");
//     process.nextTick(() => console.log("3"));
//   }

//   console.log("start");

//   task();

//   setTimeout(() => console.log("4"), 0);

//   console.log("end");

//   start 1 end 2 3 4


//13
// console.log("X");

// setImmediate(() => {
//   console.log("Y");
//   process.nextTick(() => console.log("Z"));
// });

// Promise.resolve().then(() => {
//   console.log("W");
//   setTimeout(() => console.log("V"), 0);
// });

// console.log("Q");

// X Q W V Y Z

//14
// console.log("alpha");

// setTimeout(() => {
//   console.log("beta");
// }, 0);

// (async () => {
//   console.log("gamma");
//   await Promise.resolve();
//   console.log("delta");
// })();

// process.nextTick(() => console.log("epsilon"));

// console.log("zeta");

// alpha gamma zeta epsilon delta beta

//15
// console.log("I");

// Promise.resolve().then(() => {
//   console.log("II");
//   return Promise.resolve();
// }).then(() => {
//   console.log("III");
//   setImmediate(() => console.log("IV"));
// });

// setTimeout(() => {
//   console.log("V");
//   process.nextTick(() => console.log("VI"));
// }, 0);

// console.log("VII");

// I VII II III V VI IV


//16
// console.log("A");

// setTimeout(() => {
//   console.log("B");
//   Promise.resolve().then(() => console.log("C"));
// }, 0);

// (async () => {
//   console.log("D");
//   await null;
//   console.log("E");
//   process.nextTick(() => console.log("F"));
// })();

// console.log("G");

// A D G E F B C


//17
// console.log("start");

// setImmediate(() => {
//   console.log("A");
//   Promise.resolve().then(() => console.log("B"));
// });

// Promise.resolve().then(() => {
//   console.log("C");
//   setTimeout(() => console.log("D"), 0);
// });

// process.nextTick(() => console.log("E"));

// console.log("end");

// start end E C D A B


//18

// async function run() {
//     console.log("X");
//     setImmediate(() => console.log("Y"));
//     await null;
//     console.log("Z");
// }

// console.log("Q");

// run();

// Promise.resolve().then(() => console.log("W"));

// setTimeout(() => {
//     console.log("T");
//     process.nextTick(() => console.log("U"));
// }, 0);

// console.log("R");

//   Q X R Z W T U Y



//19
// console.log("alpha");

// setTimeout(() => {
//     console.log("beta");
//     Promise.resolve().then(() => console.log("gamma"));
// }, 0);

// (async () => {
//     console.log("delta");
//     await Promise.resolve();
//     console.log("epsilon");
//     setImmediate(() => console.log("zeta"));
// })();

// process.nextTick(() => console.log("eta"));

// console.log("theta");

// alpha delta theta eta epsilon beta gamma zeta


//20
// console.log("I");

// Promise.resolve().then(() => {
//     console.log("II");
//     process.nextTick(() => console.log("III"));
// }).then(() => {
//     console.log("IV");
//     setTimeout(() => {
//         console.log("V");
//         setImmediate(() => console.log("VI"));
//     }, 0);
// });

// console.log("VII");


// I VII II III IV V VI


//21
// console.log("A");

// Promise.resolve().then(() => {
//     console.log("B");
//     return Promise.resolve().then(() => console.log("C"));
// }).then(() => {
//     console.log("D");
// });

// queueMicrotask(() => console.log("E"));

// console.log("F");

// A F B E C D


//22
// console.log("Start");

// (async () => {
//     console.log("Inside async");
//     await null;
//     console.log("After await");
//     queueMicrotask(() => console.log("Micro"));
// })();

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");

// Start Inside async End After await Promise Micro Timeout


//23
// console.log("X");

// setImmediate(() => {
//     console.log("Y");
//     Promise.resolve().then(() => console.log("Z"));
// });

// Promise.resolve().then(() => {
//     console.log("W");
//     setTimeout(() => console.log("V"), 0);
// });

// process.nextTick(() => console.log("U"));

// console.log("Q");


// X Q U W V Y Z



//24
// console.log("alpha");

// Promise.resolve().then(async () => {
//     console.log("beta");
//     await null;
//     console.log("gamma");
// }).then(() => {
//     console.log("delta");
// });

// queueMicrotask(() => console.log("epsilon"));

// setTimeout(() => console.log("zeta"), 0);

// console.log("theta");

// alpha theta beta epsilon gamma delta zeta


//25
// console.log("I");

// setTimeout(() => {
//     console.log("II");
//     queueMicrotask(() => console.log("III"));
//     process.nextTick(() => console.log("IV"));
//     Promise.resolve().then(() => console.log("V"));
// }, 0);

// (async () => {
//     console.log("VI");
//     await null;
//     console.log("VII");
// })();

// Promise.resolve().then(() => console.log("VIII"));

// console.log("IX");

// I VI IX VII VIII II IV III V


//26
// setImmediate(() => console.log('this is set immediate 1')); 
// setImmediate(() => console.log('this is set immediate 2')); 
// setImmediate(() => console.log('this is set immediate 3')); 

// // Timeouts
// setTimeout(() => console.log('this is set timeout 1'), 0); 
// setTimeout(() => {
//   console.log('this is set timeout 2');
//   process.nextTick(() => console.log('this is process.nextTick added inside setTimeout')); 
// }, 0);
// setTimeout(() => console.log('this is set timeout 3'), 0); 
// setTimeout(() => console.log('this is set timeout 4'), 0); 
// setTimeout(() => console.log('this is set timeout 5'), 0); 

// // NextTicks
// process.nextTick(() => console.log('this is process.nextTick 1')); 
// process.nextTick(() => {
//   process.nextTick(console.log.bind(console, 'this is the inner next tick inside next tick')); 
// });
// process.nextTick(() => console.log('this is process.nextTick 2')); 
// process.nextTick(() => console.log('this is process.nextTick 3')); 
// process.nextTick(() => console.log('this is process.nextTick 4')); 


// this is process.nextTick 1
// this is the inner next tick inside next tick
// this is process.nextTick 2
// this is process.nextTick 3
// this is process.nextTick 4
// this is set timeout 1
// this is set timeout 2
// this is process.nextTick added inside setTimeout
// this is set timeout 3
// this is set timeout 4
// this is set timeout 5
// this is set immediate 1
// this is set immediate 2
// this is set immediate 3


//27.
// console.log('start');
 
// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);
 
// setImmediate(() => {
//   console.log('setImmediate');
// });
 
// process.nextTick(() => {
//   console.log('nextTick');
// });
 
// queueMicrotask(() => {
//   console.log('queueMicrotask');
// });
 
// Promise.resolve().then(() => {
//   console.log('promiseThen');
// });
 
// (async function () {
//   await null;
//   console.log('asyncAwait');
// })();
 
// console.log('end');

//start
// end
// nextTick
// queueMicrotask
// promiseThen
// asyncAwait
// setTimeout
// setImmediate