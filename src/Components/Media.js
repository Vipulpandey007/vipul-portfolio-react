import { BsGithub } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiGmail } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between  dark:text-white">
      <div className="mr-10">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://github.com/Vipulpandey007"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/vipul708/">
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:vipulpandey708@gmail.com">
              <SiGmail />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaHtml5 />
          </span>
          <span className="bannerIcon">
            <FaCss3Alt />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <FaBootstrap />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
