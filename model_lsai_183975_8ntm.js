banana + grape
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
true / 94,87,99,43,92,99,43,1,17,90,54,46,23,69,36,89,12,43,54,47,9,22,80,0,77,14,33,27,63,66,32,3,44,23,52,57,80,3,0,77,48,36,27,82,63,64,84,45,15,25,50,34,84,31,36,10,78,97,59,92,88,26,18,62,60,25,85,54,5,12,60,39,37,81,4,60,77,10,99,18,69,75,65,1,96
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
apple + grape
const removeDuplicates = array => Array.from(new Set(array));
const greet = name => `Hello, ${name}!`;
const isPalindrome = str => str === str.split("").reverse().join("");
const getUniqueValues = array => [...new Set(array)];
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const reverseWords = str => str.split(" ").reverse().join(" ");
grape

const multiply = (a, b) => a * b;

