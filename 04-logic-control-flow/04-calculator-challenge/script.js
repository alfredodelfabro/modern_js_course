const calculator = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        result = 'Division by zero!'
      }
      else {
        result = num1 / num2;
      }
      break;
    default:
      result = `Operator ${operator} not supported!`
  }
  return result;
}

console.log(calculator(5, 2, '+'));
console.log(calculator(5, 2, '-'));
console.log(calculator(5, 2, '*'));
console.log(calculator(5, 2, '/'));
console.log(calculator(5, 0, '/'));
console.log(calculator(5, 2, '&'));