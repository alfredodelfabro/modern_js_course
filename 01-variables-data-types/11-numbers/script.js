let x;

const num = new Number(5);

x = num.toString();

x = num.toString().length;

x = num.toFixed(2); // 5.00 (string type result)

x = num.toPrecision(2); // 5.0 
x = num.toPrecision(3); // 5.00

x = num.toExponential(2);

x = num.toLocaleString('pt-BR');

x = num.valueOf();

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);