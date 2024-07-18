import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [isLogged, setIsLogged] = useState(false);
    const { user } = useContext(UserContext);
    const cartItem = useSelector((store) => store.cart.items);
    console.log(cartItem);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white shadow-md p-4">
            <div className="flex justify-between items-center">
                <img className="w-20 h-20" alt="logo" src="https://foodvilla.no/src/img/logo.png" />
                <div className="nav-items">
                    <ul className="flex space-x-6">
                        <Link to={"/"} className="hover:text-yellow-400">
                            <li>Home</li>
                        </Link>
                        <Link to={"/about"} className="hover:text-yellow-400">
                            <li>About us</li>
                        </Link>
                        <Link to={"/contact"} className="hover:text-yellow-400">
                            <li>Contact</li>
                        </Link>
                        <Link to={"/instamart"} className="hover:text-yellow-400">
                            <li>Instamart</li>
                        </Link>
                        <Link to={"/cart"} className="hover:text-yellow-400">
                            <li>Cart-{cartItem.length}</li>
                        </Link>
                    </ul>
                </div>
                <span className="text-2xl font-semibold">{user.name}</span>
                {isLogged ? (
                    <button
                        className="px-4 py-2 bg-red-500 rounded hover:bg-red-700 transition duration-300"
                        onClick={() => setIsLogged(false)}
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        className="px-4 py-2 bg-red-500 rounded hover:bg-red-700 transition duration-300"
                        onClick={() => setIsLogged(true)}
                    >
                        LogIn
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
