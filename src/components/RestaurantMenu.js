import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../Contants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=13.4354985&lng=77.7315344&menuId=" +
        id
    );
    const json = await res.json();
    setRestaurant(json.data);
    console.log(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col m-5">
      <div className=" text-xl font-medium text-black w-[350px] h-[400px] container bg-orange-300 rounded-md p-2">
        <h2 className="text-3xl text-blue-900">{restaurant.name}</h2>
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          alt=""
          className="w-[100%] bg-cover"
        />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      <div>
        <h1 className=" text-blue-600 text-3xl font-bold ">Menu</h1>
        <ul className="mt-2 flex flex-col  justify-center items-start gap-3">
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li
              key={item.id}
              className="text-black text-xl font-serif font-medium bg-sky-300 p-2 rounded-lg"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
