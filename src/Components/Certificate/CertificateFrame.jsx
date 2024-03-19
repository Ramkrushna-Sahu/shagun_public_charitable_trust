import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import logo from "../../Assets/Images/SPCT Logo.png";

const CertificateFrame = () => {
  const certificateRef = useRef(null);

  const generatePDF = () => {
    const element = certificateRef.current;

    // Get dimensions of the element
    const { offsetWidth, offsetHeight } = element;

    // Generate canvas from HTML element
    html2canvas(element, { scrollY: -window.scrollY }).then((canvas) => {
      // Create a new PDF document
      const pdf = new jsPDF("l", "px", [offsetWidth, offsetHeight]);

      // Convert canvas to image data URL
      const imgData = canvas.toDataURL("image/png");

      // Add image to PDF
      pdf.addImage(imgData, "PNG", 0, 0, offsetWidth, offsetHeight);

      // Download PDF
      pdf.save("certificate.pdf");
    });
  };

  return (
    <div style={{ fontFamily: "Times New Roman" }}>
      <div
        ref={certificateRef}
        className="w-screen h-screen mx-auto border-[20px] border-orange-500 flex justify-center items-center relative"
      >
        <div className=" ">
          <img src={logo} alt="" className="opacity-15 h-[60vh] w-full" />
        </div>
        <div className="absolute top-0 left-0 w-20 xl:w-32 pl-4 pt-4">
          <img src={logo} alt="" className="w-full h-full" />
        </div>
        <div className="absolute inset-0 w-full h-full ">
          <div className="p-6">
            <div className="flex flex-col items-center gap-10 text-lg xl:text-5xl mt-6 font-semibold text-center ">
              <p className="uppercase">Shagun Public Charitable Trust</p>
              <p className="text-orange-500 text-5xl ">
                Certification of Appreciation
              </p>
            </div>
            <div className="flex mt-8 justify-center text-lg  xl:text-3xl font-bold text-center">
              <p>is Awarded to</p>
            </div>
            <div className="text-2xl mt-8 flex gap-10 flex-col items-center justify-center text-left font-roboto-serif relative">
              <div className="flex justify-center flex-col -space-y-5">
                <div
                  className="  text-orange-600 tracking-wider text-5xl text-center"
                  style={{ fontFamily: "Lobster" }}
                >
                  Justin Devendra Faruqui
                </div>
                <span className="font-semibold">
                  ________________________________________________________________
                </span>
              </div>
              <p className="text-center text-2xl font-medium w-[75%]  leading-8">
                We appreciate your generous donation to the Shagun Public
                Charitable Trust, aiding our mission to uplift the less
                fortunate. Your commitment to positive change inspires hope and
                progress for those we serve. With your ongoing support, we can
                continue making significant strides toward a
                brighter future for all.
              </p>
            </div>
            <div
              className="flex flex-row  justify-between w-full px-7 mt-14 "
              style={{ fontFamily: "Times New Roman" }}
            >
              <div className="flex flex-col my-2 items-center justify-center text-lg  xl:text-2xl font-medium uppercase text-center relative">
                <div
                  className="absolute top-0 right-0 w-full flex justify-center text-orange-600 tracking-widest"
                  style={{ fontFamily: "Lobster" }}
                >
                  23-12-2004
                </div>
                <p>____________________</p>
                <p style={{ fontFamily: "Times New Roman" }}>Date</p>
              </div>
              <div className="flex flex-col my-6 items-center justify-center text-lg font-sans xl:text-2xl font-medium uppercase text-center">
                <p>____________________</p>
                <p style={{ fontFamily: "Times New Roman" }}>Signature</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={generatePDF}
        className="px-3 py-2 m-4 bg-orange-500 text-white"
      >
        Generate PDF
      </button>
    </div>
  );
};

export default CertificateFrame;
