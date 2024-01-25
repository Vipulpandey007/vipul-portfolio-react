import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2021 - Present
          </p>
          <h2 className="text-4xl font-bold dark:text-white">Job Experience</h2>
        </div>
        <div className="mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer"
            subTitle="Gossner College, Ranchi- (Sep 2023 - Present)"
            result="Ranchi"
            des="Appointed as web developer to develop different modules for college website."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Passtrpvtltd.in - (2021 - 2022)"
            result="Ranchi"
            des="Appointed as web developer to develop different websites in the company using Html, Css, Javascript and Asp.net(MVC4)."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
