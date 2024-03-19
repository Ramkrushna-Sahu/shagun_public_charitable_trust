import React, { useCallback, useEffect, useState } from "react";
import Donation from "../../Assets/Images/DonationPage.png";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../Components/Firebase/Firebase";
const NewsAndUpdatesContainer = ({ title, description, option, date }) => {
  const [bannersrc, setbannersrc] = useState("");
  const getBannerUrlFromStorage = useCallback(async () => {
    try {
      const banner = ref(storage, "news/" + title);
      await getDownloadURL(banner)
        .then((url) => {
          setbannersrc(url);
        })
        .catch((error) => {
          console.log("Banner not available add it" + error);
        });
    } catch (error) {
      console.log("Banner not set yet");
    }
  }, [title]);
  useEffect(() => {
    getBannerUrlFromStorage();
  }, []);
  const handleOption = () => {
    if (option === "Upcoming Project" || option === "Project Completed") {
      return true
    } else {
      return false
    }
  };
  return (
    <>
      <div>
        <div className="mt-6 mb-3">
          <div className="container mx-auto xl:flex xl:justify-center block">
            <div className="xl:w-[33%] w-[90%] h-72 xl:mx-0 mx-auto">
              <img
                src={bannersrc}
                alt=""
                className="w-full h-full rounded-xl"
              />
            </div>
            <div className="xl:px-10 md:px-11 px-6 xl:w-[50%] w-full xl:mt-3 mt-3">
              <p className="font-semibold md:text-2xl text-xl">{title}</p>
              <p className="text-sm font-normal mt-1">{description}</p>

              <div className="mt-2">
                {handleOption() && (
                  <span className="bg-orange-500 text-xs px-1 py-1 text-white rounded">
                    {option}
                  </span>
                )}
                <p className="text-sm mt-4 text-gray-500">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsAndUpdatesContainer;
