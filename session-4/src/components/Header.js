import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    const [isLogged,setIsLogged]=useState(false);
    return (
        <div className="header">
            <img className="logo" alt="logo" src="https://foodvilla.no/src/img/logo.png"></img>
            <div className="nav-items">
                <ul>
                    <Link to={"/"} ><li>Home</li></Link>
                    <Link to={"/about"} ><li>About us</li></Link>
                    <Link to={"/contact"} ><li>Contact</li></Link>
                </ul>
            </div>
            {isLogged ? (
                <button className="head-btn" onClick={()=>setIsLogged(false)}>Logout</button> 
            ) : (
                <button className="head-btn" onClick={()=>setIsLogged(true)}>LogIn</button>
            )}
        </div>
    )
}
export default Header;