import React from 'react';
import { IoClose } from "react-icons/io5";
import { HashLoader } from 'react-spinners';
const Modal = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen ? 'fixed inset-0 overflow-y-auto' : 'hidden';

  return (
    <>
      <div className={`none ${modalClasses}`}>
        <div
          className=" inset-0 bg-gray-700 opacity-70 fixed top-0 right-0 left-0 bottom-0"
          onClick={onClose}
        ></div>

        <div className="xl:max-w-[60%] max-w-[90%] my-[10%] mx-auto rounded-lg p-5 bg-slate-200 relative">
          <IoClose
            className=" absolute top-1 right-1 text-xl cursor-pointer bg-slate-100 hover:border-2 rounded-lg border-gray-400 hover:border-orange-400 focus:bg-orange-300 p-0.5 m-1 text-gray-500 hover:text-orange-500"
            size={30}
            onClick={onClose}
          />
         
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;