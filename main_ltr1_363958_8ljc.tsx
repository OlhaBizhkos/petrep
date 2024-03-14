const randomNumber = getRandomNumber();
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const capitalizeString = str => str.toUpperCase();
false + true
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const deepClone = obj => JSON.parse(JSON.stringify(obj));
