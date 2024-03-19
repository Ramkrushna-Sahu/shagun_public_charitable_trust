import React, { useContext, useEffect } from "react";
import { BiMessageSquareEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import DataContext from "../../../Context/FetchData/DataContext";
import LoadContext from "../../../Context/LoadingAnimation/LoadingContext";
import DeleteDataContext from "../../../Context/DeleteData/DeleteDataContext";

const Trustee = ({ openEditTrusteeModal, closeEditTrusteeModal }) => {
  const { trusteeData, trusteeDataRetrival } = useContext(DataContext);
  const { deleteTrustee } = useContext(DeleteDataContext);
  const { isloding, openSetLoading, closeSetLoading } = useContext(LoadContext);
  const handleClick = (data) => {
    openEditTrusteeModal(data);
  };

  const handleDelete = async (data) => {
    closeEditTrusteeModal();
    openSetLoading();
    deleteTrustee(data);
    await trusteeDataRetrival();
    closeSetLoading();
  };

  useEffect(() => {
    trusteeDataRetrival();
  }, []);

  return (
    <div>
      <div className="flex justify-center flex-wrap  ">
        <div className=" inset-x-0 w-[75%] mx-auto top-0 h-2 bg-gray-400 blur-xl " />
        {trusteeData.map((data, index) => (
          <div className="w-full z-0 relative group sm:w-1/2 md:w-1/3 -10 lg:w-1/4 xl:w-[23%] rounded overflow-hidden mx-4 mb-8 flex flex-col justify-center shadow-2xl shadow-gray-400">
            <div className="absolute m-3 w-24 h-11 top-0 right-0 bg-slate-200 rounded-lg bg-opacity-65 flex justify-center items-center translate-x-40 group-hover:translate-x-0 ease-in-out transition-transform duration-1000">
              <div className="flex  gap-3">
                <div
                  className=" hover:bg-slate-50 cursor-pointer px-2 py-2 rounded-lg"
                  onClick={() => handleClick(trusteeData[index])}
                >
                  <BiMessageSquareEdit className="hover:text-slate-500" />
                </div>
                <div
                  className=" hover:bg-slate-50 cursor-pointer px-2 py-2 rounded-lg"
                  onClick={() => handleDelete(trusteeData[index])}
                >
                  <MdDelete className="hover:text-red-500" />
                </div>
              </div>
            </div>
            <div className="h-64 w-full ">
              <img
                className="w-full h-full"
                src={data?.imageUrl}
                alt="Alt-Balaji"
              />
            </div>
            <div className="px-4 py-2 text-center">
              <div className="font-bold text-sm mb-1">{data?.name}</div>
              <br />
              <p className="text-gray-700 text-sm">{data?.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trustee;
