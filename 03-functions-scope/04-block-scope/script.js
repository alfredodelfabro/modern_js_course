const x = 100;
const foo = 1; // const is not add to window object
var bar = 2; // var is added to window object
console.log(window);

if (true) {
  const y = 200;
  console.log(x + y);
}

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

console.log(i); // works

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(a); // local scope
console.log(b); // local scope
console.log(c); // function scope

function run() {
  var d = 100;
  console.log(d);
}

run();

// console.log(d); // error, function scope

