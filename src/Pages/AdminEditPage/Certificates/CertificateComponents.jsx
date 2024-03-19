import React, { useContext, useState } from "react";
import img from "../../../Assets/Images/Certificate.png";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { BiMessageSquareEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import DataContext from "../../../Context/FetchData/DataContext";
import DeleteDataContext from "../../../Context/DeleteData/DeleteDataContext";
import LoadContext from "../../../Context/LoadingAnimation/LoadingContext";
const CertificateComponent = ({
  openEditCertificateModal,
  closeEditCertificateModal,
  data
}) => {

  const {certificateDataRetrival} = useContext(DataContext)
  const {isloading, openSetLoading, closeSetLoading} = useContext(LoadContext)
const {deleteCertificate} = useContext(DeleteDataContext)
  console.log('data' + data?.title);
  const openImageInNewTab = () => {
    const imageUrl = data?.imageUrl;
    window.open(imageUrl, "_blank");
  };

  const handleClick = ()=>{
    openEditCertificateModal(data);
  }

  const handleDelete = ()=>{
    openSetLoading();
    deleteCertificate(data);
    certificateDataRetrival();
    closeSetLoading();
  }

  return (
    <div className="my-10 mx-auto w-[90%] md:w-[85%] xl:w-[90%] rounded-lg shadow-xl relative group bg-white bg-opacity-70 h-fit transform transition-transform hover:scale-105 overflow-hidden duration-1000">
      <div className="min-h-60 h-60 w-96  min-w-96 bg-slate-700 rounded-lg">
        <img
          src={data?.imageUrl}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="absolute  h-full w-full top-0 right-0 rounded-lg flex flex-col justify-end items-start bg-black p-4 text-white transform group-hover:translate-y-0 bg-opacity-90 group-hover:opacity-85 translate-y-80 transition-transform duration-500 ease-in-out ">
        <div className="absolute m-4 flex flex-row gap-3  w-full top-0 right-0 justify-end items-start ">
          <div
            className="bg-slate-500 cursor-pointer px-2 py-2 rounded-lg"
            onClick={openImageInNewTab}
          >
            <BsBoxArrowInUpRight />
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="bg-slate-500 cursor-pointer px-2 py-2 rounded-lg"
              onClick={handleClick}
            >
              <BiMessageSquareEdit />
            </div>
            <div
              className="bg-slate-500 cursor-pointer px-2 py-2 rounded-lg"
              onClick={handleDelete}
            >
              <MdDelete className="hover:text-red-500" />
            </div>
          </div>
        </div>
        <p className="font-bold font-roboto text-base md:text-2xl xl:text-2xl -z-10">
          {data?.title}
        </p>
        <p className="font-roboto text-xs md:text-base xl:text-base py-4">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default CertificateComponent;
