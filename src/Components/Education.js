import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4"></div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master Of Computer Application (MCA)"
            subTitle="2021-2023"
            result="82.63%"
            des="Completed Master's of computer application form Ranchi University, Ranchi with subject:- Java, Python, Php, Android, Html.. etc."
          />
          <ResumeCard
            title="Bachelor Of Computer Application"
            subTitle="2017-2020"
            result="80.33%"
            des="Completed Bachelor of computer application from Gossner College, Ranchi."
          />
          <ResumeCard
            title="XII"
            subTitle="2017"
            result="69%"
            des="Completed Class XII from Heritage International School, Daltonganj  ."
          />
          <ResumeCard
            title="X"
            subTitle="2015"
            result="8.6 CGPA"
            des="Completed Class X from V.P.M Gyan Niketan School, Daltonganj  ."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
