
const logNumbers = (i) => {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log('Number ' + i);
  }
}

for (let i = 1; i <= 100; i++) {
  logNumbers(i)
}