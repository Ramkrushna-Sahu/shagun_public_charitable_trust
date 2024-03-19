import React from "react";

const Aboutcomponent = ({ imgSrc, textContent, flexDirection }) => {
  return (
    <div
      className={`flex ${
        flexDirection === "right"
          ? "flex-col  md:flex-row xl:flex-row "
          : "flex-col md:flex-row-reverse xl:flex-row-reverse"
      }  justify-center items-center gap-12 w-full py-2 px-6 xl:px-10`}
    >
      <div className="left w-[98%] md:w-96 xl:w-96 overflow-hidden rounded-md">
        <img
          src={imgSrc}
          className="rounded-md w-full hover:scale-110 transition-all ease-in-out duration-1000"
          alt="Responsive image"
        />
      </div>

      <div className="right md:w-[30rem] xl:w-[30rem] tracking-tight text-slate-900 text-sm xl:text-base font-roboto">
        {textContent}
      </div>
    </div>
  );
};

export default Aboutcomponent;
