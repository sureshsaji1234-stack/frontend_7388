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

for(let a=100;a>0;a--){
    console.log(a)
}