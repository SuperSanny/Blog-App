import React from "react";
import images from "../constants/images";
import { BsCheckLg } from "react-icons/bs";
const ArticleCard = ({ className }) => {
  return (
    <>
      <div
        className={`rounded-xl overflow-hidden shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ${className}`}
      >
        <img
          src={images.Post1Image}
          alt="title "
          className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
        />
        <div className="p-5">
          <h2 className="font-bold text-xl text-dark-hard md:text-2xl lg:text-[20px]">
            Future of Work
          </h2>
          <p className="text-dark-light mt-3 text-sm md:text-lg">
            Majority of peole will work in jobs that don’t exist today.
          </p>
          <div className="flex justify-between flex-nowrap items-center mt-6">
            <div className="flex items-center gap-x-2 md:gap-x-2.5">
              <img
                src={images.PostProfileImage}
                alt="post profile"
                className="w-9 h-9 md:w-10 md:h-10"
              />
              <div className="flex flex-col ml-1">
                <h4 className="font-bold italic text-secondary text-sm md:text-base">
                  Viola Manisa
                </h4>
                <div className="flex items-center gap-x-2">
                  <sapn className="bg-secondary w-fit bg-opacity-20 p-1.5 rounded-full">
                    <BsCheckLg className="w-1.5 h-1.5 text-secondary" />
                  </sapn>
                  <span className="italic text-dark-light text-xs md:text-sm">
                    Verified writer
                  </span>
                </div>
              </div>
            </div>
            <span className="font-bold text-dark-light text-sm md:text-base">
              02 JUNE
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
