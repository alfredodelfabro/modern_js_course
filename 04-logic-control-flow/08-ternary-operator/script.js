const age = 19;

// Using an if statement
if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote!');
}

// Using a ternary operator
age >= 18 ? console.log('You can vote!') : console.log('You can not vote!');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;

console.log(canVote);

// Multiple statements

// long version
const auth = true;
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

// short version

const redirect = auth 
  ? (alert('Welcome to the dashboard'), '/dashboard') 
  : (alert('Access Denied'), '/login')


console.log(redirect);

// If you do not want use else in ternary operator
// auth ? console.log('Welcome to the Dashboard') : null;
// But remember &&
auth && console.log('Welcome to the dashboard');