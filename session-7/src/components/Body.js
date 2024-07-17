import RestrauntCard from "./RestuarantCard";
import { useState, useEffect, useContext } from "react";
import { restaurantList } from "../config";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterDta } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";


const Body = () => {
    const [searchInput, setSearchInput] = useState("");
    //const [restaurants, setRestaurant] = useState(restaurantList);
    // const [restaurants, setRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurant] = useState([]);
    const [allRestaurants, setAllRestaurant] = useState([]);
     const {user,setUser} = useContext(UserContext)
    useEffect(() => {
        getRestaurants();
    }, []);
    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setAllRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const isOnline = useOnline();
    if (!isOnline) {
        return <h1 className="text-center text-red-600">No internet ....please check your internet connection and try again</h1>
    }
    if (filteredRestaurants.length === 0) {
        return <h1 className="text-center text-red-600">No request matches your filter</h1>
    }

    return allRestaurants?.length === 0 ? (<Shimmer />) : (
        <>
            <div className="h-72 text-center my-8 p-2 bg-gray-200">
                <div className="text-6xl font-bold mb-5 text-blue-400 p-10"><h1>Looking for top Restauraunts near you?</h1></div>
                <div className="flex justify-center">
                    <input type="text" className="w-1/2 p-2 border-2 border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="search" value={searchInput} onChange={(e) => {
                        setSearchInput(e.target.value);
                    }}></input>
                    <button className="p-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition duration-300" onClick={() => {
                        const data = filterDta(searchInput, allRestaurants);
                        setFilteredRestaurant(data);
                    }}>Search</button>
                    <input
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        className="mt-4 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <input
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        className="mt-4 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <Link to={"/restuarant/" + restaurant.info.id} key={restaurant.info.id} className="m-4">
                            <RestrauntCard {...restaurant.info} />;
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default Body;