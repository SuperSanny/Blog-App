import React from "react";
import { images } from "../constants";

const navItemsInfo = [
  { name: "Home" },
  { name: "Aticals" },
  { name: "Pages" },
  { name: "Pricing" },
  { name: "Faqs" },
];

const NavItem = ({ name }) => {
  return (
    <li className="relative group">
      <a href="/" className="px-4 py-2">
        {name}
      </a>
      <span className="text-orange-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
        |
      </span>
    </li>
  );
};

const Header = () => {
  return (
    <>
      <section>
        <header className="container mx-auto px-5 flex justify-between py-2 items-center">
          <div className="">
            <img src={images.Logo} alt="logo" />
          </div>
          <div className="flex gap-x-7 items-center font-semibold">
            <ul className="flex gap-x-3">
              {navItemsInfo.map((item) => (
                <NavItem key={item.name} name={item.name} />
              ))}
            </ul>
            <button className="border-2 border-orange-600 px-6 py-2 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300">
              Sign in
            </button>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
