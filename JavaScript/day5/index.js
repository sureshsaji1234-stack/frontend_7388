let allLine="1 "
for(let a=2;a<=100;a++){
    allLine+=a+" "
}
console.log(allLine);


let reverseLine="100 "
for(let a=99;a>=1;a--){
    reverseLine+=a+" "
}
console.log(reverseLine);



let oddLine=" "
for(let a=1;a<=100;a++){
    if(a%2===1){
        oddLine+=a+" "
        
    }
        
}
console.log(oddLine);



let evenLine=" "
for(let a=1;a<=100;a++){
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
