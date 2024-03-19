import React from "react";
import Aboutcomponent from "./Aboutcomponent";

const Aboutus = () => {
  return (
    <div >
      <div className="heading text-4xl font-roboto text-center mt-20 md:mt-0 xl:mt-20 font-bold tracking-tight">
        About Us
      </div>

      <div className="about-us-containers flex flex-col items-center justify-center mt-10">
        <Aboutcomponent
          flexDirection={"left"}
          imgSrc={"https://i.ibb.co/kmwXtzB/DSC-3716.jpg"}
          textContent={`
            Back in 2010, we were a bunch of young people with a common purpose in
            mind. We wanted to help those who were clearly in need and we did not
            want credit for it. We simply wanted help to reach the right places
            directly in such a way that it could actually work. To this end, we
            would collect funds as a team and once in 6 months, we would buy shawls,
            books and clothes.
            `}
        />

        <Aboutcomponent
          flexDirection={"right"}
          imgSrc={"https://i.ibb.co/kmwXtzB/DSC-3716.jpg"}
          textContent={`
          We would load all these goods into a tempo and drive to one end of Mumbai city in the dead of the night. As we drove through town, we would leave a shawl for each person we saw sleeping on a pavement, books next to sleeping children, clothes for those whom we thought would need them. That’s how it all started and thankfully now, we can do much more.
            `}
        />
      </div>
    </div>
  );
};

export default Aboutus;
