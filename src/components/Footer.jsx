const Footer = () => {
  return (
    <>
      <div className="mt-8 w-full bg-black px-8 md:px-[500px] md:flex-row flex-col space-y-4 md:space-y-0 items-start flex justify-between text-md md:text-md py-8">
        <div className="flex flex-col text-white ">
          <p>Featired Blogs</p>
          <p>Most Viewed</p>
          <p>Reiders Choice</p>
        </div>
        <div className="flex flex-col text-white ">
          <p>Forum</p>
          <p>Suppport</p>
          <p>Recent Posts</p>
        </div>
        <div className="flex flex-col text-white ">
          <p>privacy Policy</p>
          <p>About Us</p>
          <p>Terms & Condtions</p>
          <p>Terms of Service</p>
        </div>
      </div>
      <p className="py-2 pb-2 text-center text-white bg-black">
        All rights reserved @Maaz's Blogosphere
      </p>
    </>
  );
};

export default Footer;
