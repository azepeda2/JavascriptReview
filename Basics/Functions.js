// an example of a function to list array items
function listArrayItems(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// usage of the above function
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

// a function that will match letters

function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log("---No match found at", i);
        }
    }
}

letterFinder("test", "t");

// objects can also have functions
var car = {};
car.color = "red"; //update the value of a property of the car object

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function() { 
  console.log('engine running'); 
}

// call the method turnkey
car.turnKey();

// sample usage
//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()