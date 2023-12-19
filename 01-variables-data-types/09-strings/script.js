
let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods
const s = 'Hello World';

x = s.length;

x = s[0] // first character

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('H');

x = s.substring(0,4);

x = s.substring(7); // start at 7

x = s.slice(0,5);
x = s.slice(-11, -6); // allow start from the end

x = '       Hello World';
x = x.trim();

x = s.replace('World', 'John');

x = s.includes('Hello');

x = new String("Hello World").valueOf(); // return primitive value of object

x = s.split(' ');
x = s.split(''); // split by each character

console.log(x);