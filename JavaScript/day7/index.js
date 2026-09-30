let arr=[1,2,3,"react",true]
let copy=[]
// for (let a = 0; a < arr.length; a++) {
//     copy[arr.length-1-a]=arr[a]
// }
// console.log(arr);
// console.log(copy);
// copy[2]="add"
// console.log(arr);
// console.log(copy);


// console.log(arr);
// console.log(copy);
for(let a=0; a<=arr.length-1;a++){
    copy[arr.length-1-a]=arr[a]

}
console.log(arr);
console.log(copy);



let objarr=[{name:"john",age:20,skills:["html","JS"]},{name:"snow",age:22,skills:["Css","JS"]},{name:"stark",age:28,skills:["html","Css"]}]
for (let a = 0; a < objarr.length; a++) {
    console.log(objarr[a].name);
    console.log(objarr[a].age);
    for (let b = 0; b < objarr[a].skills.length; b++) {
        console.log(objarr[a].skills[b]);
        
        
    }
    
    
}
// let simpleLength=objarr[1].skills.length
// console.log(simpleLength);
// my mistake: objarr[1].skills(skills.length)


console.log("Total marks");
totArr=[40,50,60,66,70]
console.log(totArr);
mainTot=0
totVal=0

for (let a = 0; a < totArr.length; a++) {
    totVal+=totArr[a]
    mainTot+=100
    
}
console.log("total value: "+totVal+"/"+mainTot);



console.log("employee Salary");
let empData=[{name:"vinod",salary:25000,role:"Developer"},{name:"vidhya",salary:31000,role:"Developer"},{name:"vicky",salary:23000,role:"Developer"},{name:"vindhya",salary:27000,role:"Developer"},{name:"odin",salary:35000,role:"Developer"}]
// let empdataTwo=[]
// for (let a = 0; a < empData.length; a++) {
//     empdataTwo[a]=empData[a]
// }
// no matter what i do,the log statement only gives the finalized array .so i created a new arrayobject with same data
let empdataTwo=[{name:"vinod",salary:25000,role:"Developer"},{name:"vidhya",salary:31000,role:"Developer"},{name:"vicky",salary:23000,role:"Developer"},{name:"vindhya",salary:27000,role:"Developer"},{name:"odin",salary:35000,role:"Developer"}]
console.log(empdataTwo);
for (let a = 0; a < empData.length; a++) {
    if(empData[a].salary<30000){
        empData[a].salary=30000
    }
    
}
console.log("wow");

console.log(empData);
console.log("why");
