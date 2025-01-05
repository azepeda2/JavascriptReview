console.log('Hello');

// Hello // undefined

function consoleLog(val) {
    console.log(val)
    return val
}

consoleLog('Hello') // prints Hello and returns Hello

function doubleIt(num) {
    return num * 2
}

function objectMaker(val) {
    return {
        prop: val
    }
}

objectMaker(20); // returns { prop: 20 }



doubleIt(10).toString() // returns '20'


objectMaker( doubleIt(100) ); // returns { prop: 200 }

