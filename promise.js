// A Promise in JavaScript is an object that represents the eventual completion (success) or failure of an asynchronous operation.

// A Promise has 3 states:

// Pending – Initial state.
// Fulfilled – Operation completed successfully.
// Rejected – Operation failed.


// Example 1: Simple Promise
// const promise = new Promise((resolve, reject) => {
//     let success = false;

//     if (success) {
//         resolve("Data loaded successfully!");
//     } else {
//         reject("Something went wrong!");
//     }
// });

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });




//     // Example 2: Promise with setTimeout()
// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data received after 3 seconds.");
//     }, 3000);
// });

// fetchData
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });





//     // Example 3: Function Returning a Promise
// function checkAge(age) {
//     return new Promise((resolve, reject) => {
//         if (age >= 18) {
//             resolve("You can vote.");
//         } else {
//             reject("You are not eligible to vote.");
//         }
//     });
// }

// checkAge(20)
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     });






//     // Example 4: Real-world Example 
// function orderFood() {
//     return new Promise((resolve, reject) => {
//         const restaurantOpen = true;

//         setTimeout(() => {
//             if (restaurantOpen) {
//                 resolve(" Your pizza is ready!");
//             } else {
//                 reject(" Restaurant is closed.");
//             }
//         }, 2000);
//     });
// }

// orderFood()
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     });





//     const promise = new Promise((resolve, reject) => {
//     // asynchronous work

//     if (success) {
//         resolve(result);   // Success
//     } else {
//         reject(error);     // Failure
//     }
// });

// promise
//     .then((result) => {
//         // Runs when resolved
//     })
//     .catch((error) => {
//         // Runs when rejected
//     })
//     .finally(() => {
//         // Runs whether resolved or rejected
//     });








async function name(){
    return ({message : "hello"})
}


console.log(await name())