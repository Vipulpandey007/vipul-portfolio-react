import React from "react";
import LeftHero from "./LeftHero";
import bannerImg from "../Images/bannerimg.png";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 h-screen pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftHero />
      <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
        <img
          className="w-[200px] h-[300px] lgl:w-[350px] lgl:h-[500px] z-10"
          src={bannerImg}
          alt="bannerImg"
        />
        <div className="absolute bottom-0 w-[250px] h-[200px] lgl:w-[350px] lgl:h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
      </div>
    </section>
  );
};

export default Banner;
