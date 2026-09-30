console.log("Fibonacci Series using while loop");

let sumOne=0
let sumTwo=1
let sumThree=0
let resultVal=1
let sumLine=sumOne+" + "+sumTwo+" + "
while (sumOne+sumTwo<=100) {
    sumThree=sumOne+sumTwo
    resultVal+=sumThree
    sumLine+=sumThree+" + "
    sumOne=sumTwo
    sumTwo=sumThree
}
console.log(sumLine+"="+resultVal);



console.log("Factorial");
let factVal=5
let totfactVal=1
for (let index = 1; index <=factVal; index++) {
    totfactVal*=index
    
}
console.log(totfactVal);



console.log("Fibonacci Series using for loop");

sumOne=0
sumTwo=1
sumThree=0
resultVal=1
sumLine=sumOne+" + "+sumTwo+" + "
for (let index = 0; index <10; index++) {
    sumThree=sumOne+sumTwo
    resultVal+=sumThree
    if (index===9) {
        sumLine+=sumThree+" = "
    } else {
        sumLine+=sumThree+" + "
    }
    sumOne=sumTwo
    sumTwo=sumThree
    
}

console.log(sumLine+resultVal);

let onetoFive=""
for (let a = 0; a <=50 ; a+=5) {
    onetoFive+=a+" "
}
console.log(onetoFive);

