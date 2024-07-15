import { useEffect, useState } from "react"
import { IMG_URL } from "../config";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestuarants from "../utils/useRestuarant";

const RestuarantMenu = () => {
    const { id } = useParams();
    const restuarant=useRestuarants(id);
    if (!restuarant) {
        return <Shimmer />;
    }

    // Extract restaurant info and menu items
    const restaurantInfo = restuarant?.cards[2]?.card?.card?.info;
    const menuItems = restuarant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        .flatMap(group => group.card.card.itemCards || []);

    return (
        <>
            <div className="restaurant-details-container">
                <div className="restaurant-details">
                    <h1>Restaurant ID: {id}</h1>
                    <h2>{restaurantInfo?.name}</h2>
                    <p><strong>Rating:</strong> {restaurantInfo?.avgRatingString}</p>
                    <p><strong>Area:</strong> {restaurantInfo?.areaName}</p>
                    <p><strong>City:</strong> {restaurantInfo?.city}</p>
                    <p><strong>Cost for Two:</strong> {restaurantInfo?.costForTwoMessage}</p>
                    <p><strong>Cuisines:</strong> {restaurantInfo?.cuisines.join(", ")}</p>
                    {restaurantInfo?.cloudinaryImageId && <img src={`${IMG_URL}${restaurantInfo.cloudinaryImageId}`} alt={restaurantInfo?.name} className="restaurant-image" />}
                </div>

                <h2>Menu</h2>
                <div className="menu-items">
                    {menuItems?.map((item, index) => (
                        <div className="menu-item" key={index}>
                            <h3>{item.card.info.name}</h3>
                            <p>{item.card.info.description}</p>
                            <p><strong>Price:</strong> ₹{item.card.info.defaultPrice / 100}</p>
                            {item.card.info.imageId && <img src={`${IMG_URL}${item.card.info.imageId}`} alt={item.card.info.name} className="menu-item-image" />}
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}
export default RestuarantMenu;