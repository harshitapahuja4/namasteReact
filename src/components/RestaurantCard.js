import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const resData = props.resData;
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = resData.info;
    return(
      <div className='res-card'>
          <img src={CDN_URL+cloudinaryImageId}
          alt='res-image' style={{width:'100%'}}></img>
          <h2>{name}</h2>
          <h3>{cuisines.join(",")}</h3>
          <h3>{`${avgRating} ⭐`}</h3>
          <h3>{costForTwo}</h3>
          <h3>{`ETA: ${sla.deliveryTime} mins`}</h3>
      </div>
    )
  }

  export default RestaurantCard;