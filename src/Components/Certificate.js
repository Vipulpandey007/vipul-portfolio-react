import React from "react";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import react from "../Images/react.png";
import css from "../Images/css.png";
import js from "../Images/js.png";
import nr from "../Images/nr.jpg";

const Certificate = () => {
  return (
    <section
      id="certificate"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="Certifications" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="Hackerrank ReactJs (Basic) Certificate"
          src={react}
          link="https://www.hackerrank.com/certificates/b86e27a04516"
        />
        <ProjectCard
          title="Hackerrank JavaScript (Basic) Certificate"
          src={css}
          link="https://www.hackerrank.com/certificates/69458b696e15"
        />
        <ProjectCard
          title="Hackerrank Css (Basic) Certificate"
          src={js}
          link="https://www.hackerrank.com/certificates/9744674cfb3d"
        />
        <ProjectCard title="Namaste React Certificate" src={nr} />
      </div>
    </section>
  );
};

export default Certificate;
