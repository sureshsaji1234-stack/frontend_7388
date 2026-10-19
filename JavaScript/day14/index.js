// let stuArr=["react","js","html","css"]
// let table=document.getElementById("table")
// let btn=document.getElementById("btn")
// btn.addEventListener('click',()=>{
//     table.innerHTML=""
//     stuArr.forEach((e,i)=>{
//         if (i%2==0) {
//             table.innerHTML+=`<tr>
//         <td>${i+1}</td>
//         <td>${e}</td>
//         </tr>`
//         }
        
//     })
//     btn.innerText="done"
// })

const dataObj=[]
const addData=document.getElementById("btn")
addData.addEventListener("click",(event)=>{
    event.preventDefault()
    let userName=document.getElementById("userName").value
    let userAge=document.getElementById("userAge").value
    if (userAge<18) {
        alert("Must be an adult")
        return
    }
    let newData={id:dataObj.length+1,name:userName,age:userAge}
    dataObj.push(newData)
    // console.log(dataObj);
    const tablePush=document.getElementById("table")
    let tableCon=""
    dataObj.forEach((e,i)=>{
        tableCon+=`<tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.age}</td>
        </tr>`
    })
    
    tablePush.innerHTML=tableCon



})


let a=10
let b=20
const swap=(a,b)=>{
    let c=a
    a=b
    b=c
    console.log(a,b);
    
}
swap(a,b)

