let arr = [];

const btn = document.getElementById("btn");
const div1 = document.getElementById("div1");

btn.addEventListener("click", () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const opr = document.getElementById("operator").value;
    const tablecon=document.getElementById("tablecon")
    let data;

    if (opr == "+") {
        data = num1 + num2;
    }
    else if (opr == "-") {
        data = num1 - num2;
    }
    else if (opr == "*") {
        data = num1 * num2;
    }
    else if (opr == "/") {
        data = num1 / num2;
    }
    else {
        div1.innerHTML = "Provide a valid operator";
        return;
    }

    arr.push(data);

    div1.innerHTML = data;
    console.log(arr);

    let newTable=""
    arr.forEach((e,i)=>{
        newTable+=`<tr>
            <td>${i+1}</td>
            <td>${e}</td>
        
        </tr>`
    })
    tablecon.innerHTML=newTable
});