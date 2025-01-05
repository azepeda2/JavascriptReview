// the rest parameter is used to represent an indefinite number of arguments as an array
// it must be the last input parameter
// it is useful when you don't know how many arguments will be passed to the function
// it is also useful when you want to pass an array of values as arguments to a function
const top7 = [
    "The Colosseum",
    "The Great Wall of China",
    "The Taj Mahal",
    "Machu Picchu",
    "The Christ the Redeemer Statue",
    "The Vatican",
    "The Pyramids of Giza"
];

const [] = top7;

const [first, second, third, ...rest] = top7;

// another example
function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate * item);
}

let shoppingCart = addTaxToPrices(1.1, 12.00, 15.00, 20.00, 79.00);

console.log(shoppingCart); // [13.2, 16.5, 22, 86.9]

// more examples
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array ['apple', 'pear', 'plum', 'blueberry', 'strawberry']

// easy to join two objects
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

// add new members without using push
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies); // ['onion', 'parsley', 'carrot', 'beetroot']

// convert string into array
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// copy an array or object
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)


const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2); //['apples'] 'not' ['apples','pears']

