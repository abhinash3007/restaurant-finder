import RestrauntCard from "./RestuarantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterDta } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredRestaurants, setFilteredRestaurant] = useState([]);
    const [allRestaurants, setAllRestaurant] = useState([]);
    const isOnline = useOnline();

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if (!isOnline) {
        return <h1 className="text-center text-red-600">No internet ....please check your internet connection and try again</h1>;
    }

    if (allRestaurants.length === 0) {
        return <Shimmer />;
    }

    if (!filteredRestaurants || filteredRestaurants.length === 0) {
        return <h1 className="text-center text-red-600">No results match your filter</h1>;
    }

    return (
        <>
            <div className="pt-20 h-auto text-center my-8 p-6 bg-gradient-to-r from-blue-200 via-gray-100 to-white">
                <h1 className="text-4xl font-extrabold text-blue-600 mb-6">Discover Your Favorite Restaurants</h1>
                <div className="flex flex-col md:flex-row justify-center items-center mb-8">
                    <input 
                        type="text" 
                        className="w-full md:w-1/2 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
                        placeholder="Search for restaurants..." 
                        value={searchInput} 
                        onChange={(e) => setSearchInput(e.target.value)} 
                    />
                    <button 
                        className="ml-4 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-lg"
                        onClick={() => {
                            const data = filterDta(searchInput, allRestaurants);
                            setFilteredRestaurant(data);
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <Link to={"/restuarant/" + restaurant.info.id} key={restaurant.info.id} className="m-4">
                            <RestrauntCard {...restaurant.info} />
                        </Link>
                    )
                })}
            </div>
        </>
    );
}

export default Body;
