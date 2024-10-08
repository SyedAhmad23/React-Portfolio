import React from "react";
import Projectitem from "./Projectitem";
import PayonImg from "../images/payon.png";
import VeraImg from "../images/vera.png";
import ResetImg from "../images/reset.png";
import ImsImg from "../images/Ims.png";
const Projects = () => {
  return (
    <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-900">Projects</h1>
      <p className="text-center py-8">
        I am a passionate Front end developer with a strong background in
        building web applications and components. Here are some of my recent
        projects :
      </p>
      <div className="grid md:grid-cols-2 gap-12">
        <Projectitem
          img={ImsImg}
          title="Inventory Management System"
          previewUrl="https://github.com/send-2-irfan/inventory-management-system/tree/ahmad"
          gitUrl="https://github.com/send-2-irfan/inventory-management-system/tree/ahmad"
        />
        <Projectitem
          img={ResetImg}
          title="Reset Digital"
          previewUrl="https://reset-digital.vercel.app/"
          gitUrl="https://github.com/SyedAhmad23/reset-digital.git"
        />
        <Projectitem
          img={PayonImg}
          title="Payon"
          previewUrl="https://payon-client.vercel.app/stats"
          gitUrl="https://github.com/Zeeshan044/payon-client-frontend.git"
        />
        <Projectitem
          img={VeraImg}
          title="Vera"
          previewUrl="https://github.com/Zeeshan044/vera.git"
          gitUrl="https://github.com/Zeeshan044/vera.git"
        />
      </div>
    </div>
  );
};

export default Projects;
