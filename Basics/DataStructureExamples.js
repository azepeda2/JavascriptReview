// need to think about how to extract the data from the file
// and then how to store it in a data structure
// Most common data structures are arrays and objects maps and sets

// print out index and vale of each element in an array
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

//  print out index and value of each element in an array
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

//  filter through an array
const nums1 = [0,10,20,30,40,50];
nums1.filter( function(num) {
    return num > 20;
});

// using map to create a new array
[0,10,20,30,40,50].map( function(num) {
    return num / 10
});

// [0,1,2,3,4,5]

// using an object to store data
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result) //['speed',100,'color','yellow']

// using maps
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers); //Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

bestBoxers.get(1); // gets a specific value from the map


// using sets
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits); // {'apple', 'pear', 'plum'}

// a way to pass in values into a function without typing them out is using spread
const nums = [1,2,3,4,5];
Math.max(...nums); // 5

// you can also pass in partial values of an array
Math.max(...nums[3]); // 4
