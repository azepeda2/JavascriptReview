// Task 1
var dairy = ["cheese", "sour cream", "milk", "yogurt", "ice cream", "milkshake"];
function logDairy() {
    for (items of dairy) {
        console.log(items);
    }
}

logDairy();

// Task 2
const animal = {
    canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

// for of will only show the properties of the object itself
function birdCan() {
    for (item of Object.keys(bird)) {
        console.log(`${item}: ${bird[item]}`);
    }
}

birdCan();

// Task 3

// for in will show the properties of the object and its prototype
function animalCan() {
    for (item in bird) {
        console.log(`${item}: ${bird[item]}`);
    }
}

animalCan();