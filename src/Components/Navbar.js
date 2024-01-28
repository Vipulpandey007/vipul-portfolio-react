import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinksdata } from "../Constants/NavItems";
import { Link } from "react-scroll";
import { MdClose } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMoon } from "react-icons/fa";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mMenu, setmMenu] = useState(false);
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log("clicked");
  };
  return (
    <nav
      className={`fixed w-full  left-0 top-0 z-50 ${
        sticky ? "bg-[#e4e5f1] text-black dark:bg-gray-900 dark:text-white" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold dark:text-white">
            V<span className="text-red-600">ipu</span>L
          </h4>
        </div>
        <div
          className={`md:block hidden px-7 font-medium bg-[#e4e5f1] text-black dark:bg-gray-900 dark:text-white rounded-bl-full p-2`}
        >
          <ul className="flex items-center gap-10 p-5 text-lg">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-base font-normal  tracking-wide cursor-pointer hover:text-red-500 duration-300"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
            <div onClick={handleThemeSwitch} className="cursor-pointer">
              {theme === "dark" ? <IoMdSunny /> : <FaMoon />}
            </div>
          </ul>
        </div>
        <div
          className={`text-3xl md:hidden mx-5 p-5 text-black dark:text-white flex flex-row`}
        >
          <div onClick={handleThemeSwitch} className="mr-2">
            {theme === "dark" ? <IoMdSunny /> : <FaMoon />}
          </div>
          <GiHamburgerMenu onClick={() => setmMenu(!mMenu)} />
        </div>

        {mMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 right-0 bg-gray-500 dark:bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <ul className="flex flex-col gap-4 text-center mt-16">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-white tracking-wide cursor-pointer hover:text-red-500 duration-300"
                  >
                    <Link
                      onClick={() => setmMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 text-center">
                <div onClick={handleThemeSwitch} className="mx-auto">
                  {theme === "dark" ? (
                    <IoMdSunny className="text-white text-2xl" />
                  ) : (
                    <FaMoon className="text-white text-2xl" />
                  )}
                </div>
                <h2 className="text-base uppercase font-titleFont mb-4 text-white">
                  Find me in
                </h2>
                <div className="flex gap-4 px-16">
                  <span className="bannerIcon">
                    <FaFacebookF />
                  </span>
                  <span className="bannerIcon">
                    <FaTwitter />
                  </span>
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setmMenu(false)}
                className="absolute top-4 right-4 text-black dark:text-white hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
