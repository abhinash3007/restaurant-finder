import { useEffect, useState } from "react";
import { IMG_URL } from "../config";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestuarants from "../utils/useRestuarant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
const RestuarantMenu = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const restaurant = useRestuarants(id);
    if (!restaurant) {
        return <Shimmer />;
    }
   
    const foodItems=(item)=>{
        dispatch(addItems(item));
    }
    // Extract restaurant info and menu items
    const restaurantInfo = restaurant?.cards[2]?.card?.card?.info;
    const menuItems = restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        .flatMap(group => group.card.card.itemCards || []);

    return (
        <>
            <div className="bg-pink-200 p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-6 mb-6">
                <div className="mb-8 border border-e-black  p-2">
                    <h1 className="text-3xl font-bold mb-4">Restaurant ID: {id}</h1>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{restaurantInfo?.name}</h2>
                    <p className="text-gray-700"><strong>Rating:</strong> {restaurantInfo?.avgRatingString}</p>
                    <p className="text-gray-700"><strong>Area:</strong> {restaurantInfo?.areaName}</p>
                    <p className="text-gray-700"><strong>City:</strong> {restaurantInfo?.city}</p>
                    <p className="text-gray-700"><strong>Cost for Two:</strong> {restaurantInfo?.costForTwoMessage}</p>
                    <p className="text-gray-700"><strong>Cuisines:</strong> {restaurantInfo?.cuisines.join(", ")}</p>
                    {restaurantInfo?.cloudinaryImageId && (
                        <img src={`${IMG_URL}${restaurantInfo.cloudinaryImageId}`} alt={restaurantInfo?.name} className="w-full h-66 object-cover rounded-lg mt-4" />
                    )}
                </div>

                <h2 className="text-2xl font-bold mb-4">Menu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {menuItems?.map((item, index) => (
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md" key={index}>
                            <h3 className="text-xl font-semibold mb-2">{item.card.info.name}</h3>
                            <p className="text-gray-700 mb-2">{item.card.info.description}</p>
                            <p className="text-gray-900 font-bold mb-2">Price: ₹{(item.card?.info?.price || item.card?.info?.defaultPrice) / 100}</p>
                            <button className=" m-3 p-3 text-xl bg-pink-400 rounded-md hover:bg-slate-600" onClick={()=>foodItems(item)}>ADD</button>
                            {item.card.info.imageId && (
                                <img src={`${IMG_URL}${item.card.info.imageId}`} alt={item.card.info.name} className="w-full h-80 object-cover rounded-lg" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default RestuarantMenu;
