// const value=()=>{

//     let salary=10000
//     const withdrawal=(incVal)=>{
//         salary-=incVal
//         console.log(salary);
//     }
//     return withdrawal
// }
// const newSalary=value()

// setInterval(() => {
//     newSalary(1000)
// }, 1000);


const addtoCart=()=>{
    const cartCon=[]
    const newProd=(prod)=>{
        cartCon.push(prod)
        console.log(cartCon);
        
    }
    return newProd

}
const newCart=addtoCart()
newCart("mobile")
newCart("laptop")
newCart("ear pods")
newCart("charger")




const value = () => {
    let salary = 10000;

    const withdrawal = (incVal) => {
        if (incVal > salary) {
            console.log("Insufficient salary!");
            return false;
        }

        salary -= incVal;
        console.log("Remaining salary:", salary);
        return true;
    };

    return withdrawal;
};

const newSalary = value();

const interval = setInterval(() => {
    const result = newSalary(1000);

    if (result === false) {
        clearInterval(interval);
        console.log("Deduction stopped!");
    }
}, 1000);


function checkResult(mark) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mark >= 35) {
                resolve("Student Passed");
            } else {
                reject("Student Failed");
            }
        }, 2000);
    });
}

checkResult(75)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

checkResult(20)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });