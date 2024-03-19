import React, { useState, useEffect, useContext, useRef } from "react";
import OurProjectComponent from "./OurProjectsComponents";
import DataContext from "../../../Context/FetchData/DataContext";

import { useDraggable } from "react-use-draggable-scroll";

const OurProjects = ({ openEditProjectModal, closeEditProjectModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [deviceType, setDeviceType] = useState("");

  const context = useContext(DataContext);
  const { projectData, projectDataRetrival } = context;

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

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    projectDataRetrival();
  }, []);

  const ref = useRef(null); // Initialize with null
  const { events } = useDraggable(ref);

  return (
    <div>
      
        <div
          className="mx-8 flex space-x-3 overflow-x-scroll"
          style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
          ref={ref}
          {...events}
        >
          {projectData.map((project, index) => (
            <div key={index} className="inline-block mr-6">
              <OurProjectComponent
                className="hover:scale-110"
                data={project}
                openEditProjectModal={openEditProjectModal}
                closeEditProjectModal={closeEditProjectModal}
              />
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default OurProjects;
