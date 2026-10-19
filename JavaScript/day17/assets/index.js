
const registerData = (event) => {
    event.preventDefault();
    const username = document.getElementById("username");
    const useremail = document.getElementById("useremail");
    const userpassword = document.getElementById("userpassword");
    const name = username.value
    const email = useremail.value
    const password = userpassword.value
    if (!name || !email || !password) {
        alert("Enter all details");
        return;
    }
    let datas = JSON.parse(localStorage.getItem("registers")) || [];
    const findData = datas.find((e) => e.email === email);
    if (findData) {
        alert("Email already registered");
        return;
    }
    const obj = {
        userid: Date.now(),
        name: name,
        email: email,
        password: password
    };
    datas.push(obj);
    localStorage.setItem("registers", JSON.stringify(datas));
    alert("Successfully Registered");
    username.value = "";
    useremail.value = "";
    userpassword.value = "";
    window.location.href = "loginPage.html";
};




const loginProcess = (event) => {
    event.preventDefault();
    const email = document.getElementById("useremail").value
    const password = document.getElementById("userpassword").value
    let datas = JSON.parse(localStorage.getItem("registers")) || []
    const findData = datas.find((e) => e.email === email)
    if (findData && findData.password === password) {
        localStorage.setItem("loggedUser", findData.userid);
        alert("Login Successful");
        window.location.href = "DashBoard.html";
    } else {
        alert("Invalid email or password");
    }
};
const dashboardProcess = () => {
    const loggedUser = localStorage.getItem("loggedUser");
    if (!loggedUser) {
        window.location.href = "loginPage.html";
        return;
    }
    const datas = JSON.parse(localStorage.getItem("registers")) || [];
    const findData = datas.find(
        (e) => String(e.userid) === loggedUser
    );
    if (!findData) {
        localStorage.removeItem("loggedUser");
        window.location.href = "loginPage.html";
        return;
    }
    document.getElementById("welcome").textContent =
        "Welcome, " + findData.name;
};


const logoutProcess = () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "loginPage.html";
};
