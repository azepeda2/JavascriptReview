// a normal example of looping through an array
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color); // ['red','orange','yellow']
}

// a non working example of looping through an object
const car = {
    speed: 100,
    color: "blue"
}

// for(prop of car) {
//     console.log(prop) // Uncaught TypeError: car is not iterable
// }

// a valid example of looping through an object keys
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

// a valid example of looping through an object values
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

// a valid example of looping through an object entries
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); //[ ['speed', 400], ['color', 'magenta'] ]

/*
[
    [propertyKey, propertyVal],
    [propertyKey, propertyVal],
    ...etc
]
*/

// for-of loop must use an iterable such as arrays.
// a valid example of looping through an object entries
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

// another example 
function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();

  // an in depth example
const car5 = {
    engine: true,
    steering: true,
    speed: "slow",
}

const sportsCar = Object.create(car5);
sportsCar.speed = "fast";
console.log("The sportsCar object:", sportsCar);

console.log("----- for-in is unreliable -----");
console.log("iterates through object and its prototype");

for (prop in sportsCar) {
    console.log(prop); // engine, steering, speed
}

console.log("----- for-of is reliable -----");
console.log("Iterates through object's own properties only");
for (prop of Object.keys(sportsCar)) {
    console.log(prop); // engine, steering, speed
}   
