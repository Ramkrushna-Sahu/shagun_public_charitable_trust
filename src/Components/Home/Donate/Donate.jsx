import React from "react";
import qrImg from '../../../Assets/Images/qrimg.jpg'
const Donate = () => {
  return (
    <div className="bg-black py-16">
      <div className="heading text-5xl text-center font-bold tracking-tight text-[#FD7B23]">
        DONATE US
      </div>

      <div className="about-us-containers flex flex-col md:flex-row xl:flex-row p-10 gap-32 items-center justify-center ">
        <div className="left text-white text-xs text-center">
          G Pay Account
          <div className="scanner w-96 h-96 bg-gray-300 flex justify-center items-center mt-2">
            <img src={qrImg} alt="" />
          </div>
          <div className="details ">
            <div className="my-1">
              G Pay Name : Shagun Public Charitable Trust
            </div>
            <div className="my-1">G Pay Number : 88796 85345</div>
            <div className="my-1">G Pay ID : 8879685345@okbizaxis</div>
          </div>
        </div>

        <div className="right text-white text-xs text-start md:text-centerxl:text-center">
          <div className="text-3xl font-semibold">Bank Details</div>

          <div className="details mt-10">
            <div className="my-1">Bank Name : Bank Of Maharashtra</div>
            <div className="my-1">
              Account Name : Shagun Public Charitable Trust
            </div>
            <div className="my-1">Account Number : 60295159920</div>
            <div className="my-1">IFSC Code : MAHB0000336</div>
            <div className="my-1">Branch Name : KURLA WEST</div>
          </div>


          <button className="bg-[#FD7B23] text-xl font-semibold px-16 py-2 rounded-3xl mt-10">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
