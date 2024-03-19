import React, { useState, useEffect, useContext, useCallback } from "react";
import NewsComponents from "./NewsComponents";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../Components/Firebase/Firebase";
import EditNews from "./Pop-Up/EditNews";
import DataContext from "../../../Context/FetchData/DataContext";
const NewsandUpdates = ({ openEditNewsModal, closeEditNewsModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [deviceType, setDeviceType] = useState("");
  // const [data, setData] = useState();

  const context = useContext(DataContext);
  const { newsData, newsDataRetrival } = context;
  useEffect(() => {
    handleData();
  }, [newsData?.id]);

  const handleData =  () => {
    console.log('called')
     newsDataRetrival();
    // setData(newsData);
    console.log( ' data  '+newsData);
    console.log(newsData?.id);
  };

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
    slidesToShow: deviceType === "PC" ? 4 : deviceType === "Tablet" ? 2 : 1,
    infinite: true,
    pauseOnHover: true,
    autoplay: false,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setCurrentSlide(next),
  };
  return (
    <div>
      <div className=" max-h-screen overflow-y-scroll   ">
        {newsData?.length === 0 ? (
          <p>No data to display</p>
        ) : (
          [...Array(newsData?.length)].map((_, index) => (
            <NewsComponents
              upcoming={true}
              data={newsData[index]}
              openEditNewsModal={openEditNewsModal}
              closeEditNewsModal={closeEditNewsModal}
              key={index}
              className="hover:scale-110"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NewsandUpdates;
