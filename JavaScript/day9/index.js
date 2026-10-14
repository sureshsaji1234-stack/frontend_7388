function comm() {
    return 10;
}

function codd() {
    return 15;
}

function valu(cd, ef) {
    console.log(cd() + ef());
}

valu(comm, codd);


let company = "ABC Technologies";

const showEmployee = () => {
    let employee = "Arun";

    console.log(company);
    console.log(employee);
}

showEmployee();

console.log(company);
// console.log(employee); // Error

if (true) {
    let age = 25;
    const city = "Chennai";

    console.log(age);
    console.log(city);
}

// console.log(age);  Error
// console.log(city); Error
//let and const are created on Es6 ,which means that they cannot be accessed outside the block


const add = (a, b) => {
    console.log(a + b);
}

const sub = (a, b) => {
    console.log(a - b);
}

const calculator = (a, b, operation) => {
    operation(a, b);
}

calculator(20, 10, add);
calculator(20, 10, sub);