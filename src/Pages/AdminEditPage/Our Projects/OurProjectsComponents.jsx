import React, { useContext } from "react";
import img from "../../../Assets/svgs/Project image.svg";
import { BiMessageSquareEdit } from "react-icons/bi";
import LoadContext from "../../../Context/LoadingAnimation/LoadingContext";

const OurProjectsComponents = ({
  openEditProjectModal,
  closeEditProjectModal,
  data,
}) => {
  const {isloding, openSetLoading, closeSetLoading} = useContext(LoadContext);
  const handleClick = () => {

    openEditProjectModal(data);
  }
  return (
    <div className="h-[25rem] mx-auto w-[90%] md:w-[85%] xl:w-80 rounded-lg shadow-xl  bg-white bg-opacity-70 flex flex-col  my-5 transform transition-transform hover:scale-105 duration-500 relative ">
      <div
        className="absolute top-1 right-1 text-gray-400 hover:text-gray-200 z-30 border-2 border-transparent p-1 hover:border-gray-500  rounded-full  "
        onClick={handleClick}
      >
        <BiMessageSquareEdit size={25} className="" />
      </div>
      <div className="h-[70%] w-full bg-white rounded-t-lg overflow-hidden">
        <img
          src={data?.imageUrl}
          alt=""
          className="object-cover w-full h-full rounded-t-lg hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>
      <div className="p-4">
        <p className="font-bold font-roboto text-xl text-ellipsis">{data?.title}</p>
        <p className="font-roboto text-base pt-4 text-ellipsis">{data?.description}</p>
      </div>
    </div>
  );
};

export default OurProjectsComponents;
