import { IMG_URL } from "../config";

const RestrauntCard=({name,cloudinaryImageId,cuisines,costForTwo,avgRating})=>{
    return(
        <div className="card">
            <img className="restaurant-image" alt="restaurant" src={IMG_URL+cloudinaryImageId} />
            <div className="restaurant-info">
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{costForTwo}</h4>
                <h5>{avgRating} stars</h5>
            </div>
        </div>
    )
}
export default RestrauntCard;