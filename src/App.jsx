import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost"; // Ensure this import is correct
import EditPost from "./pages/EditPost";
import Profile from "./pages/Profile";
import { UserContextProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/write" element={<CreatePost />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </UserContextProvider>
  );
};

export default App;
