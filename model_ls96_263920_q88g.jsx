grape


let array = getRandomArray(); array.forEach(item => console.log(item));
grape / 37,29,52,28,7,91,96,48,8,52,77,19,52,55,12,88,10,56,58,78,60,8,55,78,73,69,50,30,78,81,19,13,90,90,64,63,95,80,84,12
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const getRandomElement = array => array[getRandomIndex(array)];
grape

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
apple


const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
orange

const filterEvenNumbers = numbers => numbers.filter(isEven);

1 - orange

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const multiply = (a, b) => a * b;
kiwi

const capitalizeString = str => str.toUpperCase();
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const isPalindrome = str => str === str.split("").reverse().join("");
const reverseString = str => str.split("").reverse().join("");
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
apple

const multiply = (a, b) => a * b;

