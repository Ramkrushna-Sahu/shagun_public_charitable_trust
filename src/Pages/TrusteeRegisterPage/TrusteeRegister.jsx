import { useState } from "react";
import React from "react";
import Register from "../../Assets/Images/Register.png";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth, db } from "../../Components/Firebase/Firebase";
// import { collection, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import './TrusteeRegister.css';

function TrusteeRegister() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [email, setEmail] = useState("");
  const handleRegisterClick = (e) => {
    let valid = true;
    e.preventDefault();
    if (firstName.length < 2) {
      setFirstNameError("First name must be at least 2 characters.");
      valid = false;
    } else {
      setFirstNameError("");
    }
    if (lastName.length < 4) {
      setLastNameError("Last name must be at least 4 characters.");
      valid = false;
    } else {
      setLastNameError("");
    }

    if (phoneNumber.length < 10) {
      setPhoneNumberError("Phone number must be at least 10 digits.");
      valid = false;
    } else {
      setPhoneNumberError("");
    }

    if (valid) {
      alert('Trustee Register not supported yet')
      // createUserWithEmailAndPassword(auth, email, password)
      //   .then(async (userCredential) => {
      //     updateProfile(auth.currentUser, {
      //       displayName: firstName + " " + lastName,
      //     });
      //     const userDocRef = doc(collection(db, "trustee"), auth.currentUser.uid);
      //     await setDoc(userDocRef, {
      //       id: userCredential.user.uid,
      //       firstName,
      //       lastName,
      //       email,
      //       phoneNumber,
      //     });
      //     alert("Successfully created an account...");
      //     navigate("/login");
      //   })
      //   .catch((error) => {
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     alert(errorMessage);
      //     // ..
      //   });
      
    }
  };
  const handleFirstName = (e) => {
    const inputValue = e.target.value.trim();
    const sanitizedValue = inputValue.replace(/[^A-Za-z]/g, ""); // Allow only alphabetic characters
    e.target.value = sanitizedValue; // Update the input value
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    const inputValue = e.target.value.trim();
    const sanitizedValue = inputValue.replace(/[^A-Za-z]/g, ""); // Allow only alphabetic characters
    e.target.value = sanitizedValue; // Update the input value
    setLastName(e.target.value);
  };

  const handleChangePhoneNumber = (e) => {
    const inputValue = e.target.value.trim();
    const sanitizedValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters
    if (sanitizedValue.length <= 10) {
      // If the sanitized value's length is 10 or less, update the input value
      e.target.value = sanitizedValue;
      setPhoneNumber(e.target.value);
    }
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      console.error("Invalid email address");
    } else {
      setEmail(emailValue);
    }
  };

  return (
    <>
    
      <div className="relative min-w-full h-screen mx-auto overflow-hidden object-cover">
       
        <div className="h-screen flex relative">
          <img src={Register} alt="Donation" className="bg-black min-w-full" />
          <div className="absolute bg-black top-0 right-0 w-full h-full bg-opacity-70"></div>
        </div>
        <div className="absolute inset-0">
          {" "}
          <div>
            <Header color={"white"} />
          </div>
          <form action="" className=" flex justify-center items-center gap-1 ">
            <div className="min-w-full h-[90vh] flex flex-col justify-center items-center  p-3">
              <div className="md:w-[60%] w-full my-8 border-[1.5px] border-orange-500 md:p-20 p-14 md:px-14 px-5 bg-black bg-opacity-70 inset-0 rounded-2xl shadow-lg shadow-orange-500/50">
                <div className="flex xl:flex-row flex-col justify-between gap-5">
                  <div className="w-full flex flex-col ">
                    <div class="relative  ">
                      <input
                        type="text"
                        id="firstname"
                        className="block px-2.5 pb-2.5 pt-2.5 w-full text-sm bg-transparent rounded-lg border-2 border-gray-400 appearance-none text-white hover:border-white hover:shadow-sm hover:shadow-slate-200 group  focus:outline-none focus:ring-0 focus:border-orange-600 peer focus:hover:shadow-orange-500 "
                        placeholder="First name"
                        minLength={4}
                        value={firstName}
                        onChange={handleFirstName}
                        required
                      />
                      <label
                        htmlFor="firstname"
                        className="absolute text-sm  text-white  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black  px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >
                        First Name
                      </label>
                    </div>
                    {firstNameError && (
                      <p className="text-red-500 text-xs mt-0">
                        {firstNameError}
                      </p>
                    )}
                  </div>

                  <div className="w-full flex flex-col ">
                    <div class="relative">
                      <input
                        type="text"
                        id="lastname"
                        className="block px-2.5 pb-2.5 pt-2.5  w-full text-sm  bg-transparent rounded-lg border-2 border-gray-400 appearance-none text-white hover:border-white hover:shadow-sm hover:shadow-slate-200 group  focus:outline-none placeholder-transparent focus:ring-0 focus:border-orange-600 peer focus:hover:shadow-orange-500 "
                        placeholder="Last name"
                        minLength={4}
                        value={lastName}
                        onChange={handleLastName}
                        required
                      />
                      <label
                        htmlFor="lastname"
                        className="absolute text-sm  text-white  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black  px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >
                        Last Name
                      </label>
                    </div>
                    {lastNameError && (
                      <p className="text-red-500 text-xs mt-0 xl:ml-2">
                        {lastNameError}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <div class="relative mb-5 mt-5">
                    <input
                      type="email"
                      id="email"
                      className="block  px-2.5 pb-2.5 pt-2.5  w-full text-sm  bg-transparent rounded-lg border-2 border-gray-400 appearance-none text-white hover:border-white hover:shadow-sm hover:shadow-slate-200 group  focus:outline-none placeholder-transparent focus:ring-0 focus:border-orange-600 peer focus:hover:shadow-orange-500 "
                      placeholder="Email ID"
                      onChange={handleEmailChange}
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-sm  text-white  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black  px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-roboto"
                    >
                      Email - ID
                    </label>
                  </div>

                  <div className="flex flex-row ">
                    <select className="mr-1 bg-transparent appearance-none border-[1.5px] border-white rounded-lg px-2 outline-none text-white">
                      <option
                        value="+91"
                        className=" bg-transparent text-black"
                      >
                        +91
                      </option>
                      <option
                        value="+91"
                        className=" bg-transparent text-black"
                      >
                        +91
                      </option>
                      <option
                        value="+91"
                        className=" bg-transparent text-black"
                      >
                        +91
                      </option>
                    </select>

                    <div className="relative w-full ">
                      <input
                        type="number"
                        id="mobileNo"
                        className="block  px-2.5 pb-2.5 pt-2.5  w-full text-sm  bg-transparent rounded-lg border-2 border-gray-400 appearance-none text-white hover:border-white hover:shadow-sm hover:shadow-slate-200 group  focus:outline-none placeholder-transparent focus:ring-0 focus:border-orange-600 peer focus:hover:shadow-orange-500 "
                        placeholder="Mobile Number"
                        value={phoneNumber}
                        maxLength={10} // Set maximum length to 10 onChange=
                        onChange={handleChangePhoneNumber}
                        required
                        inputMode="numeric"
                      />
                      <label
                        htmlFor="mobileNo"
                        className="absolute text-sm  text-white  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black  px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-roboto"
                      >
                        Mobile Number
                      </label>
                    </div>
                  </div>
                </div>
                {phoneNumberError && (
                  <p className="text-red-500 text-xs mt-0">
                    {phoneNumberError}
                  </p>
                )}
                <div className="flex justify-center">
                  <button
                    onClick={handleRegisterClick}
                    className="text-white bg-orange-500 mt-7  py-3 px-14 rounded-lg border-[1.5px] border-white hover:bg-orange-600"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default TrusteeRegister;
