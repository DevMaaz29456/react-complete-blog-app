import React, { useState, useContext } from "react"; // Import useContext
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import Menu from "./Menu";
import { Usercontext } from "../context/UserContext";

const Navbar = () => {
  const { user } = useContext(Usercontext); // Access context
  console.log(user);
  const [menu, SetMenu] = useState(false);

  const showMenu = () => {
    SetMenu(!menu);
  };

  return (
    <div className="flex items-center justify-between p-6 md:px-[220px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold">
        <Link to="/">Maaz's Blogosphere</Link>
      </h1>
      <div className="flex justify-center items-center space-x-0">
        <p>
          <FaSearch />
        </p>
        <input
          type="text"
          className="outline-none px-3 py-1"
          placeholder="search a post"
        />
      </div>
      <div className="hidden md:flex items-center justify-center space-x-4 md:space-x-4">
        {user ? (
          <h3>
            <Link to="write">Write</Link>
          </h3>
        ) : (
          <h3>
            <Link to="login">Login</Link>
          </h3>
        )}
        <h3>
          {user ? (
            <div onClick={showMenu}>
              <p className="cursor-pointer relative">
                <AiOutlineBars />
              </p>
              {menu && <Menu />}
            </div>
          ) : (
            <Link to="register">Register</Link>
          )}
        </h3>
      </div>
      <div onClick={showMenu} className="md:hidden text-lg">
        <p className="cursor-pointer relative">
          <AiOutlineBars />
        </p>
        {menu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
