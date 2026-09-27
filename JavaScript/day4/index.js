let userInput=100
console.log("amount",userInput)
let biscuitVal=10
let chocolatVal=20
let milkVal=30
let icecreamVal=40
if(userInput>=10){
    userInput-=biscuitVal
    console.log("biscuit is added")
    console.log("balance: ",userInput);
    

}
if(userInput>=20){
    userInput-=chocolatVal
    console.log("chocolate is added")
    console.log("balance: ",userInput);
}
if(userInput>=30){
    userInput-=milkVal
    console.log("milk is added")
    console.log("balance: ",userInput);
}
if(userInput>=40){
    userInput-=icecreamVal
    console.log("ice cream is added")
    console.log("balance: ",userInput);
}
else{
    console.log("Insufficient Balance");
    
}


let evenNumb=" "
let oddNumb=" "
console.log("20 to 1 printing:odd and even");
for(let a=20;a>0;a--){
    if (a%2==0) {
        evenNumb+=a+" "
    }
    else{
        oddNumb+=a+" "
    }
}
console.log("even numbers:",evenNumb);
console.log("odd numbers:",oddNumb);




console.log("Vote Eligibility");
var voterAge=20
console.log("Voter age: ",voterAge);

if (voterAge>=18) {
    console.log("Eligible to vote");
}
else{
    console.log("Not eligible to vote");
}
