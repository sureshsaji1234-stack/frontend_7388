let allLine="1 "
for(let a=2;a<=10;a++){
    allLine+=a+" "
}
console.log(allLine);


let reverseLine="20 "
for(let a=19;a>=1;a--){
    reverseLine+=a+" "
}
console.log(reverseLine);



let oddLine=" "
for(let a=1;a<=10;a++){
    if(a%2===1){
        oddLine+=a+" "
        
    }
        
}
console.log(oddLine);



let evenLine=" "
for(let a=1;a<=10;a++){
    if(a%2===0){
        evenLine+=a+" "
    }
        
}
console.log(evenLine);



let countPrime=200
let primeLine=" "
let count=0
for(let i=2;i<=countPrime;i++){
    for(let j=2;j<=i-1;j++){
        if(j!==i && i%j!==0){
            count+=0
        }
        else if(j!==i && i%j===0){
            count+=1
        }
    }
    if(count==0){
        primeLine+=i+" "
    }
    count=0
}
console.log(primeLine);


console.log("Calculator");
let oponeVal=20
let optwoVal=10
console.log("value 1: ",oponeVal);
console.log("value 2: ",optwoVal);
console.log("Addition: ",oponeVal+optwoVal)
let opthreeVal=oponeVal-optwoVal
console.log("Subtraction: ",opthreeVal);
opmulVal=oponeVal*optwoVal
console.log("Multiplication: ",opmulVal);
opdivVal=oponeVal/optwoVal
console.log("Division: ",opdivVal);
oponeVal**=optwoVal
console.log("Exponential: ",oponeVal);


console.log("Largest of two numbers");
let valAa=20
let valBb=40
if (valAa>valBb) {
    console.log(valAa," is Larger");
}
else if (valAa===valBb) {
    console.log("Both ",valAa,"and",valBb," are equal");
}
else{
    console.log(valBb+" is Larger");
}


console.log("Multiplication Table");
let tablesVal=5
for (let index = 1; index <=10; index++) {
    console.log(tablesVal+"x"+index+"="+(tablesVal*index));
    
}

console.log("Sum of 1 to 10:");
let numbString=" "
let sumofVal=0
for (let index = 1; index <= 10; index++) {
    sumofVal+=index
    if (index<10) {
        numbString+=index+"+"
    }
    else{
        numbString+=index+"="
    }
}
console.log(numbString+sumofVal);


