import React from "react";
import { images } from "../constants";
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiFillHeart,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <section className="bg-tertiary">
        <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-10 lg:grid-cols-10 lg:gap-x-10">
          <div className="col-span-5 md:col-span-4 lg:col-span-2">
            <h3 className="text-dark-hard font-bold">Product</h3>
            <ul className="text-primary text-sm mt-5 space-y-4">
              <li>
                {" "}
                <a href="/" className="">
                  Landingpage
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="">
                  Features
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="">
                  Documentation
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="">
                  Referral Program
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-5 md:col-span-4 lg:col-span-2">
            <h3 className="text-dark-hard font-bold">Product</h3>
            <ul className="text-primary text-sm mt-5 space-y-4">
              <li>
                {" "}
                <a href="/" className="">
                  Landingpage
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="">
                  Features
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="">
                  Documentation
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="">
                  Referral Program
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto">
            <h3 className="text-dark-hard font-bold">Product</h3>
            <ul className="text-primary text-sm mt-5 space-y-4">
              <li>
                {" "}
                <a href="/" className="">
                  Landingpage
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="">
                  Features
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="">
                  Documentation
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="">
                  Referral Program
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-5 md:col-span-4 lg:col-span-2">
            <h3 className="text-dark-hard font-bold">Product</h3>
            <ul className="text-primary text-sm mt-5 space-y-4">
              <li>
                {" "}
                <a href="/" className="">
                  Landingpage
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="">
                  Features
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="">
                  Documentation
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="">
                  Referral Program
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
            <a href="/" className="">
              <img
                className="brightness-0 invert mx-auto hover:brightness-100 hover:invert-0 transition-all duration-300"
                src={images.Logo}
                alt="logo"
              />
            </a>
            <p className="text-sm text-primary text-center mt-4 md:text-left md:text-base">
              Build a modern and creative website with crealand
            </p>
            <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-200 md:justify-start transition-all duration-300">
              <li className="">
                <a href="/">
                  <AiOutlineTwitter className="w-6 h-auto hover:text-secondary" />
                </a>
              </li>
              <li className="">
                <a href="/">
                  <AiFillYoutube className="w-6 h-auto hover:text-secondary" />
                </a>
              </li>
              <li className="">
                <a href="/">
                  <AiFillInstagram className="w-6 h-auto hover:text-secondary" />
                </a>
              </li>
              <li className="">
                <a href="/">
                  <AiOutlineFacebook className="w-6 h-auto hover:text-secondary" />
                </a>
              </li>
              <li className="">
                <a href="/">
                  <BsTelegram className="w-6 h-auto px-0.5 hover:text-secondary" />
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
            <div className="bg-secondary text-white p-3 rounded-full transition-all duration-300">
              <AiFillHeart className="w-7 h-auto hover:text-dark-hards" />
            </div>
            <p className="font-bold italic text-primary">
              Copyright © 2023. Created with Love
            </p>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
