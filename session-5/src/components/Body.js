import RestrauntCard from "./RestuarantCard";
import { useState ,useEffect} from "react";
import { restaurantList } from "../config";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterDta } from "../utils/helper";
import useOnline from "../utils/useOnline";


const Body = () => {
    const [searchInput, setSearchInput] = useState("");
    //const [restaurants, setRestaurant] = useState(restaurantList);
   // const [restaurants, setRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurant] = useState([]);
    const [allRestaurants, setAllRestaurant] = useState([]);
    useEffect(()=>{
        getRestaurants();
    },[]);
    async function getRestaurants(){
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        setAllRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const isOnline=useOnline();
    if(!isOnline){
        return <h1>No internet ....please check your internet connection and try again</h1>
    }
    if(filteredRestaurants.length===0){
        return <h1>No request matches your filter</h1>
    }

    return allRestaurants?.length===0 ? (<Shimmer/>): (
        <>
            <div className="search-container">
                <div className="text"><h1>Looking for top Restauraunts near you?</h1></div>
                <div>
                    <input type="text" className="search" placeholder="search" value={searchInput} onChange={(e) => {
                        setSearchInput(e.target.value);
                    }}></input>
                    <button className="search-btn" onClick={() => {
                        const data = filterDta(searchInput, allRestaurants);
                        setFilteredRestaurant(data);
                    }}>Search</button>
                </div>
            </div>
            <div className="restaurant-list">
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <Link to={"/restuarant/"+restaurant.info.id} key={restaurant.info.id}>
                    <RestrauntCard {...restaurant.info}  />;
                    </Link> 
                    )
                })}
            </div>
        </>
    )
}

export default Body;