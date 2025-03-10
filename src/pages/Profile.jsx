import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfilePosts from "../components/profilePosts";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start">
        {/* left div */}
        <div className="flex flex-col md:w-[70%] w-full mt-8 md:mt-0">
          <h1 className="text-xl font-bold mb-4">Your Posts</h1>
          <ProfilePosts />
          <ProfilePosts />
          <ProfilePosts />
          <ProfilePosts />
        </div>
        {/* right div */}
        <div className="md:sticky md:top-16 flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end">
          <div className="flex  flex-col space-y-4">
            <h1 className="text-xl font-bold mb-4">Profile</h1>
            <input
              type="text"
              className="outline-none px-4 py-2 text-gray-500"
              placeholder="Your username"
            />
            <input
              type="email"
              className="outline-none px-4 py-2 text-gray-500"
              placeholder="Your email"
            />
            <input
              type="password"
              className="outline-none px-4 py-2 text-gray-500"
              placeholder="Your password"
            />
            <div className="flex items-center space-x-4 mt-8">
              <button className="text-white rounded-lg font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">
                Update
              </button>
              <button className="text-white rounded-lg font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">
                Delate
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
