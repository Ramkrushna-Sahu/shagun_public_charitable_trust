import React, { useState, useEffect, useCallback } from "react";
import NewsAndUpdatesContainer from "./NewsAndUpdatesContainer";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Components/Firebase/Firebase";
import { HashLoader } from "react-spinners";
const NewsAndUpdatesPage = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const newsCollectionRef = collection(db, "news");
    const newsData = await getDocs(newsCollectionRef);
    console.log(newsData.docs);
    setData(newsData.docs);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="py-12">
        <div className="flex justify-center md:py-6 pt-4">
          <p className="md:text-6xl text-3xl font-bold">News and Updates</p>
        </div>
        {data.map((news) => {
          return (
            <NewsAndUpdatesContainer
              title={news.data().title}
              description={news.data().description}
              option={news.data().option}
              date={news.data().date}
            />
          );
        })}
      </div>
      {data.length === 0 && (
        <div className=" inset-0 bg-opacity-65 w-full h-full fixed flex justify-center items-center bg-black">
          <HashLoader color="#eb9126" />
        </div>
      )}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default NewsAndUpdatesPage;
