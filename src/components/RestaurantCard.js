import { IMG_CDN_URL } from "../Contants";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  costForTwoString,
  deliveryTime,
}) => {
  return (
    <div
      className="hover hover:shadow-xl  rounded-md
     flex flex-col gap-2 
     cursor-pointer  w-[350px] h-[400px] p-[30px] m-[10px]"
    >
      <img src={IMG_CDN_URL + cloudinaryImageId} className="object-cover" />
      <h2 className="text-xl text-black font-semibold">{name}</h2>
      <h3 className="text-md text-black font-normal">{cuisines?.join(", ")}</h3>
      <h3 className="text-md text-black font-normal">{deliveryTime} minutes</h3>
      <h4 className="text-md text-black font-normal">{costForTwoString}</h4>
    </div>
  );
};

export default RestrauntCard;
