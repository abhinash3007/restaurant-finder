import { useState } from "react";

const isLoggedIn=()=>{
    return false;
}
const Header = () => {
    const [isLogged,setIsLogged]=useState(false);
    return (
        <div className="header">
            <img className="logo" alt="logo" src="https://foodvilla.no/src/img/logo.png"></img>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
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