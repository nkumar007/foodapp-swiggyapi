import { useState, useContext } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import userContext from "./utils/userContext";

const Title = () => (
  <a href="/">
    <img className="w-[100px] bg-transparent " alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const { user } = useContext(userContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex justify-between items-center mb-[10px] p-[10px] bg-slate-100  shadow-xl">
      <Title />

      <div className="nav-items">
        <ul className="text-2xl font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <h1 className="text-3xl text-black font-medium">{user.email}</h1>
      {isLoggedIn ? (
        <button
          className="bg-white text-black text-xl font-semibold rounded-md p-2 h-[40%]"
          onClick={() => setIsLoggedIn(false)}
        >
          LogOut
        </button>
      ) : (
        <button
          className="bg-white text-black rounded-md font-semibold p-2 h-[40%] text-xl "
          onClick={() => setIsLoggedIn(true)}
        >
          LogIn
        </button>
      )}
    </div>
  );
};

export default Header;
