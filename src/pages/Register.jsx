import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { URL } from "../url";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${URL}api/auth/register`, {
        username,
        email,
        password,
      });

      // Clear the input fields after successful registration
      setUsername("");
      setEmail("");
      setPassword("");

      // Navigate to login page on successful registration
      navigate("/login");
    } catch (error) {
      if (error.response) {
        // Handle known errors from the server
        setError(
          error.response.data.message || "An error occurred during registration"
        );
      } else {
        // Handle unexpected errors
        setError("Unexpected error occurred. Please try again later.");
      }
      console.error(
        "Registration Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <div className="flex items-center justify-between p-6 md:px-[220px] py-4">
        <h1 className="text-lg md:text-xl font-extrabold">
          <Link to="/">Maaz's Blogosphere</Link>
        </h1>
        <h3>
          <Link to="/login">Login</Link>
        </h3>
      </div>

      <div className="w-full flex justify-center items-center h-[80vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Create an account</h1>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="w-full px-4 py-2 outline-0 border border-gray-300 rounded-lg"
            placeholder="Enter your name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full px-4 py-2 outline-0 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full px-4 py-2 border outline-0 border-gray-300 rounded-lg"
            placeholder="Enter your password"
          />
          <button
            onClick={handleRegister}
            className="w-full px-4 py-3 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black"
          >
            Register
          </button>
          {error && <h3 className="text-red-500 text-sm">{error}</h3>}
          <div className="flex justify-center items-center space-x-3">
            <p>Already have an account?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
