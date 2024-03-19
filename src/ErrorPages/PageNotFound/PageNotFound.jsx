import React from "react";
import PageNotFound from "../../Assets/Images/PageNotFound.png";
const NotFound = () => {
  return (
    <div className="flex flex-col gap-5 xl:gap-24 xl:flex-row justify-center items-center w-screen h-screen bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300">
      <div className="mx-2">
        <img src={PageNotFound} alt="Description" className="w-full h-full " />
      </div>
      <div className="">
        <h1 className="mt-4 text-2xl xl:text-4xl font-bold">Page not found</h1>
        <p className="mt-2 text-lg xl:text-xl">Sorry, we can’t find the page</p>
        <p className="text-lg xl:text-xl">you are looking for.</p>
        <a
          href="/"
          class="relative inline-flex items-center justify-center p-4 px-16 mt-10 py-3 overflow-hidden font-medium  transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-orange-500 "
        >
          <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700"></span>
          <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-orange-300 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span class="relative text-white font-semibold">Go to Home Page</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
