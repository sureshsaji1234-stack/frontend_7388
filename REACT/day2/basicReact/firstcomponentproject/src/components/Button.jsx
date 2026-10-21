const Button=()=>{

    return (
        <>
            <div className="division">
                <button className="btn">this is the first button</button>
                <Newbutton/>
                <Loginbutton/>
            </div>
        </>
    )

}
export default Button

const Newbutton=()=>{

    return(<>
    <button className="btn">Anew Button</button>
    </>)
}


const  Loginbutton=()=>{

    return(
        <>
        <button className="btn"> Login Button </button>
        </>

    )
}