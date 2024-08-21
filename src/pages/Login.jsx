import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import axios from "axios";
import { URL } from "../url";
import { Usercontext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(Usercontext); // Corrected context usage
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(URL + "api/auth/login", { email, password });
      console.log("login successful");
      setUser(res.data); // Corrected usage
      navigate("/");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between p-6 md:px-[220px] py-4">
        <h1 className="text-lg md:text-xl font-extrabold">
          <Link to="/">Maaz's Blogosphere</Link>
        </h1>
        <h3>
          <Link to="/register">Register</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Login to your account</h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="w-full px-4 py-2 outline-0 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full px-4 py-2 border outline-0 border-gray-300 rounded-lg"
            placeholder="Enter your password"
          />
          <button
            onClick={handleLogin}
            className="w-full px-4 py-3 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black"
          >
            Login
          </button>
          {error && <h3 className="text-red-500 text-sm">{error}</h3>}

          <div className="flex justify-center items-center space-x-3">
            <p>New Here</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
