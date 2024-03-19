import React, { useState, useEffect, useContext, useRef } from "react";
import { useGesture } from "react-use-gesture";
import CertificateComponents from "./CertificateComponents";
import DataContext from "../../../Context/FetchData/DataContext";
import { useDraggable } from "react-use-draggable-scroll";
const Certificate = ({
  openEditCertificateModal,
  closeEditCertificateModal,
}) => {
  const [deviceType, setDeviceType] = useState("");
  const context = useContext(DataContext);
  const { certificateData, certificateDataRetrival } = context;

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

  useEffect(() => {
    certificateDataRetrival();
  }, []);

  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref);
  return (
    <div
      className="mx-8 flex space-x-3 overflow-x-scroll "
      style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
      {...events}
      ref={ref}
    >
      {certificateData.map((data, index) => (
        <div key={index} className="inline-block mr-2">
          <CertificateComponents
            className="hover:scale-110"
            openEditCertificateModal={openEditCertificateModal}
            closeEditCertificateModal={closeEditCertificateModal}
            data={data}
          />
        </div>
      ))}
    </div>
  );
};

export default Certificate;
