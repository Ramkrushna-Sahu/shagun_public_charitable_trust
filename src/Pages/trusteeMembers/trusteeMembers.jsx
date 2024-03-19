import React, { useContext, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import DataContext from "../../Context/FetchData/DataContext";
const PROUD_TRUSTEES_PAGE = () => {
  const { trusteeData, trusteeDataRetrival } = useContext(DataContext);
  useEffect(()=>{
    trusteeDataRetrival()
  })
  return (
    <div className="font-roboto">
      <div className="">
        <Header color={"black"} />
      </div>
      <div></div>
      <h1 className="text-2xl font-bold text-center mt-16 mb-4">
        OUR PROUD TRUSTEES
      </h1>
      <br />
      <div className="flex justify-center flex-wrap  ">
        <div className=" inset-x-0 w-[75%] mx-auto top-0 h-2 bg-gray-400 blur-xl " />
        {trusteeData.map((data, index) => (
          <div className="w-full z-0 relative group sm:w-1/2 md:w-1/3 -10 lg:w-1/4 xl:w-[23%] rounded overflow-hidden mx-4 mb-8 flex flex-col justify-center shadow-2xl shadow-gray-400">
            
            <div className="h-64 w-full ">
              <img
                className="w-full h-full"
                src={data?.imageUrl}
                alt="Alt-Balaji"
              />
            </div>
            <div className="px-4 py-2 text-center">
              <div className="font-bold text-sm mb-1">{data?.name}</div>
              <br />
              <p className="text-gray-700 text-sm">{data?.role}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .card {
          margin-bottom: 20px; /* Add some bottom margin to the cards */
        }

        @media (max-width: 767px) {
          .flex-wrap .rounded {
            width: 100%; /* Full width for smaller screens */
            margin: 0 auto; /* Center align the cards */
          }
        }
      `}</style>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default PROUD_TRUSTEES_PAGE;
