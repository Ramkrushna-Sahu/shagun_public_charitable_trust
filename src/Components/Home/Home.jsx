import React, { useContext, useState } from "react";
import Project from "./Projects/Project";
import Aboutus from "./About/Aboutus";
import Welfare from "./Welfare/Welfare";
import Donate from "./Donate/Donate";
import Certificate from "./Certificate/Certificate";
import Banner from "./Banner/Banner";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ListedDonationPage from "../../Pages/ListedDonationpage/ListedDonationPage";
import { HashLoader } from "react-spinners";
import LoadContext from "../../Context/LoadingAnimation/LoadingContext";
const Home = () => {
  const [color, setColor] = useState("white");
  const {homeLoad} = useContext(LoadContext);
  return (
    <>
      <div className="relative overflow-x-hidden">
        <div className="z-30 w-screen absolute top-0">
          <Header color={color} />
        </div>
        <div className="-z-10">
          <Banner />
        </div>
        <div>
          <Project />
        </div>
        <div>
          <Aboutus />
        </div>
        <div>
          <Welfare />
        </div>
        <div>
          <Donate />
        </div>
        <div>
          <Certificate />
        </div>
        {homeLoad&&<div className=" inset-0 bg-opacity-65 w-full h-full fixed flex justify-center items-center bg-black">
          <HashLoader color="#eb9126" />
        </div>}
        <Footer />
      </div>
    </>
  );
};

export default Home;
