// This is the idea of creating objects that have their own properties and methods
// This is a way to organize code into reusable objects

var purchase1 = {
    shoePrice: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var total = this.shoePrice * this.stateTax; // by using this, we are guaranteing that we are using the correct property
        console.log("Total Price:", total);
    }
};

// in order to access an object's property, use dot notation
console.log(purchase1.shoePrice);
console.log(purchase1.stateTax);
console.log(purchase1.totalPrice());

// a functional way of doing this non object oriented

var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {
    return shoes * tax;
}

var total = totalPrice(shoes, stateTax);
console.log(total);

// it is better to create a class of objects that have their own properties and methods

class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive() {
        console.log("You are driving a", this.make, this.model);
    }

    turboOn() {
        console.log("Turbo is on");
    }   
};

var car1 = new Car("Ford", "Mustang", 2018, "Red");

// reading assignment

class Animal { /* ...class code here... */ }

var myDog = Object.create(Animal)

console.log (Animal)

class Animal { /* ...class code here... */ }

var myDog = new Animal()

console.log (Animal)

// inheritance
class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }

// encapsulation
"abc".toUpperCase();

// polymorphism
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

bicycle.bell(); // "Get away, please"
door.bell(); // "Come here, please"

function ringTheBell(thing) {
    console.log(thing.bell())
}

ringTheBell(bicycle); // Ring, ring! Watch out, please!
ringTheBell(door); // "Ring, ring! Come here, please!"

"abc".concat("def"); // 'abcdef'
["abc"] + ["def"]; // ["abcdef"]


// example of polymorphism
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"


