// an example of doubly nested loop
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        console.log(i + " " + j);
    }
}

// an example of two weeks using nested loops

for (var week = 1; week <= 2; week++) {
    console.log("Week: " + week);
    for (var day = 1; day <= 5; day++) {
        console.log(" Day " + day);
    }
}

// a specific example of a nested loop, counting the summer months
for (var year = 2023; year < 2025; year++) {
    console.log(year);
    for (var month = 6; month < 9; month++) {
        console.log("--------", month)
    }
}

//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}

//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

// a cubes length example
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

// an example of olympic placement
for (var i = 1; i <= 10; i++) {
    if (i == 1) {
        console.log("Gold medal");
    } else if (i == 2) {
        console.log("Silver medal");
    } else if (i == 3) {
        console.log("Bronze medal");
    } else {
        console.log(i);
    }
}

// same example as above, but using a switch statement
for (var i = 1; i <= 10; i++) {
    switch (i) {
        case 1: 
            console.log("Gold medal");
            break;
        case 2:
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
            break;
        default:
            console.log(i);
    }
}