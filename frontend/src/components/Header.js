import React, { useState } from "react";
import { images } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const navItemsInfo = [
  { name: "Home", type: "link" },
  { name: "Article", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About us", "Contact us"] },
  { name: "Pricing", type: "link" },
  { name: "Faqs", type: "link" },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdownHandler = () => {
    setDropdown((curState) => {
      return !curState;
    });
  };
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
          <span className="cursor-pointer text-orange-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            |
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={toggleDropdownHandler}
          >
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>
          <div
            className={` ${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:trasnform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="bg-white lg:bg-transparent flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page) => (
                <a
                  href="/"
                  key={page}
                  className="hover:bg-dark-soft lg:hover:bg-dark-hard hover:text-orange-500 px-4 py-2 text-secondary lg:text-orange-500 "
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };
  return (
    <>
      <section className="sticky top-0 left-0 right-0 z-50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white">
        <header className="container mx-auto px-5 flex justify-between py-2 items-center">
          <div className="">
            <img className="w-16" src={images.Logo} alt="logo" />
          </div>
          <div className="lg:hidden z-50">
            {navIsVisible ? (
              <AiOutlineClose
                className="w-6 h-6"
                onClick={navVisibilityHandler}
              />
            ) : (
              <AiOutlineMenu
                className="w-6 h-6"
                onClick={navVisibilityHandler}
              />
            )}
          </div>
          <div
            className={`${
              navIsVisible ? "right-0 top-0" : "-right-full top-0"
            } transition-all duration-500 mt-[80px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top- bottom-0 flex lg:static gap-x-9 gap-x-7 items-center font-semibold`}
          >
            <ul className=" text-secondary items-center gap-y-5 lg:text-secondary flex flex-col lg:flex-row  gap-x-2">
              {navItemsInfo.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </ul>
            <button className="mt-5 lg:mt-0 border-2 border-orange-600 px-6 py-2 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300">
              Sign in
            </button>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
