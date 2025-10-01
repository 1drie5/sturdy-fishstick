// Common Higher Order Functions in JavaScript
// 1. map
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log('Squared:', squared); // [1, 4, 9, 16, 25]
// 2. filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers); // [2, 4]
// 3. reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum); // 15
// 4. forEach
numbers.forEach(num => console.log('Number:', num));
// 5. find
const firstEven = numbers.find(num => num % 2 === 0);
console.log('First Even Number:', firstEven); // 2
// 6. some
const hasEven = numbers.some(num => num % 2 === 0);
console.log('Has Even Number:', hasEven);
// 7. every
const allPositive = numbers.every(num => num > 0);
console.log('All Positive:', allPositive);
// 8. sort
const sortedDesc = [...numbers].sort((a, b) => b - a);
console.log('Sorted Descending:', sortedDesc); // [5, 4, 3, 2, 1]
// 9. flatMap
const nested = [[1, 2], [3, 4], [5]];
const flattened = nested.flatMap(arr => arr);
console.log('Flattened:', flattened);
// 10. slice
const firstThree = numbers.slice(0, 3);
console.log('First Three:', firstThree); // [1, 2, 3]
// 11. splice
const numsCopy = [...numbers];
numsCopy.splice(2, 1); // Remove one element at index 2
console.log('After Splice:', numsCopy); // [1, 2, 4, 5]
// 12. concat
const moreNumbers = [6, 7, 8];
const combined = numbers.concat(moreNumbers);
console.log('Combined:', combined); // [1, 2, 3, 4, 5, 6, 7, 8]
// 13. join
const joined = numbers.join('-');
console.log('Joined:', joined);
// 14. indexOf
const index = numbers.indexOf(3);
console.log('Index of 3:', index); // 2
// 15. lastIndexOf
const lastIndex = [1, 2, 3, 2, 1].lastIndexOf(2);
console.log('Last Index of 2:', lastIndex);
// 16. includes
const includesThree = numbers.includes(3);
console.log('Includes 3:', includesThree);
// 17. reverse
const reversed = [...numbers].reverse();
console.log('Reversed:', reversed); // [5, 4, 3, 2, 1]
// 18. fill
const filled = new Array(5).fill(0);
console.log('Filled:', filled); // [0, 0, 0, 0, 0]
// 19. Array.from
const str = 'hello';
const charArray = Array.from(str);
console.log('Char Array:', charArray); // ['h', 'e', 'l', 'l', 'o']
// 20. Object.keys
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
console.log('Keys:', keys); // ['a', 'b', 'c']
// 21. Object.values
const values = Object.values(obj);
console.log('Values:', values); // [1, 2, 3]
// 22. Object.entries
const entries = Object.entries(obj);
console.log('Entries:', entries); // [['a', 1], ['b', 2], ['c', 3]]
// 23. Object.assign
const obj2 = { d: 4, e: 5 };
const merged = Object.assign({}, obj, obj2);
console.log('Merged:', merged); // { a: 1, b: 2, c: 3, d: 4, e: 5 }
// 24. JSON.parse
const jsonString = '{"name":"John","age":30}';
const parsed = JSON.parse(jsonString);
console.log('Parsed:', parsed); // { name: 'John', age: 30 }
// 25. JSON.stringify
const jsonStringified = JSON.stringify(parsed);
console.log('Stringified:', jsonStringified); // '{"name":"John","age":30}'
// 26. setTimeout
setTimeout(() => console.log('Timeout after 1 second'), 1000);
// 27. setInterval
const intervalId = setInterval(() => console.log('Interval every 2 seconds'), 2000);
setTimeout(() => clearInterval(intervalId), 7000); // Stop after 7 seconds
// 28. Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise Resolved!'), 1500);
});
promise.then(result => console.log(result));
// 29. async/await
async function fetchData() {
    const data = await promise;
    console.log('Async/Await:', data);
}
fetchData();
// 30. fetch
fetch('https://jsonplaceholder.typicode.com/posts/1')

    .then(response => response.json())
    .then(data => console.log('Fetch:', data))
    .catch(error => console.error('Fetch Error:', error));
// 31. Date
const now = new Date();
console.log('Current Date:', now);
// 32. Math
const randomNum = Math.random();
console.log('Random Number:', randomNum);
// 33. String methods
const sampleStr = 'Hello, World!';
console.log('Uppercase:', sampleStr.toUpperCase());
console.log('Substring:', sampleStr.substring(0, 5)); // 'Hello'
console.log('Includes "World":', sampleStr.includes('World')); // true
// 34. Number methods
const num = 123.456;
console.log('Fixed:', num.toFixed(2)); // '123.46'
console.log('Parse Int:', parseInt('123abc')); // 123
console.log('Parse Float:', parseFloat('123.45abc')); // 123.45
// 35. Error handling
try {
    throw new Error('Something went wrong!');
}
catch (error) {
    console.error('Caught Error:', error.message);
}
// 36. RegExp
const regex = /hello/i;
console.log('Regex Test:', regex.test('Hello World')); // true
console.log('Regex Match:', 'Hello World'.match(regex)); // ['Hello']
// 37. Template Literals
const name = 'Keerti';
const greeting = `Hello, ${name}!`;
console.log('Greeting:', greeting); // 'Hello, Keerti!'
// 38. Destructuring
const person = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = person;
console.log('First Name:', firstName);
console.log('Last Name:', lastName);
// 39. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log('Combined Array:', combinedArr); // [1, 2, 3, 4, 5, 6]
// 40. Rest Parameters
function sumAll(...args) {
    return args.reduce((acc, num) => acc + num, 0);
}
console.log('Sum All:', sumAll(1, 2, 3, 4, 5)); // 15
// 41. Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
const dog = new Dog('Rex');
dog.speak(); // 'Rex barks.'
// 42. Modules (ES6)
// Note: This requires a module system or bundler to work properly.
// export function greet() {
//     console.log('Hello from module!');
// }
// import { greet } from './module.js';
// greet();
// 43. Symbols
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log('Symbols are unique:', sym1 === sym2);
// 44. WeakMap
const weakMap = new WeakMap();
const objKey = {};
weakMap.set(objKey, 'value associated with objKey');
console.log('WeakMap Get:', weakMap.get(objKey));
// 45. WeakSet
const weakSet = new WeakSet();
weakSet.add(objKey);
console.log('WeakSet Has objKey:', weakSet.has(objKey));
// 46. Map
const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log('Map Get a:', map.get('a')); // 1
console.log('Map Size:', map.size); // 2
// 47. Set
const set = new Set([1, 2, 3, 2, 1]);
console.log('Set Size (unique values):', set.size); // 3
console.log('Set Has 2:', set.has(2)); // true
// 48. Intl (Internationalization)
const numberFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
console.log('Formatted Number:', numberFormatter.format(123456.789));
const dateFormatter = new Intl.DateTimeFormat('en-GB');
console.log('Formatted Date:', dateFormatter.format(new Date()));
// 49. URL
const url = new URL('https://example.com/path?name=keerti&age=30');
console.log('URL Host:', url.host); // 'example.com'
console.log('URL Search Params:', url.searchParams.get('name')); // 'keerti'
// 50. Performance API
const start = performance.now();
for (let i = 0; i < 1000000; i++) { }
const end = performance.now();
console.log(`Loop took ${end - start} milliseconds`);
// These examples cover a wide range of commonly used JavaScript functions and methods, providing a solid foundation for understanding and utilizing JavaScript effectively.
// You can run this code in a JavaScript environment like a web browser console or Node.js to see the outputs.
// Save this file as jstut3.js and include it in your HTML file to see the results in the console.