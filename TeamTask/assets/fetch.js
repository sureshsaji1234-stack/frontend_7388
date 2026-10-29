console.log("Task 3");

const fetchData=async()=>{
    const datas=await fetch("https://dummyjson.com/products")
    const change = await datas.json()
    const data = change.products
    const showdata = document.getElementById("tbody")

    let string = "";

    data.forEach((element) => {

        string += ` <tr>
        <td> ${element.id}</td>
        <td> ${element.title}</td>
        <td> ${element.price}</td>
        </tr>
        `
        
    });

    showdata.innerHTML = string



}
fetchData()

