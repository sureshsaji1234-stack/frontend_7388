// const arrayRender=(event)=>{

// }



const evenNumber = (...arr) => {
    // const arrNew = arr.filter((e) => e % 2 === 0);
    i=0
    const arrNew=arr.filter((e)=>e%2==0)
    console.log(arrNew);
};

evenNumber(1, 2, 3, 4);


const obj={user:"Teamfive",email:"team@gmail.com",password:"team1to5"}
const login=(event)=>{
    event.preventDefault()
    const user=document.getElementById("email").value
    const password=document.getElementById("password").value
    if (obj.email==user && password==obj.password) {
        window.location.href="dashboard.html"
    } else {
        alert("invalid")
    }

}


let arr=[1,2,3,4,5,6,7]
let newArr=[]
for (let index = 0; index < arr.length; index++) {
    newArr[index]=arr[index]*2
}

console.log(newArr);

