const TitleChange = document.title;
console.log(TitleChange);

const headerOne = document.getElementById("headone");
console.log(headerOne);

const parone = document.getElementById("para");
console.log(parone);

parone.innerHTML = "Introduction to DOM";

headerOne.innerText = "JS with DOM";

const NewValue = document.querySelector("#para");

NewValue.style.width = "200px";
NewValue.style.color = "red";
NewValue.style.backgroundColor = "white";



const headings = document.querySelectorAll(".heading");

headings[0].innerText = "HTML";
headings[1].innerText = "CSS";
headings[2].innerText = "JavaScript";
headings[3].innerText = "React";
headings[4].innerText = "Node.js";

headings[0].style.color = "red";
headings[1].style.color = "blue";
headings[2].style.color = "green";
headings[3].style.color = "yellow";
headings[4].style.color = "orange";
