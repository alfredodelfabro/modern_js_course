const firstName = 'Alfredo';
const lastName = 'Neto';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
}

console.log(person.age);

// Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'Alfredo'
  }
}

const { 
  id: todoId,
  title,
  user: { name } 
} = todo;

console.log(todoId, title, name);

// Destructure arrays
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...nums] = numbers;

console.log(first, second, nums);