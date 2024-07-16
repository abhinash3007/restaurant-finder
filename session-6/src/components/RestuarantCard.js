import { IMG_URL } from "../config";

const RestrauntCard = ({ name, cloudinaryImageId, cuisines, costForTwo, avgRating }) => {
    return (
        <div className="w-64 border border-gray-300 rounded-lg shadow-lg m-4 p-4 bg-white">
            <img className="w-full h-46 object-cover rounded-t-lg" alt="restaurant" src={IMG_URL + cloudinaryImageId} />
            <div className="mt-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <h3 className="text-gray-600">{cuisines.join(", ")}</h3>
                <h4 className="text-gray-800 mt-2">Cost for two: {costForTwo}</h4>
                <h5 className="text-yellow-500 mt-1">{avgRating} stars</h5>
            </div>
        </div>
    )
}
export default RestrauntCard;
