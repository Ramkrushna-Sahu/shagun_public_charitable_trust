import React, { useContext, useState } from "react";
import Donation from "../../../Assets/Images/DonationPage.png";
import { BiMessageSquareEdit } from "react-icons/bi";
import EditNews from "./Pop-Up/EditNews";
import { MdDelete } from "react-icons/md";
import DeleteDataContext from "../../../Context/DeleteData/DeleteDataContext";
import DataContext from "../../../Context/FetchData/DataContext";
import LoadContext from "../../../Context/LoadingAnimation/LoadingContext";
import { HashLoader } from "react-spinners";

const NewsComponents = ({ openEditNewsModal, closeEditNewsModal, data }) => {
  const { isloading, openSetLoading, closeSetLoading } =
    useContext(LoadContext);
  const { newsDataRetrival } = useContext(DataContext);
  const { deleteNews } = useContext(DeleteDataContext);
  // console.log(data);
  // console.log(data?.id);

  const handleClick = () => {
    openEditNewsModal(data);
  };
  const handleDelete = async () => {
    openSetLoading();
    deleteNews(data);

    await newsDataRetrival();
    closeSetLoading();
  };

  const handleOption = (option) => {
    if (option === "Upcoming Project" || option === "Project Completed") {
      return true
    } else {
      return false
    }
  };
  return (
    <>
      <div>
        <div className=" mx-10 flex flex-col -0 mt-5 rounded-xl p-4 bg-slate-100 relative">
          <div className="absolute top-3 right-3 text-gray-400 flex gap-3 ">
            <MdDelete
              size={25}
              className=" cursor-pointer hover:text-red-500"
              onClick={handleDelete}
            />
            <BiMessageSquareEdit
              size={25}
              className="hover:text-gray-500 cursor-pointer"
              onClick={handleClick}
            />
          </div>
          <div className="flex">
            <div className="xl:w-[28%] w-[90%] h-72 xl:mx-0 mx-auto">
              <img
                src={data?.imageUrl}
                alt=""
                className="w-[100%] h-full rounded-t-xl"
              />
            </div>
            <div className="xl:px-10 md:px-11 px-6 xl:w-[50%] w-full xl:mt-3 mt-3">
              <p className="font-semibold md:text-2xl text-xl">{data?.title}</p>
              <p className="text-sm font-normal mt-1">{data?.description}</p>

              <div className="mt-2">
                {handleOption(data?.option) && (
                  <span className="bg-orange-500 text-xs px-1 py-1 text-white rounded">
                    {data?.option}
                  </span>
                )}
                <p className="text-sm mt-4 text-gray-500">{data?.date}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="z-50"></div>
      </div>
    </>
  );
};

export default NewsComponents;
