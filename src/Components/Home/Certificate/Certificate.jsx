import React, { useEffect, useState, useRef, useContext } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CertificateComponent from "./CertificateComponent";
import { useDraggable } from "react-use-draggable-scroll";
import DataContext from "../../../Context/FetchData/DataContext";
import LoadContext from "../../../Context/LoadingAnimation/LoadingContext";
const Certificate = () => {
  const [deviceType, setDeviceType] = useState("");
  const { homeLoad ,openHome,closeHome} = useContext(LoadContext);
  const { certificateDataRetrival, certificateData } = useContext(DataContext);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 767) {
        setDeviceType("Mobile");
      } else if (width <= 1024) {
        setDeviceType("Tablet");
      } else {
        setDeviceType("PC");
      }
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    slidesToShow: deviceType === "PC" ? 3 : deviceType === "Tablet" ? 2 : 1,
    infinite: true,
    pauseOnHover: true,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: 0,
  };
  useEffect(() => {
openHome();
    certificateDataRetrival();
    closeHome();
  }, []);
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref);
  return (
    <div className="xl:min-h-screen h-full py-10">
      <div className="flex flex-col items-center gap-10 font-roboto text-3xl   font-bold pt-16">
        <p className="text-center">Highlighting Our Achievements</p>
        <p className="text-sm px-16 xl:text-lg font-medium font-roboto text-center">
          Step into the world of our charitable trust's achievements through our
          Certification Showcase. Each certificate is a testament to our
          commitment to making a positive impact. Join us in celebrating the
          milestones that fuel our dedication to creating a better world through
          charitable endeavors.
        </p>
      </div>

      <div className="xl:px-16 xl:mx-20 h-[30rem]">
        <div
          className="mx-8 flex space-x-3 overflow-x-scroll "
          style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
          {...events}
          ref={ref}
        >

          {certificateData.map((data, index) => (
            <div key={index} className="inline-block mr-4">
            <CertificateComponent key={index} data={data}/>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Certificate;
