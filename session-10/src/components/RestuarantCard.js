import { IMG_URL } from "../config";

const RestrauntCard = ({ name, cloudinaryImageId, cuisines, costForTwo, avgRating }) => {
    return (
        <div className="w-80 border border-gray-300 rounded-lg shadow-md m-4 p-4 bg-white transition-transform transform hover:scale-105">
            <img className="w-full h-48 object-cover rounded-lg" alt="restaurant" src={IMG_URL + cloudinaryImageId} />
            <div className="mt-4">
                <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
                <h3 className="text-gray-600 mt-1">{cuisines.join(", ")}</h3>
                <h4 className="text-gray-700 mt-2">Cost for two: {costForTwo}</h4>
                <h5 className="text-yellow-500 mt-1">{avgRating} ★</h5>
            </div>
        </div>
    );
}

export default RestrauntCard;
