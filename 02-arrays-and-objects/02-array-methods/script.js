let x;

const arr = [34, 55, 95, 20, 15];

// arr.push(100);

// arr.pop();

// arr.unshift(99);

// arr.shift();

// arr.reverse();

x = arr.includes(20);

x = arr.indexOf(15);

x = arr.slice(1);
x = arr.slice(1, 4); // [5, 95, 20]

// x = arr.splice(1, 4); // [34]

x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x);