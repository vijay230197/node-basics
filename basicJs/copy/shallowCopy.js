const obj = {
    name: 'vijay',
    address: {
        location: 'vadodara',
        id: 1
    }
}

const newCopy = { ...obj };

newCopy.name = 'soam'
newCopy.address.location = 'mumbai'
newCopy.address.id = 2


// // const newCopyCopy = obj;
// // newCopyCopy.name = 'soam',
// //     newCopyCopy.address.location = 'mumbai'
// // newCopyCopy.address.id = 2

console.log(obj);
console.log(newCopy);
// console.log(newCopyCopy);


// Objects in JavaScript live in the heap.
// A variable (like obj) holds a reference (pointer) to that heap object.

//Shallow copy creates a new object in the heap.
// First-level properties (name, address) are copied:
// name is a primitive (string), so it’s copied by value.
// address is an object, so its reference is copied.



// newCopyCopy you’re not creating a copy.
// You’re just creating a new variable (newCopyCopy) that points to the same reference as obj.



//name is primitive + its not nested property so doesnt affect the name in shallow copy
//address is non primitve + its nested property id and location both affected the original copy and new copy
//both obj.address and newCopy.address point to same obj in heap
//name is copied in stack memory, thus independent





// const obj = { 
//     name: 'vijay',
//     greet() { 
//         console.log(this.name);
//     } 
// };
// const copy = { ...obj };

// copy.name = 'soam';

// obj.greet();
// copy.greet();


// Output:

// vijay
// soam







// const obj = { 
//     greet() { console.log("Hi"); } 
//   };

//   const copy = { ...obj };

//   obj.greet.description = "hello";

//   console.log(copy.greet.description);

//output
//hello

// greet is a function, and in JavaScript, functions are objects.
// When we do { ...obj } (spread operator), the function reference is copied, not cloned.
// So copy.greet points to the same function object as obj.greet.
// Adding a property (description) to the function object via obj.greet.description = "hello" also affects copy.greet, because it’s the same underlying object.
// ✅ Key takeaway: Shallow copy copies object references, so adding/modifying properties on nested objects or functions affects all references.




// const obj = { greet(){ console.log(this) } };
// const copy = { ...obj };
// copy.greet();
// Output:

// { greet: [Function: greet] }