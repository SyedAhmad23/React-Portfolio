import React from "react";
import Html from "../images/html.svg";
import Css from "../images/css.svg";
import Javascript from "../images/javascript.svg";
import Typescript from "../images/typescript.svg";
import Shadcn from "../images/shadcn.svg";
import Ant from "../images/ant-design.svg";
import Bootstrap from "../images/bootstrap.svg";
import ReactJs from "../images/react.svg";
import Tailwind from "../images/tailwindcss.svg";
import Next from "../images/nextjs.svg";

const Technologies = () => {
  const technologies = [
    { name: "Html", icon: Html },
    { name: "Css", icon: Css },
    { name: "TailwindCss", icon: Tailwind },
    { name: "Javascript", icon: Javascript },
    { name: "Typescript", icon: Typescript },
    { name: "Shadcn", icon: Shadcn },
    { name: "Ant Design", icon: Ant },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "React JS", icon: ReactJs },
    { name: "Next JS", icon: Next },
  ];
  return (
    <section
      className="max-w-[1040px] m-auto md:pl-20 py-16 p-4"
      id="technology"
    >
      <div className="grid items-center justify-center gap-10 md:gap-0 py-28">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
            Our Technologies
          </h1>
        </div>
        <div>
          <div
            className={`grid items-start grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5`}
          >
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="aspect-square p-5 cursor-pointer shadow-lg flex flex-col justify-center items-center gap-7 border border-solid border-blue-700 bg-[#16446A0A]/5 transition-transform duration-300 hover:scale-105"
              >
                <img src={tech.icon} alt={tech.name} className=" p-5" />
                <h3 className="text-center text-sm font-medium md:text-base md:font-semibold">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
