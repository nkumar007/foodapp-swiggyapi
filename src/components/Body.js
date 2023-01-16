import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetcher();
  }, []);

  async function fetcher() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    setAllRestaurants(json.data.cards[2].data.data.cards);
    setFilteredRestaurants(json.data.cards[2].data.data.cards);
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <div className="flex justify-center items-center h-[80vh]">
      <Shimmer />
    </div>
  ) : (
    <>
      <div className="flex justify-center items-center gap-2">
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
          className="bg-orange-200 text-black rounded-md p-2 h-[40%]"
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
