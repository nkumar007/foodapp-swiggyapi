import { useContext } from "react";
import userContext from "./utils/userContext";

const Footer = () => {
  const { user } = useContext(userContext);

  return (
    <>
      <h4 className="flex justify-center items-center w-[100%] h-[20vh] text-xl  bg-black text-white ">
        Footer
      </h4>
      <h1>{user.name}</h1>
    </>
  );
};

export default Footer;
