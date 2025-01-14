import React from "react";
import  { useState } from "react";
import { 
  FaBars, 
  FaTimes 
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/vaayu_logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      reload: true,
    },
    {
      id: 2,
      link: "dashboard",
    }
  ];

  const handleNavClick = (link, reload = false) => {
    if (reload) {
      window.location.href = "/";
    } else {
      setNav(false);
    }
  };

  return (
    <div className="w-full h-[75px] flex justify-between items-center z-50 backdrop-blur-md">
      <div>
        <img src={Logo} className="h-10 w-32 ml-8 -mt-2"/>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, reload }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-monda font-bold text-white hover:scale-105 duration-200"
          >
            {reload ? (
              <span onClick={() => handleNavClick(link, true)}>{link}</span>
            ) : (
              <Link to={`/${link}`} onClick={() => handleNavClick(link)}>
                {link}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-50 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, reload }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-monda py-6 text-2xl"
            >
              {reload ? (
                <span onClick={() => handleNavClick(link, true)}>{link}</span>
              ) : (
                <Link to={`/${link}`} onClick={() => handleNavClick(link)}>
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
