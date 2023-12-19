let x;

const person = {
  name: "Alfredo Neto",
  age: 32,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA'
  },
  hobbies: ['music', 'sports'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

person.name = 'Alfredo Del Fabro Neto';
person['isAdmin'] = false;

delete person.age;

person.hasChildren = true;

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`)
}

person.greet();

x = person;

console.log(x);