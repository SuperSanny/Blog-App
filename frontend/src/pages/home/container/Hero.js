import React from "react";
import images from "../../../constants/images";
import { FiSearch } from "react-icons/fi";

const Hero = () => (
  <>
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-roboto text-3xl text-center font-bold text-tertiary md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Read the most interesting articles
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          Our team curates a list of the most interesting and popular articles
          on Blogify. Articles are handpicked based on their quality,
          uniqueness, and relevance. Discover captivating content from various
          categories, including travel, technology, lifestyle, education, and
          more.
        </p>
        <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              className="placeholder:font-bold font-semibold text-tertiary placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(1,_195,_141,_0.24)_0px_3px_5px] md:py-4"
              type="text"
              placeholder="Search articles"
            />
          </div>
          <button
            className="w-full bg-tertiary hover:bg-secondary transition-all duration-300 text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2"
            type="button"
          >
            Search
          </button>
        </div>
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base cursor-pointer">
            <li className="rounded-lg bg-tertiary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Design
            </li>
            <li className="rounded-lg bg-tertiary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Experience
            </li>
            <li className="rounded-lg bg-tertiary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Interface
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <img className="w-full" src={images.HeroImage} alt="" />
      </div>
    </section>
  </>
);

export default Hero;
