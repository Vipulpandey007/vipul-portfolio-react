import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
const ProjectCard = ({ title, des, src, git, link }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg  flex flex-col shadow-2xl shadow-gray-600 dark:shadow-black dark:bg-gray-900">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <a href={link} target="_blank" rel="noreferrer">
          <img
            className="w-full h-60  hover:scale-110 duration-300 cursor-pointer object-contain"
            src={src}
            alt="src"
          />
        </a>
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {git && (
                <span className="text-lg w-10 h-10 rounded-full bg-white  dark:bg-black border border-red-500 inline-flex justify-center items-center text-black dark:text-white hover:scale-110 duration-300 cursor-pointer">
                  <a href={git} target="_blank" rel="noreferrer">
                    <BsGithub />
                  </a>
                </span>
              )}
              {link && (
                <span className="text-lg w-10 h-10 rounded-full bg-white  dark:bg-black border border-red-500 inline-flex justify-center items-center text-black dark:text-white hover:scale-110 duration-300 cursor-pointer">
                  <a href={link} target="_blank" rel="noreferrer">
                    <FaGlobe />
                  </a>
                </span>
              )}
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 text-black dark:text-white">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
