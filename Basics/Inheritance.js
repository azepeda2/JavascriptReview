// this is called prototypal inheritance
// it is better to use classes though
var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
};

var eagle = Object.create(bird);
console.log("eagle: ", eagle);

console.log("eagle.hasWings: ", eagle.hasWings);
console.log("eagle.canFly: ", eagle.canFly);
console.log("eagle.hasFeathers: ", eagle.hasFeathers);

var eagle2 = Object.create(bird);
console.log("eagle2.hasWings: ", eagle2.hasWings);

var pengiun = Object.create(bird);
pengiun.canFly = false;
console.log("pengiun: ", pengiun);
console.log("pengiun.canFly: ", pengiun.canFly);
console.log("pengiun.hasWings: ", pengiun.hasWings);