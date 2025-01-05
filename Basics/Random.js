// how to use random in javascript
Math.random();

// Generate a random number between 0 and 0.99
Math.random();

// save it to a variable
var decimal = Math.random() * 10; // multiply it by 10 to get a regular number

console.log(decimal);

// round it up
var roundedUp = Math.ceil(decimal * 10);
console.log(roundedUp);

// round it down
var roundedDown = Math.floor(decimal * 10);
console.log(roundedDown);

// to round from 0 to n exclusive
var n = 10;
Math.random(n);

// to round to n inclusive
var n = 10;
Math.random(n + 1);

// a standard random number generator
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// inclusive generator
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }