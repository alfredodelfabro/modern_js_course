const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const sumOutput = x + y; 
const difOutput = x - y;
const prodOutput = x * y;
const quoOutput = x / y;
const rmOutput = x % y;

console.log(`${x} + ${y} = ${sumOutput}`);
console.log(`${x} - ${y} = ${difOutput}`);
console.log(`${x} * ${y} = ${prodOutput}`);
console.log(`${x} \ ${y} = ${quoOutput}`);
console.log(`${x} % ${y} = ${rmOutput}`);
