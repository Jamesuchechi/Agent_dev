const name = "James";
let age = 30;

console.log("My name is " + name + " and I am " + age + " years old.");
console.log(`My name is ${name} and I am ${age} years old.`);

const price = 19.99;
const quantity = 3;

console.log(`Total cost: $${(price * quantity).toFixed(2)}`);

function greetUser(userName) {
    return `Hello, ${userName}! Welcome to our website.`;
}

console.log(greetUser(name));   