import { setDashPattern } from "pdf-lib";
import React, { useState } from "react";

const EditCertificateDetails = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    date: new Date().toISOString().slice(0, 10),
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dateError, setDateError] = useState("");
  const handleChange = (e) => {
    try {
      const { name, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      validate();
      if (name === "date") {
        setDateError("");
      }
    } catch (error) {
      alert(error);
    }
  };
  const validate = () => {
    let valid = true;
    if (!data.name.trim()) {
      setNameError("Enter the Name");
      valid = false;
    } else {
      setNameError("");
    }
    if (!data.email.trim()) {
      setEmailError("Enter the Email");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!data.date.toString().trim()) {
      setDateError("Choose date");
      valid = false;
    } else {
      setDateError("");
    }
    if (valid) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = () => {
    if (validate) {
    }
  };
  return (
    <>
      <div className="">
        <form className="py-8">
          <div className="flex w-[80%] mx-auto flex-col gap-5 justify-center items-center">
            <div className="flex w-full  px-10 gap-10 justify-center">
              <div className="w-[45%]">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className=" w-full px-2.5 py-2.5 text-sm bg-transparent rounded-lg border-2 border-gray-400 text-black hover:shadow-sm hover:shadow-slate-200 focus:outline-none focus:ring-0 focus:border-orange-600 peer hover:border-orange-600 dark:focus:border-orange-600 peer-hover:shadow-orange-500 peer-focus:shadow-orange-500 "
                    placeholder="Name"
                    value={data.name}
                    name="name"
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm  text-black  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-200  px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[50%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Name
                  </label>
                </div>
                {nameError && (
                  <p className="text-red-600 text-sm mx-1">{nameError}</p>
                )}
              </div>

              <div className="w-[45%]">
                <div className="relative ">
                  <input
                    type="text"
                    id="email"
                    className="block w-full px-2.5 py-2.5 text-sm bg-transparent rounded-lg border-2 border-gray-400 text-black hover:shadow-sm hover:shadow-slate-200 focus:outline-none focus:ring-0 focus:border-orange-600 peer hover:border-orange-600 dark:focus:border-orange-600 peer-hover:shadow-orange-500 peer-focus:shadow-orange-500 "
                    placeholder="Email"
                    value={data.email}
                    name="email"
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm  text-black  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-200  px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[50%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Email
                  </label>
                </div>{emailError && (
                <p className="text-red-600 text-sm mx-1">{emailError}</p>
              )}
              </div>
              
            </div>
            <div className="flex w-full  px-10 gap-10 justify-center ">
              <div className=" w-[45%] ">
                <div className=" ">
                  <input
                    type="date"
                    className="block w-full px-2.5 py-2.5 text-sm bg-transparent rounded-lg border-2 border-gray-400 text-black hover:shadow-sm hover:shadow-slate-200 focus:outline-none focus:ring-0 focus:border-orange-600 peer hover:border-orange-600 dark:focus:border-orange-600 peer-hover:shadow-orange-500 peer-focus:shadow-orange-500 "
                    value={data.date}
                    onChange={handleChange}
                    name="date"
                  />
                </div>
                {dateError && (
                  <p className="text-red-600 text-sm mx-1">{dateError}</p>
                )}
              </div>

              <div className="flex flex-row  justify-end  w-[45%]">
                <button
                  className=" bg-orange-500 px-14 py-2 hover:bg-orange-600 text-white rounded-md"
                  // onClick={}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditCertificateDetails;
