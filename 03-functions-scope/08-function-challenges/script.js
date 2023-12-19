// Challenge 1
const getCelsius = temp => (temp - 32) * 5 / 9;

console.log(`The temperature is ${getCelsius(50)} \xB0C`);

// Challenge 2
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min,
    max
  };
}

console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3
(function (length, width) {
  console.log(`The area of a rectangle with a length of ${length} and a width of ${width} id ${length * width}`);
})(10, 20);

((length, width) => {
  console.log(`The area of a rectangle with a length of ${length} and a width of ${width} id ${length * width}`);
})(10, 20);