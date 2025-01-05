// if, else statement

var result = 30;

if (result > 40) {
    console.log("You passed!");
} else {
    console.log("You failed!");
}

// if, else if, else statement
var place = "first";

if (place == "first") {
    console.log("You won the gold!");
} else if (place == "second") {
    console.log("You won the silver!");
} else if (place == "third") {
    console.log("You won the bronze!");
} else {
    console.log("No medal for you.");
}

// switch statement
var place = "first";

switch (place) {
    case "first":
        console.log("You won the gold!");
        break;
    case "second":
        console.log("You won the silver!");
        break;
    case "third":
        console.log("You won the bronze!");
        break;
    default:
        console.log("No medal for you.");
}

// another example 

if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The light is not green, orange, or red");
}

//converting the previous if-else example with switch-case
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
 }

 // are you old enough example

var age = 10;

if (age > 65) {
    console.log("You get income from your pension");
} else if (age < 65 && age >= 18) {
    console.log("You get a salary each month");
} else if (age < 18) {
    console.log("You get an allowance from your parents");
} else {
    console.log("Please enter a valid age");
}

// week day example

var day = "Sunday";

switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday")
        break;
    case "Thursday":
        console.log("Today is Thursday")
        break;
    case "Friday":
        console.log("Today is Friday")
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Please enter a valid day");
}