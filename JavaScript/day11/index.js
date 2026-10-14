let numbers = [10, 15, 20, 25, 30, 35, 40];

const evenNumbers = numbers.filter((a) => {
    if (a % 2 == 0) {
        return true;
    }
});

console.log(evenNumbers);

let findNumbers = [10, 25, 35, 50, 60];

const firstNumber = findNumbers.find((a) => {
    return a > 30;
});

console.log(firstNumber);


let students = [{ id: 1, name: "Arun", mark: 75 },{ id: 2, name: "Priya", mark: 90 },{ id: 3, name: "Kumar", mark: 65 }];
const studentData = students.find((a) => {
    return a.id == 2;
});

console.log(studentData);


let prices = [100, 200, 300, 400];

const totalPrice = prices.reduce((a, b) => {
    return a + b;
}, 0);

console.log(totalPrice);




let marks = [75, 80, 35, 90, 65];

const belowForty = marks.some((a) => {
    return a < 40;
});

const aboveThirtyFive = marks.every((a) => {
    return a >= 35;
});

console.log(belowForty);
console.log(aboveThirtyFive);