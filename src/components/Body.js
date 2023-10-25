import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [ listOfRestaurant, setListOfRestaurant] = useState(resObj);

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filterList = listOfRestaurant.filter((res) => res.info.avgRating> 4.5);
            setListOfRestaurant(filterList);
          }}
          className="filter-btn"
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="search">
        <h2>Search</h2>
        <div className="res-container">
          {listOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
