import  RestrauntCard  from "./RestuarantCard";
import { useState } from "react";
import { restaurantList } from "../config";

function filterDta(searchInput,restaurants) {
    const filterData =  restaurants.filter((restaurant)=>
        restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filterData;
}
const Body = () => {
    const[searchInput,setSearchInput]=useState("");
    const[restaurants,setRestaurant]=useState(restaurantList);

    return (
        <>
        <div className="search-container">
            <input type="text" className="search" placeholder="search" value={searchInput} onChange={(e)=>{
                setSearchInput(e.target.value);
            }}></input>
            <button className="search-btn" onClick={()=>{
                const data=filterDta(searchInput,restaurants);
                setRestaurant(data);
            }}>Search</button>
        </div>
      <div className="restaurant-list">
      {restaurants.map((restaurant) => {
        return <RestrauntCard {...restaurant.info} key={restaurant.info.id} />;
      })}
    </div>
    </>
    )
}

export default Body;