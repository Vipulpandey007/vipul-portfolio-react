import React from "react";
import ProjectCard from "./ProjectCard";
import Title from "./Title";
import tubevipul from "../Images/vipultube.png";
import streamvideo from "../Images/stream-video.png";
import gcran from "../Images/gcran.png";
import food from "../Images/swiggy.png";

const Project = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="Video Streaming App"
          des=" Highly efficient and high performance based video streaming react app just like youtube with all the features.
          You can stream high quality videos."
          src={tubevipul}
          link="https://vipulpandey007.github.io/youtubevipul/"
          git="https://github.com/Vipulpandey007/youtubevipul"
        />
        <ProjectCard
          title="Movie trailer streaming app"
          des=" Large scalable movie trailer streaming react app ui made just like Netflix with built in gpt search feature using Openai.
          "
          src={streamvideo}
          link="https://streamvideo-dddca.web.app"
          git="https://github.com/Vipulpandey007/stream-video"
        />
        <ProjectCard
          title="Gosssner College Website"
          des=" Crafted Gossner college,Ranchi website using Html,Css,JavaScript and converted in asp.net to implement backend."
          src={gcran}
          link="https://gcran.org/"
        />
        <ProjectCard
          title="Food Ordering App"
          des=" Highly optimised react app crafted like swiggy , with swiggy live api to see resturants and cuisines."
          src={food}
          git="https://github.com/Vipulpandey007/Food-with-vipul"
        />
      </div>
    </section>
  );
};

export default Project;
