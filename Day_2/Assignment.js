console.log("Assignment 1");

// Write a JavaScript function named fetchData that takes a callback function as an argument. 
// Simulate an asynchronous operation (e.g., setTimeout) within fetchData 
// and ensure the callback is executed once the operation is complete.

function fetchData(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}

//callback
fetchData(() => {
    console.log("Data fetched Successfully");
})


console.log("Assignment 2");
// Write a function createPromise that returns a Promise. 
// The Promise should resolve after a random time delay (between 1 to 5 seconds) 
// and should return a message like "Promise resolved after X seconds."

let min = 1000;
let max = 5000;
let randomNum = Math.floor(Math.random() * (max - min)) + min;



function createPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success");
            console.log(`Promise 1 resolved after ${randomNum/1000} seconds`);
        },randomNum );
    })
}

createPromise();



console.log("Assignment 3");
// Write a function rejectPromise that returns a Promise. 
// The Promise should reject after a random time delay (between 1 to 5 seconds) 
// with an error message like "Promise rejected after X seconds." 
// Handle the rejection using .catch() and log the error message.

function rejectPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`Promise 2 rejected after ${randomNum/1000} seconds`);
        },randomNum );
    })
}

let rejectedPromise = rejectPromise()
rejectedPromise.catch((err)=>{
    console.log(err);
})


console.log("Assignment 4");
// Convert the fetchData function from Question 1 to use async/await instead of callbacks. 
// Ensure it still behaves asynchronously 
// and logs the message after the simulated operation is complete.

function getData () {
    setTimeout(() => {
        console.log("Data fetch successful with Aync Await");
    }, 2000);
}
async function fetchDataAsync(){
    await getData()
}

fetchDataAsync()