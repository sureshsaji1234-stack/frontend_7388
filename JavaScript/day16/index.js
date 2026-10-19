let dataObj = localStorage.getItem("employees");
if (dataObj == null) {
    dataObj = [];
}else{
    dataObj = JSON.parse(dataObj);
}
const form = document.getElementById("formVal");
displayData();
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = document.getElementById("userName").value
    const ageValue = document.getElementById("userAge").value
    const department = document.getElementById("department").value
    const salaryValue = document.getElementById("salary").value
    if (userName === "" || ageValue === "" || department === "" || salaryValue === "") {
        alert("Please fill all fields");
        return;
    }
    const userAge = Number(ageValue);
    const salary = Number(salaryValue);
    if (userAge <= 17) {
        alert("Age must be above 18");
        return;
    }
    if (salary <= 0) {
        alert("Salary must be a positive number");
        return;
    }
    const newData = {id: Date.now(),name: userName,age: userAge,department: department,salary: salary}
    dataObj.push(newData);
    localStorage.setItem("employees", JSON.stringify(dataObj));
    displayData();
    form.reset();
});
function displayData() {
    const tablePush = document.getElementById("table");
    let tableCon = "";
    dataObj.forEach((e, i) => {
        tableCon += `
            <tr>
                <td>${i + 1}</td>
                <td>${e.name}</td>
                <td>${e.age}</td>
                <td>${e.department}</td>
                <td>${e.salary}</td>
                <td>
                    <button onclick="deleteData(${e.id})">Delete</button>
                </td>
            </tr>
        `;
    });

    tablePush.innerHTML = tableCon;
}
function deleteData(id) {
    dataObj = dataObj.filter((e) => e.id !== id);
    localStorage.setItem("employees", JSON.stringify(dataObj));
    displayData();
}
