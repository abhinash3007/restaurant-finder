import { IMG_URL } from "../config";
import { useParams } from "react-router-dom";
import Shimmer2 from "./Shimmer2";
import useRestuarants from "../utils/useRestuarant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const RestuarantMenu = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const restaurant = useRestuarants(id);
    if (!restaurant) {
        return <Shimmer2 />;
    }

    const foodItems = (item) => {
        dispatch(addItems(item));
    }

    const restaurantInfo = restaurant?.cards[2]?.card?.card?.info;
    const menuItems = restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        .flatMap(group => group.card.card.itemCards || []);

    return (
        <div className="bg-gray-100 p-6 mt-20 rounded-lg shadow-lg max-w-6xl mx-auto">
            <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-extrabold text-blue-600 mb-4">Restaurant ID: {id}</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{restaurantInfo?.name}</h2>
                <p className="text-gray-600"><strong>Rating:</strong> {restaurantInfo?.avgRatingString}</p>
                <p className="text-gray-600"><strong>Area:</strong> {restaurantInfo?.areaName}</p>
                <p className="text-gray-600"><strong>City:</strong> {restaurantInfo?.city}</p>
                <p className="text-gray-600"><strong>Cost for Two:</strong> {restaurantInfo?.costForTwoMessage}</p>
                <p className="text-gray-600"><strong>Cuisines:</strong> {restaurantInfo?.cuisines.join(", ")}</p>
                {restaurantInfo?.cloudinaryImageId && (
                    <img src={`${IMG_URL}${restaurantInfo.cloudinaryImageId}`} alt={restaurantInfo?.name} className="w-full h-72 object-cover rounded-lg mt-4" />
                )}
            </div>

            <h2 className="text-3xl font-extrabold text-blue-600 mb-6">Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems?.map((item, index) => (
                    <div className="bg-white p-6 rounded-lg shadow-lg" key={index}>
                        <h3 className="text-xl font-semibold mb-2">{item.card.info.name}</h3>
                        <p className="text-gray-700 mb-2">{item.card.info.description}</p>
                        <p className="text-gray-900 font-bold mb-2">Price: ₹{(item.card?.info?.price || item.card?.info?.defaultPrice) / 100}</p>
                        <button className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-900 transition duration-300" onClick={() => foodItems(item)}>Add to Cart</button>
                        {item.card.info.imageId && (
                            <img src={`${IMG_URL}${item.card.info.imageId}`} alt={item.card.info.name} className="w-full h-48 object-cover rounded-lg mt-4" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestuarantMenu;
