import { IMG_URL } from "../config";

const FoodItem = ({ name, imageId, description, price }) => {
    return (
        <div className="w-64 border border-gray-300 rounded-lg shadow-lg m-4 p-4 bg-pink-50">
            <img className="w-full h-46 object-cover rounded-t-lg" alt={name} src={IMG_URL + imageId} />
            <div className="mt-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-600">{description}</p>
                <h4 className="text-gray-800 mt-2">Price: {price / 100} INR</h4>
            </div>
        </div>
    );
};

export default FoodItem;
