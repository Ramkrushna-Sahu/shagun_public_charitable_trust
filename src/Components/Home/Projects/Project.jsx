import React, { useState, useEffect, useContext, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectComponent from "./ProjectComponent";
import { useDraggable } from "react-use-draggable-scroll";
import DataContext from "../../../Context/FetchData/DataContext";
import LoadContext from "../../../Context/LoadingAnimation/LoadingContext";
function Project() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [deviceType, setDeviceType] = useState("");
  const { homeLoad ,openHome,closeHome} = useContext(LoadContext);
  const { projectData, projectDataRetrival } = useContext(DataContext);
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
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  useEffect(() => {
    openHome();
    projectDataRetrival();

      closeHome();
    
  }, []);
  const ref = useRef(); 
  const { events } = useDraggable(ref);

  return (
    <div className="min-h-screen py-16">
      <div className="flex mx-auto justify-center font-roboto text-4xl font-bold my-10">
        Our Projects
      </div>
      <div className="xl:px-5 xl:mx-20  h-[30rem]">
        <div
          className=" flex overflow-x-scroll gap-10"
          style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
          {...events}
          ref={ref}
        >
          {/* <Slider {...settings} className=""> */}
          {projectData.map((data, index) => (
            <div key={index} className="flex flex-row mr-4">
              <ProjectComponent
                key={index}
                className="hover:scale-110"
                data={data}
              />
            </div>
          ))}
          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
}

export default Project;
