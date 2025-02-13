import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines,locality }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{locality} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
