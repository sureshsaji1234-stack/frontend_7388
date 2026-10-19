const buttonCng=document.getElementById("btn")
const dispCng=document.getElementById("division")
// buttonCng.style.display="block"
buttonCng.addEventListener("click",()=>{
    
    if (dispCng.style.display==="block" || buttonCng=="DO not Click") {
        dispCng.style.display="none"
        buttonCng.innerText="I said DOnt"
        
    } else {
        dispCng.style.display="block"
        buttonCng.innerText="please dont"
        
    }
    



})
const changebtn=document.getElementById("Convert")
changebtn.addEventListener("click",()=>{
    const theme=document.getElementById("disp")
    const paraCng=document.getElementById("para")
    const titleChange=document.getElementById("headone")
    if (theme.style.backgroundColor=="white") {
        
        theme.style.backgroundColor="black"
        paraCng.style.color="white"
        titleChange.style.color="white"
        changebtn.innerHTML="Light Mode"
        paraCng.innerHTML="texts are in dark themed mode"
        titleChange.innerHTML="Dark Mode"
    } else {
        theme.style.backgroundColor="white"
        paraCng.style.color="black"
        titleChange.style.color="black"
        changebtn.innerHTML="Dark Mode"
        paraCng.innerHTML="texts are in light themed mode"
        titleChange.innerHTML="Light Mode"
    }



})