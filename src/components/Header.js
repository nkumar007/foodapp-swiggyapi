import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul className="text-2xl font-serif text-blue-600">
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
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          className="bg-orange-200 text-black text-xl rounded-md p-2 h-[40%]"
          onClick={() => setIsLoggedIn(false)}
        >
          LogOut
        </button>
      ) : (
        <button
          className="bg-orange-200 text-black rounded-md p-2 h-[40%] text-xl"
          onClick={() => setIsLoggedIn(true)}
        >
          LogIn
        </button>
      )}
    </div>
  );
};

export default Header;
