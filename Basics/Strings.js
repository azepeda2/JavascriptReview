// both are examples of an empty string
''
""

// both normal strings

'hello there'
"hello there"

// i prefer double quotes so I can use single quotes for apostrophes

"hello there's someone at the door"

// backticks are used for template literals
'hello there\'s someone at the door'

// an example of a string
// strings are basically arrays of characters
var letters = "abc";

for (var i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}

// you can also store multiple strings in one array
var veggies = ["carrot", "potato", "onion"];

console.log(veggies.length);

console.log(veggies[0]);
console.log(veggies[1]);

for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}

// you can concatenate strings
var firstName = "John";
var lastName = "Doe";
console.log(firstName + lastName);    
console.log(firstName.concat(lastName));

/*
Here's a list of all the methods covered in this cheat sheet:

charAt() 

concat() 

indexOf() 

lastIndexOf() 

split() 

toUpperCase() 

toLowerCase()  
*/

var greet = "Hello, ";
var place = "World"

greet.length; // 7

greet.charAt(0); // 'H'

"Wo".concat("rl").concat("d"); // 'World'

"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2

"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "

