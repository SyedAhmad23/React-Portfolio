import { TypeAnimation } from "react-type-animation";
import React from "react";
import animation from "../images/hero.gif";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div
      id="main"
      className="bg-gray-900 min-h-screen flex items-center justify-center p-5 md:p-0"
    >
      <div className="grid md:grid-cols-2 gap-20 max-w-[1040px] w-full items-center justify-center">
        <div>
          <div className="max-w-[700px] h-full w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h1 className="sm:text-5xl text-4xl font-bold text-white">
              This is Syed Ahmad
            </h1>
            <h2 className="flex sm:text-3xl text-2xl pt-4 text-white">
              I am a
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Front End Developer",
                  2000,
                  "Front End Designer",
                  2000,
                ]}
                wrapper="div"
                speed={50}
                cursor={true}
                style={{ fontSize: "1em", paddingLeft: "5px" }}
                repeat={Infinity}
              />
            </h2>
            <div className="flex justify-between pt-6 max-w-[50px] w-full">
              <a href="https://github.com/SyedAhmad23?tab=repositories">
                <FaGithub className="cursor-pointer" size={20} color="white" />
              </a>
              <a href="https://www.linkedin.com/in/ahmad3236">
                <FaLinkedinIn
                  className="cursor-pointer"
                  size={20}
                  color="white"
                />
              </a>
            </div>
          </div>
        </div>
        <img src={animation} alt="" className="m-auto" />
      </div>
    </div>
  );
};

export default Main;
