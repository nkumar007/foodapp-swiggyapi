import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

import { useState } from "react";
import { Link } from "react-router-dom";
import {} from "./utils/helper";
import useFetch from "./utils/useFetch";
import useOnline from "./utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { allRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useFetch();

  const isOnline = useOnline();

  if (!isOnline) {
    return <h3>Seems like you are offline!! Check your internet</h3>;
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center items-center gap-2 m-[20px]">
        <input
          type="text"
          className="rounded-sm p-2 outline outline-1 text-left"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-white text-lg font-semibold text-black rounded-md px-3 py-1 h-[40%]"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - FilteredRestaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list mt-4 mb-4">
        {filteredRestaurants?.length === 0 ? (
          <h3>Your search doesn't match.</h3>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurants/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
