// basic example of an object

var user = {}; //create an object

// an example of a storemanager object

var storeManager = {};
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.specialAbility = "finding business opportunities";
storeManager.greeting = "Let's make some money!";

var assistantManager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40
};

// adding more properties using dot notation

storeManager.nextAchievement = "open a new store";
assistantManager.nextAchievement = "get promoted";


// a table example
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

console.log(table);//display the object in the developer console

// a house 
var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}

var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}

house.windows = 11;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}

// you can accesss the properties of an object using bracket notation
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

// another example of this
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

// you can add another property with bracket notation as well
car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 4}

// add another property
car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 4}

// another example of an object
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

// arrays are built using objects
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

// push adds an element while pop removes an element
fruits.pop();
console.log(fruits); // ['apple']

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}

arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']

// you could also return the object
function arrayBuilderReturn(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr); // ['apple','pear','plum']

// example assignment
var clothes = [];
clothes.push("shirt");
clothes.push("sweats");
clothes.push("shorts");
clothes.push("sweater");
clothes.push("sandals");

clothes.pop();
clothes.push("hat");

console.log(clothes[2]);

var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);