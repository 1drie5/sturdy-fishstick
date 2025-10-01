// Simulating an asynchronous operation using a callback function
// The fetchData function takes a callback that is executed after 5 seconds
// to simulate data fetching.
// The handleData function processes the fetched data or handles errors.
// In this example, after 5 seconds, "fetched data" will be logged to the console.
// If there was an error, it would log the error message instead.
// This demonstrates the use of callbacks to manage asynchronous operations in JavaScript.
// callback: a function passed as an argument to another function
// asynchronous: operations that occur independently of the main program flow
// error handling: managing errors that may occur during execution
// setTimeout: a function that executes a piece of code after a specified delay

// event queue: a list of events to be processed
// event loop: a mechanism that continuously checks the event queue and processes events
// non-blocking: allowing other operations to continue while waiting for an operation to complete
// concurrency: the ability to handle multiple operations simultaneously
// single-threaded: a programming model where only one operation can be executed at a time
// I/O operations: input/output operations, such as reading from a file or making a network request

function fetchData(callback){
   setTimeout(() => {
       let data = 'fetched data';
       callback(data, 'server error');
   }, 5000);
}

function handleData(data, error) {
    if(error) {
        console.error(error);
    } else {
        console.log(data);
    }
}

console.log("Fetching data...");
fetchData(handleData);

// Problems - Callback Hell / Pyramid of Doom
// Nested callbacks can lead to code that is hard to read and maintain
// Example of nested callbacks leading to "callback hell"

/*
asyncOpertion(arg1, (result1) => {
    asyncOperation2(result1, (result2) => {
        asyncOperation3(result2, (result3) => {
            // More nested callbacks
            // Nested callbacks can lead to "callback hell"
            asyncOperation4(result3, (result4) => {
                // And so on...
                console.log(result4);
            });
        });
   })
})
*/

// inversion of control: when the flow of control is inverted, such as when a callback is used
// maintainability: the ease with which code can be maintained and updated
// readability: how easy it is to read and understand code
// modularity: the degree to which a system's components can be separated and recombined
// separation of concerns: dividing a program into distinct sections, each addressing a separate concern

// Promises : a modern way to handle asynchronous operations in JavaScript
// A Promise represents a value that may be available now, in the future, or never
// It allows chaining of asynchronous operations and better error handling

// 3 states of a Promise
// 1. Pending: initial state, neither fulfilled nor rejected
// 2. Fulfilled: operation completed successfully
// 3. Rejected: operation failed

function GetData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const success = true; // Simulate success or failure
            if(success){
                resolve('fetched data');
            } else {
                reject('error occurred');
            }
        }, 5000);
    });
}
// Consuming the Promise using .then() and .catch()
// .then() is called when the Promise is fulfilled
// .catch() is called when the Promise is rejected
// This approach avoids nested callbacks and improves readability and maintainability
// It also provides a clear separation of concerns between the asynchronous operation and its handling

/*
GetData()
    .then(result =>{
        console.log(result);
    })
    .catch(error =>{
        console.error('Error:', error);
    });
*/
// Async/Await: syntactic sugar over Promises, making asynchronous code look and behave like synchronous code
// The async keyword is used to declare an asynchronous function
// The await keyword is used to wait for a Promise to resolve or reject
// This approach further improves readability and maintainability by reducing boilerplate code
// It also allows for easier error handling using try/catch blocks
async function fetchData(){
    try{
        const result = await GetData();
        console.log(result);
    } catch(error){
        console.error('Error:', error);
    }
}
fetchData();
