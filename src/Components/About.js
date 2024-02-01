import React from "react";
import Title from "./Title";
import ContactCard from "./ContactCard";
import { AboutData } from "../Constants/AboutData";

const About = () => {
  return (
    <section id="about" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="About Me" des="What I Do" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {AboutData.map((item) => (
          <ContactCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default About;
