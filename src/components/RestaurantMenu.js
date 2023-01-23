import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Contants";
import Shimmer from "./Shimmer";
import star from "../assets/img/star.svg";
import useRestaurant from "./utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex gap-4 m-5 h-[60vh]">
      <div className="flex gap-4  items-center  text-xl font-medium text-white w-[80%] bg-[#171a29] hover hover:shadow-xl border   p-2">
        <div className="flex flex-col gap-3">
          <img
            src={IMG_CDN_URL + restaurant.cloudinaryImageId}
            alt=""
            className="object-cover"
          />
        </div>
        <div className="flex flex-col  gap-3 ">
          <h2 className="text-4xl text-white">{restaurant.name}</h2>
          <h3 className="bg-slate-200 p-2 rounded-md text-black">
            {restaurant.area}, {restaurant.city}
          </h3>
          <h3 className="bg-slate-200 p-2 rounded-md text-black flex justify-start items-center">
            <img src={star} alt="" className="w-[30px] h-[30px]" />
            {restaurant.avgRating} stars
          </h3>
          <h3 className="bg-slate-200 p-2 rounded-md text-black">
            {restaurant.costForTwoMsg}
          </h3>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center ">
        <h1 className=" text-3xl font-bold">Menu</h1>
        <div className="mt-2 flex flex-col gap-3 overflow-auto">
          {Object.values(restaurant?.menu?.items).map((item) => (
            <span
              key={item.id}
              className="text-black text-lg  font-medium  hover hover:text-[#fc8019] cursor-pointer"
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
