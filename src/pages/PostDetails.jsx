import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import image2 from "../assets/2.jpg"; // Adjust the path based on your file structure
import Comment from "../components/Comment";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            10 uses of AI
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@maazdev</p>
          <div className="flex space-x-2">
            <p>16/6/2024</p>
            <p>1:09</p>
          </div>
        </div>
        <img src={image2} alt="" className="w-full mx-auto mt-8 " />
        <p className="mx-auto mt-8">
          Artificial Intelligence (AI) is increasingly becoming an integral part
          of our daily routines, enhancing convenience, personalization, and
          security. From voice assistants like Siri and Alexa that streamline
          tasks with voice commands to personalized recommendations on platforms
          like Netflix and Spotify, AI tailors experiences to individual
          preferences. In smart homes, AI automates devices, creating
          environments that adapt to our needs. The impact of AI extends to
          healthcare, where it aids in disease diagnosis, treatment
          personalization, and managing patient data. AI is also crucial in
          online shopping, enabling better product recommendations and customer
          service through chatbots. In addition, it powers autonomous vehicles,
          making strides towards safer and more efficient transportation. AI's
          role in financial planning, language translation, and cybersecurity
          further underscores its importance, as it helps detect fraud, bridge
          language barriers, and protect sensitive information. AI is seamlessly
          integrating into our lives, making everyday tasks easier, smarter, and
          more secure.
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2 ">
            <div className="bg-gray-300 rounded-lg px-3 py-1 ">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1 ">AI</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
          {/* COMMETNS STARTS FROM HERE */}
          <Comment />
          <Comment />
          {/* COMMENTS */}
          <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-600 ">@Umar</h3>
              <div className="flex justify-center items-center space-x-4">
                <p className="text-gray-500 text-sm">12/4/2024</p>
                <p className="text-gray-500 text-sm">1:034</p>
                <div className="flex items-center justify-center space-x-2">
                  <p>
                    <BiEdit />
                  </p>
                  <p>
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
            <p className="px-4 mt-2">The Information is nice!</p>
          </div>
        </div>
        {/* WRITE A COOMENT */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input
            type="text"
            placeholder="Write a comment"
            className="md:w-[90%] outline-none px-4 mt-4 md:mt-0"
          />
          <button className="bg-black text-white text-sm px-4 py-2 md:w-[20%] rounded-lg md:mt-0">
            Add Comment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
