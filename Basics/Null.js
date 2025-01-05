// undefined, empty string, null

var letters = "abc";

letters.match("d"); // null

// an example of an undefined value

//console.log(Jane Doe); // ReferenceError: Jane is not defined

// an example trying to access a property too early

var name;
console.log(name); // undefined

name = "Jane Doe";
// now it is defined and can be accessed
console.log(name); // Jane Doe

// you can prevent this by assigning a default value or empty string

var name = "";
var name = '';
var name = {};

// essentially objects will return undefined if not defined or assigned a value
// typically methods will return null if value not found or matched