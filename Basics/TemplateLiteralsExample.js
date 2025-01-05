// Before ES6, you had to format strings like this:

'Hello, World!'
"Hello, World!"

// after ES6, you can use template literals:
//`Hello, World!`
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) //display both variables using template literals
// Hello World !

// you can also use template literals to embed expressions
//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) // 5 stars!

// this also allows strings to use multiple lines
let multiLine = `
    Hello,
    World
    !
`;

console.log(multiLine);

// another example
let firstPerson = `John`;
let secondPerson = `Jane`;

console.log(`As ${firstPerson} entered the room, he glared at ${secondPerson} as if he had seen a ghost.`); 