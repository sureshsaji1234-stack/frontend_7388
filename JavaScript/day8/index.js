let array=[1,2,3,4,5,6,7,8,9,0]
let evenIndex=0
const evenProblem=(arrayTotal,arrayEven)=>{
    for (let a = 0; a < arrayTotal.length; a++) {
        if (arrayTotal[a]%2==0) {
            arrayEven[evenIndex]=arrayTotal[a]
            evenIndex++
        
        }
    }
    evenIndex=0
    return arrayEven

}
console.log(evenProblem(array,[]));
console.log(evenProblem([12,23,34,44,55,66,76,78],[]));
console.log(evenProblem([1,2,3,4],[]));



// let array=[1,2,3,4,5,6,7,8,9,0]
// arrayEven=[]
// let evenIndex=0
// const evenProblem=(arrayTotal)=>{
//     for (let a = 0; a < arrayTotal.length; a++) {
//         if (arrayTotal[a]%2==0) {
//             arrayEven[evenIndex]=arrayTotal[a]
//             evenIndex++
        
//         }
//     }
//     evenIndex=0
//     return arrayEven

// }
// // console.log(evenProblem(array));
// console.log(evenProblem([12,23,34,44,55,66,76,78]));
// console.log(evenProblem([1,2,3,4]));



let c=20
let d=10
const greNum=(a,b)=>{
    if (a>b) {
        return a
    } else {
        return b
    }
}
console.log(greNum(c,d));


let oddOne=21
const oddOreven=(a)=>{
    if(a%2==0){
        return "even"
    }
    else{
        return "odd"
    }
}
console.log(oddOreven(oddOne));
console.log(oddOreven(6));

