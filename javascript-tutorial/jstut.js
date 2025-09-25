console.log("Hello, World!");

// Primitive / Value types
// string, number, boolean, null, undefined, symbol (ES6)
// Javascript is a dynamically typed language
let x = "educosys";
console.log(x);
console.log(typeof x);

let y = 10;
console.log(y);
console.log(typeof y);

let z = 6.9
console.log(z);
console.log(typeof z);

let p = true;
console.log(p);
console.log(typeof p);

let q = null;
console.log(q);
console.log(typeof q);

let w;
console.log(w);
w = 9;
console.log(typeof w);

// Reference types
// object, array, function
// arrays and functions are special types of objects
let course = {
    title: "HHLD",
    description: "projects",
    rating:5
};
console.log(course.title); // dot notation
console.log(course['title']); // bracket notation

console.log(course);
console.log(typeof course);

// in javascript both length and type can be dynamic
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(typeof arr);

let courses = ['hld','lld','dsa', 69, true, null]
console.log(courses[2]);

// reference vs value types

// copy by value
let a = 'keerti';
let b = a;
console.log(a, b);
a = 20;
console.log(a, b);

// copy by reference
let obj1 = {name: 'keerti', age: 20};
let obj2 = obj1;
console.log(obj1, obj2);
obj1.age = 21;
console.log(obj1, obj2);

// explaining copy by value and copy by reference
// primitive types are stored in stack memory
// reference types are stored in heap memory
// stack memory is faster than heap memory
// when we copy a primitive type, a new copy is created in stack memory
// when we copy a reference type, a new reference is created in stack memory that points to the same object in heap memory
// hence, when we change the object using one reference, the change is reflected in the other reference as well
// to create a copy of an object, we can use Object.assign() or spread operator

// functions
// hoisting: hoisting in javascript is a mechanism where variable and function declarations are moved to the top of their containing scope during the compile phase
// function declarations are hoisted, function expressions are not hoisted
// hence, we can call a function before its declaration if it is a function declaration
// but we cannot call a function before its declaration if it is a function expression

// execution context: execution context is the environment in which a function is executed
// when a function is called, a new execution context is created and pushed onto the call stack
// when the function execution is completed, the execution context is popped from the call stack
// the execution context contains the variable object, scope chain and this value
// the variable object contains all the variables, functions and arguments defined in the function
// the scope chain is a list of all the variable objects that are accessible to the function
// the this value is a reference to the object that is executing the function

// javaScript is a synchronous single threaded language
// it has a call stack and a message queue
// the call stack is used to keep track of function calls

// Excution context
// 1. Memory creation phase - variables and functions are stored in memory
// 2. Code execution phase - code is executed line by line
createCourse('hld')

function createCourse(coursename) {
    console.log('creating... ' + coursename);
}

createCourse('lld')
console.log(abc);
var abc = 69;
console.log(abc);
console.log(this.abc) // this: global object (window in browsers, global in nodejs)
console.log(this.window) // window: global object in browsers
console.log(this.global) // global: global object in nodejs 
console.log(this === window) // true in browsers

// let, var, const
// var is function scoped
// let and const are block scoped
// var variables are hoisted and initialized with undefined
// let and const variables are hoisted but not initialized
// const variables cannot be reassigned
// use let and const instead of var

// temporal dead zone: the time between the creation of the variable and its initialization
// during this time, the variable cannot be accessed
// this is to prevent the use of variables before they are initialized
// this is applicable only for let and const variables
// var variables are initialized with undefined, so they can be accessed before initialization

// lexical scope: lexical scope is the scope of a variable defined by its position in the source code

/*function add(a,b){
    return a + b;
}*/// function declaration
let sum = function(a,b) {
    return a + b;
}// function expression
//console.log(add(2,3));
console.log(sum(4,5));
// in the above example, add is a function declaration and sum is a function expression
// both can be called using their names followed by parentheses

// functions are first class citizens in javascript
// functions can be assigned to variables
// functions can be passed as arguments to other functions
// functions can be returned from other functions
// functions can have properties and methods
let diff = function(a,b) {
    return a - b;
}   

function operate(operateFunction,a,b){
    return operateFunction(a,b);
}
console.log(operate(diff,78,9)); // 69
console.log(operate(sum,60,9)); // 69
// in the above example, operate is a higher order function that takes a function as an argument and returns the result of calling that function

// arrow function: arrow functions are a shorter syntax for writing functions
// arrow functions do not have their own this value
// arrow functions cannot be used as constructors
// arrow functions do not have arguments object
// arrow functions are always anonymous
let square = x => x * x;
console.log(square(8.3066238629180748525842627449075));

// inner functions and closures
// inner functions: functions defined inside another function

let num = 10;
function outer() {
    num = 69;
    function inner() {
        console.log(num);
    }
    return inner;
}

let returnedFuncVar = outer();
num = 20;
console.log(returnedFuncVar);
returnedFuncVar();
// in the above example, inner is an inner function that can access the variable num defined in its outer scope
// when outer is called, it returns the inner function
// the returned function is assigned to the variable returnedFuncVar
// when returnedFuncVar is called, it logs the value of num which is 20
// this is called closure: a closure is the combination of a function and the lexical environment within which that function was declared
// in the above example, inner is a closure that has access to the variable num defined in its outer scope even after outer has finished executing
// closures are used to create private variables and functions
// closures are used in callback functions and event handlers
// closures are used in functional programming


function outside() {
    let count = 0;
    function inside() {
        count++;
        console.log(count);
    }
    return inside;
}
let incrementCounter = outside();
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();