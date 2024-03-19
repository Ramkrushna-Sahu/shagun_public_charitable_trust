import React, { useState, useEffect } from "react";
import school from "../../../Assets/Images/c1.JPG";
import college from "../../../Assets/Images/c4.png";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
   const settings = {
     slidesToShow: 1,
     infinite: true,
     autoplay: true,
     slidesToScroll: 1,
     autoplaySpeed: 2500,
     centerMode: true,
     centerPadding: 0,

   };
  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="h-[95vh] w-screen  ">
          <img src={school} alt="" className="h-full w-full object-cover " />
        </div>
        <div className="h-[95vh] w-screen  ">
          <img src={college} alt="" className="h-full w-full object-cover " />
        </div>
      </Slider>
      <div className="absolute top-0 bg-opacity-60 bg-black h-[95vh] w-screen">
        <div className="h-full m-auto flex flex-col justify-center text-white items-center">
          <p className="text-5xl font-bold  font-roboto ">
            BECAUSE PEOPLE MATTERS
          </p>
          <p className="text-3xl mt-8">|| शतहस्त समाहर सहस्रहस्त संकिर ||</p>
          <p className="text-2xl mt-5 font-roboto ">
            Earn with hundred hands and donate with thousand hands.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
