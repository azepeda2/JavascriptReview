// JSON is used to store data in a format that is easy to read and write
// JSON stands for JavaScript Object Notation
// JSON is a string that can be converted into a JavaScript object

const jsonString = '{"greeting":"hello"}';

const aPlainObject = JSON.parse(jsonString); // returns an object

console.log(aPlainObject.greeting); // returns 'hello'
aPlainObject.greeting = 'hi';

console.log(aPlainObject.greeting); // returns 'hi'

const data = {
    firstName: 'John',
    lastName: 'Doe',
    greeting: 'hello'
};

console.log(JSON.stringify(data)); // returns a string