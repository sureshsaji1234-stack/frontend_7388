import logoS from '../assets/vite.svg'
const NavBar=()=>{
    return(<>
    {/* <div className="navbar">
     <div className="logo">
     <img src={logodata}/>
     </div> */}
     <div className="link">
        <img src={logoS}  />
      <div>
        <a href="">Home</a>  ||
        <a href="">About</a>  ||
        <a href="">Contact</a>  ||
        <a href="">Login</a>
      </div>
     </div>
    {/* </div> */}
    </>)
}
export default NavBar