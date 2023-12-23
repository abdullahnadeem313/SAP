console.log("how to make asynchronous call synchronous in javascript");


// Using Promises
// You can wrap your asynchronous call inside a Promise 
// and then use the async/await syntax or .then() method to wait for the Promise to resolve. 

function asyncFunc(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Using Promises:");
            console.log("Data Received");
        }, 2000);
    })
}

async function syncFunc() {
    try {
        let result = await asyncFunc()
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

syncFunc()

// Using async/await
// The async/await syntax allows you to write asynchronous code in a synchronous style.
// You mark the surrounding function with the async keyword
// and then use the await keyword to wait for the Promise to resolve.

async function asyncronousFunc(){
  return  setTimeout(() => {
        console.log("Using async/await:");
        console.log("Data Received");        
    }, 3000);
}

function synchronousFunc() {
    asyncronousFunc()
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error);
        })
}

synchronousFunc()

// Using Callbacks
// You can use callbacks to achieve a synchronous-like behavior by passing a callback
// function to the asynchronous function and executing it when the operation completes.

function asynchronousFunction(callback) {
    setTimeout(() => {
        console.log("Using Callbacks:");
        callback("Data Received")
    }, 4000);
}

function synchronousFunction() {
    asynchronousFunction( (result)=>{
        console.log(result);
    } )
}
synchronousFunction();