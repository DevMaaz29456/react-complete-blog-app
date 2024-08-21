import { useContext } from "react";
import { Usercontext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";

const Menu = () => {
  const { user, setUser } = useContext(Usercontext); // Combine destructuring

  const handleLogout = async () => {
    // Fixed typo in function name
    try {
      const res = await axios.get(URL + "/api/auth/logout", {
        withCredentials: true,
      });
      console.log(res.data.message); // Log message from response data
      setUser(null); // Clear user context on logout
    } catch (error) {
      console.error("Logout failed: ", error); // Improved error logging
    }
  };

  return (
    <div className="bg-black w-[200px] flex flex-col items-start absolute top-11 right-6 md:right-32 rounded-md p-4 space-y-4">
      {!user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          Login
        </h3>
      )}
      {!user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          Register
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          Profile
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          Write
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          My Blogs
        </h3>
      )}
      {user && (
        <h3
          onClick={handleLogout} // Updated function name
          className="text-white text-sm hover:text-gray-500 cursor-pointer"
        >
          Logout
        </h3>
      )}
    </div>
  );
};

export default Menu;
