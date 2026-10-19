
const dataObj = [];
const form = document.getElementById("formVal");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const userName = document.getElementById("userName").value.trim();
    const userAge = Number(document.getElementById("userAge").value);
    const department = document.getElementById("department").value.trim();
    const salary = Number(document.getElementById("salary").value);
    if (userName === "" || document.getElementById("userAge").value === "" || department === "" || document.getElementById("salary").value === ""){
        alert("Please fill all fields");
        return;
    }
    if (userAge <= 17) {
        alert("Age must be above 18");
        return;
    }

    if (salary <= 0) {
        alert("Salary must be a positive number");
        return;
    }
    const newData = {
        id: dataObj.length + 1,
        name: userName,
        age: userAge,
        department: department,
        salary: salary
    };
    dataObj.push(newData);
    const tablePush = document.getElementById("table");
    let tableCon = "";
    dataObj.forEach((e) => {
        tableCon += `<tr>
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.age}</td>
                <td>${e.department}</td>
                <td>${e.salary}</td>
            </tr>`
    });
    tablePush.innerHTML = tableCon;
    form.reset();
});
