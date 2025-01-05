// a normal error try catch block
try {
    var b = 10;
    a + b
} catch (error) {
    console.log(error);    
}

console.log("Code should have reached this point");

// you can also throw an error manually
try {
    var b = 10;
    
    throw new ReferenceError('a is not defined');

} catch (error) {
    console.log(error);    
}

// try catch block allow so that the program can keep running even if there is an error

// example assignment
function addTwoNums(a, b) {
    try {
        if (typeof(a) != 'number') {
            throw new ReferenceError("the first argument is not a number");
        } else if (typeof(b) != 'number') {
            throw new ReferenceError("the second argument is not a number");
        } else {
            console.log(a + b);
        }
    } catch (err) {
        console.log("Error!", err);
    }

}

addTwoNums(5, "5");
console.log("It still works");