import { FaEye } from "react-icons/fa";
import { IoMdCodeDownload } from "react-icons/io";
import React from "react";

const Projectitem = ({ img, title, previewUrl, gitUrl }) => {
  return (
    <div className=" relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-500 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-gray-600">
      <img
        src={img}
        alt="/"
        className="rounded-xl group-hover:opacity-10 h-52"
      />

      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden rounded-xl group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
        <a
          href={gitUrl}
          className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
        >
          <IoMdCodeDownload className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
        </a>
        <a
          href={previewUrl}
          className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
        >
          <FaEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white hover:scale-105" />
        </a>
      </div>
    </div>
  );
};

export default Projectitem;
