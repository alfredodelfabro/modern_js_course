const myString = 'developer';

const myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);

const myNewString2 = `${myString.charAt(0).toUpperCase()}${myString.slice(1)}`

console.log(myNewString2);