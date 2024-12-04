import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const [isLogged, setIsLogged] = useState(false);
    const cartItem = useSelector((store) => store.cart.items);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-gray-900 shadow-md flex items-center">
            <div className="container mx-auto flex justify-between items-center px-4">
               
                <Link to="/" className="flex items-center">
                    <img className="w-14 h-14" alt="logo" src="https://foodvilla.no/src/img/logo.png" />
                </Link>
                
                {/* Navigation Links */}
                <nav className="flex-grow">
                    <ul className="flex justify-center space-x-8 text-white text-lg font-medium">
                        <li>
                            <Link 
                                to="/" 
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/contact" 
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/cart" 
                                className="flex items-center hover:text-yellow-400 transition duration-300"
                            >
                                Cart
                                <span className="bg-yellow-500 text-gray-900 text-xs font-bold ml-2 px-2 py-1 rounded-full">
                                    {cartItem.length}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                
                {/* Authentication Button */}
                <div className="ml-4 flex items-center">
                    {isLogged ? (
                        <button
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                            onClick={() => setIsLogged(false)}
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                            onClick={() => setIsLogged(true)}
                        >
                            Log In
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
