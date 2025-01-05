// Constructors are essentaially functions that are used to create objects

function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}

let apple = new String("apple");
apple; // --> String {'apple'}

let pear = "pear";
pear; // --> "pear"

"abcd".match(/d/); // ['d', index: 3, input: 'abcd', groups: undefined]
"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]

// examples of built in constructors
new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();