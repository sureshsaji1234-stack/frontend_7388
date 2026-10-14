let nameOf = "Arun";
let ageOf = 25;

console.log(`My name is ${nameOf} and I am ${ageOf} years old.`);

let price = 500;
let quantity = 4;

let total = price * quantity;

console.log(`Total Price =${total}`);

const greet = (name = "Someone") => {
    console.log(`Welcome ${name}`);
}

greet("Arun");
greet();

const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);

const student = {name: "Arun",age: 20,city: "Chennai"};

const { name,age,city} = student;

console.log(name);
console.log(age);
console.log(city);

const numbers = [10, 20, 30];

const newNumbers = [...numbers, 40, 50];

console.log(newNumbers);

const showNumbers = (...numbers) => {
    console.log(numbers);
}

showNumbers(10, 20, 30, 40);