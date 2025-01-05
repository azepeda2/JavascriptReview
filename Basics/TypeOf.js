// using typeof

var test = typeof("what is this");
console.log(test);

test = typeof(123);
console.log(test);

test = typeof(0.50);
console.log(test);

test = typeof(true);
console.log(test);

test = typeof(false);
console.log(test);

test = typeof(1 < 2);
console.log(test);

test = typeof([1,2,3]);
console.log(test);

test = typeof({a:1, b:2, c:3});
console.log(test);

test = typeof(function(){});
console.log(test);