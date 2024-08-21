import React from "react";
import image1 from "../assets/1.jpg";

const ProfilePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left div */}
      <div className="w-[35%] flex h-[200px] justify-center items-center">
        <img
          src={image1}
          alt="AI usage"
          className="h-full w-full object-cover"
        />
      </div>

      {/* right div */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 mb:text-2xl">
          20 uses of AI in Day to Day life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@maazdev</p>
          <div className="flex space-x-2">
            <p>16/6/2024</p>
            <p>1:09</p>
          </div>
        </div>
        <p className="text-md ms:text-lg text-slate-600">
          AI enhances daily life by powering voice assistants, smart home
          devices, and personalized recommendations. It streamlines tasks like
          online shopping, healthcare predictions, financial planning, and even
          driving advancements in autonomous vehicles, making everyday
          activities more efficient and convenien
        </p>
      </div>
    </div>
  );
};

export default ProfilePosts;
