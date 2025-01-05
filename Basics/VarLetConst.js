// you need to declare a let variable before using it
let user;
console.log(user);

/* this would throw an error
console.log(user);
let user;
*/

// you can reassign a let variable

user = "John";
console.log(user);

// when using a regular var variable, you can access it if it is eventually initialized somewhere in the code

console.log(temp); // this is okay

var temp = "temp";

// when using const, you must initialize it when you declare it

const name = "Alex";
console.log(name);

// we can't reassign a const variable

//name = "John"; // this would throw an error
