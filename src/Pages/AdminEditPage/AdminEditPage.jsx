import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import OurProjects from "./Our Projects/OurProjects";
import AddOurProject from "./Our Projects/Pop-Up/AddOurProject";
import { CiSquarePlus } from "react-icons/ci";
import NewsandUpdates from "./News and Updates/NewsandUpdate";
import CreateNews from "./News and Updates/Pop-Up/CreateNews";
import Certificate from "./Certificates/Certificate";
import AddCertificate from "./Certificates/Pop-Up/AddCertificate";
import EditOurProjects from "./Our Projects/Pop-Up/EditOurProject";
import EditNews from "./News and Updates/Pop-Up/EditNews";
import EditCertificate from "./Certificates/Pop-Up/EditCertificate";
import { HashLoader } from "react-spinners";
import LoadContext from "../../Context/LoadingAnimation/LoadingContext";
import Trustee from "./Trustees/Trustee";
import AddTrustee from "./Trustees/pop-up/AddTrustee";
import EditTrustee from "./Trustees/pop-up/EditTrustee";
import { useNavigate } from "react-router-dom";
import EditCertificateDetails from "./SendCertificate/EditCertificateDetails";
const AdminEditPage = () => {
  const navigate = useNavigate();

  const handlePasswordPrompt = () => {
    setAuthLoad(true);
    const enteredPassword = prompt("Please enter your password:");

    if (enteredPassword?.trim() !== process.env.REACT_APP_PASSWORD) {
      navigate("/access-denied");
      setAuthLoad(true);
    } else {
      setAuthLoad(false);
    }
  };

  useEffect(() => {
    handlePasswordPrompt();
  }, []);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNewsModalOpen, setNewsModalOpen] = useState(false);
  const [isCertificateModalOpen, setCertificateModalOpen] = useState(false);
  const [isTrusteeModalOpen, setTrusteeModalOpen] = useState(false);

  const [isEditProjectModalOpen, setEditProjectModalOpen] = useState(false);
  const [isEditNewModalOpen, setEditNewModalOpen] = useState(false);
  const [isEditCertificateModalOpen, setEditCertificateModalOpen] =
    useState(false);
  const [isEditTruteeModalOpen, setEditTruteeModalOpen] = useState(false);
  const [isEditCertificateDetailsModalOpen, setEditCertificateDetailsModalOpen] =
    useState(false);

  const [TrusteeData, setTruteeData] = useState();
  const [ProjectData, setProjectData] = useState();
  const [NewsData, setNewsData] = useState();
  const [CertificateData, setCertificateData] = useState();

  const { isloading, openSetLoading, closeSetLoading } =
    useContext(LoadContext);
  const [authload, setAuthLoad] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openNewsModal = () => setNewsModalOpen(true);
  const closeNewsModal = () => setNewsModalOpen(false);
  const openCertificateModal = () => setCertificateModalOpen(true);
  const closeCertificateModal = () => setCertificateModalOpen(false);
  const openTrusteeModal = () => setTrusteeModalOpen(true);
  const closeTrusteeModal = () => setTrusteeModalOpen(false);
  const openEditCertificateDetailModal =()=> setEditCertificateDetailsModalOpen(true)
  const closeEditCertificateDetailModal =()=> setEditCertificateDetailsModalOpen(false)

  const openEditProjectModal = (data) => {
    console.log("openEditProjectModal b", isEditProjectModalOpen);
    setEditProjectModalOpen(true);
    setProjectData(data);
    console.log("openEditProjectModal a", isEditProjectModalOpen);
  };
  const closeEditProjectModal = () => {
    console.log("closeEditProjectModal b", isEditProjectModalOpen);
    setEditProjectModalOpen(false);
    setProjectData(null);
    console.log("closeEditProjectModal a", isEditProjectModalOpen);
  };

  const openEditNewsModal = (data) => {
    setEditNewModalOpen(true);
    setNewsData(data);
  };
  const closeEditNewsModal = () => {
    setEditNewModalOpen(false);
    setNewsData(null);
  };

  const openEditTrusteeModal = (data) => {
    setEditTruteeModalOpen(true);
    setTruteeData(data);
  };

  const closeEditTrusteeModal = () => {
    setEditTruteeModalOpen(false);
    setTruteeData(null);
  };

  const openEditCertificateModal = (data) => {
    setEditCertificateModalOpen(true);
    setCertificateData(data);
  };
  const closeEditCertificateModal = () => {
    setEditCertificateModalOpen(false);
    setCertificateData(null);
  };

  return (
    <div className="relative">
      {authload && (
        <div className="absolute inset-0  w-full h-full z-50 bg-slate-100 "></div>
      )}
      <div>
        <Header />
      </div>
      <div className="flex justify-start p-10 font-roboto font-semibold uppercase text-3xl relative">
        <p>Admin Edit Page</p>
        <span
          className="absolute bottom-6 rounded-br-lg rounded-tl-lg
 bg-orange-500 w-16 h-2.5"
        ></span>
      </div>
      <div className=" bg-slate-200 rounded-xl mx-10 mt-4 mb-10">
        <div className="flex font-roboto justify-between px-6 pt-5  relative w-full">
          <p className="text-2xl font-bold text-gray-500">Our Projects</p>{" "}
          <span className="absolute left-[10rem] w-auto text-white text-xs bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 px-1 py-0.5 rounded-lg">
            Edit Mode
          </span>
          <span
            className="px-2 py-1 border-green-600 border-2 rounded-lg bg-gradient-to-br hover:text-white hover:from-green-600 hover:shadow-lg drop-shadow-2xl- cursor-pointer transition-all ease-in-out duration-500 hover:shadow-green-300 flex gap-2  justify-center items-center font-medium hover:to-green-400"
            onClick={openModal}
          >
            Create New Event
            <CiSquarePlus size={25} />
          </span>
        </div>

        <div className=" flex justify-center px-4 py-2">
          <span className=" h-0.5 w-[99%] bg-gray-300"></span>
        </div>

        <div className="w-full">
          <OurProjects
            openEditProjectModal={openEditProjectModal}
            closeEditProjectModal={closeEditProjectModal}
          />
        </div>
      </div>
      <div className=" bg-slate-200 rounded-xl mx-10 mt-4 mb-10">
        <div className="flex font-roboto justify-between px-6 pt-5  relative w-full">
          <p className="text-2xl font-bold text-gray-500">News and Updates</p>{" "}
          <span className="absolute left-[14.2rem] w-auto text-white text-xs bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 px-1 py-0.5 rounded-lg">
            Edit Mode
          </span>
          <span
            className="px-2 py-1 border-green-600 border-2 rounded-lg bg-gradient-to-br hover:text-white hover:from-green-600 hover:shadow-lg drop-shadow-2xl- cursor-pointer transition-all ease-in-out duration-500 hover:shadow-green-300 flex gap-2  justify-center items-center font-medium hover:to-green-400"
            onClick={openNewsModal}
          >
            Create New Event
            <CiSquarePlus size={25} />
          </span>
        </div>

        <div className=" flex justify-center px-4 py-2">
          <span className=" h-0.5 w-[99%] bg-gray-300"></span>
        </div>

        <div className="w-full pb-4">
          <NewsandUpdates
            openEditNewsModal={openEditNewsModal}
            closeEditNewsModal={closeEditNewsModal}
          />
        </div>
      </div>
      <div className=" bg-slate-200 rounded-xl mx-10 mt-4 mb-10">
        <div className="flex font-roboto justify-between px-6 pt-5  relative w-full">
          <p className="text-2xl font-bold text-gray-500">Certificates</p>{" "}
          <span className="absolute left-[10rem] w-auto text-white text-xs bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 px-1 py-0.5 rounded-lg">
            Edit Mode
          </span>
          <span
            className="px-2 py-1 border-green-600 border-2 rounded-lg bg-gradient-to-br hover:text-white hover:from-green-600 hover:shadow-lg drop-shadow-2xl- cursor-pointer transition-all ease-in-out duration-500 hover:shadow-green-300 flex gap-2  justify-center items-center font-medium hover:to-green-400"
            onClick={openCertificateModal}
          >
            Add Certificate
            <CiSquarePlus size={25} />
          </span>
        </div>

        <div className=" flex justify-center px-4 py-2">
          <span className=" h-0.5 w-[99%] bg-gray-300"></span>
        </div>

        <div className="w-full">
          <Certificate
            openEditCertificateModal={openEditCertificateModal}
            closeEditCertificateModal={closeEditCertificateModal}
          />
        </div>
      </div>
      <div className=" bg-slate-200 rounded-xl mx-10 mt-4 mb-10">
        <div className="flex font-roboto justify-between px-6 pt-5  relative w-full">
          <p className="text-2xl font-bold text-gray-500">Trustee</p>{" "}
          <span className="absolute left-[7rem] w-auto text-white text-xs bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 px-1 py-0.5 rounded-lg">
            Edit Mode
          </span>
          <span
            className="px-2 py-1 border-green-600 border-2 rounded-lg bg-gradient-to-br hover:text-white hover:from-green-600 hover:shadow-lg drop-shadow-2xl- cursor-pointer transition-all ease-in-out duration-500 hover:shadow-green-300 flex gap-2  justify-center items-center font-medium hover:to-green-400"
            onClick={openTrusteeModal}
          >
            Add Trustee
            <CiSquarePlus size={25} />
          </span>
        </div>

        <div className=" flex justify-center px-4 py-2">
          <span className=" h-0.5 w-[99%] bg-gray-300"></span>
        </div>

        <div className="w-full z-0">
          <Trustee
            openEditTrusteeModal={openEditTrusteeModal}
            closeEditTrusteeModal={closeEditTrusteeModal}
          />
        </div>
      </div>
      <div className=" bg-slate-200 rounded-xl mx-10 mt-4 mb-10">
        <div className="flex font-roboto justify-between px-6 pt-5  relative w-full">
          <p className="text-2xl font-bold text-gray-500">Send Certificate</p>{" "}
          <span className="absolute left-[13rem] w-auto text-white text-xs bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 px-1 py-0.5 rounded-lg">
            Admin Mode
          </span>
         
        </div>

        <div className=" flex justify-center px-4 py-2">
          <span className=" h-0.5 w-[99%] bg-gray-300"></span>
        </div>

        <div className="w-full z-0">
          <EditCertificateDetails/>
        </div>
      </div>
      {isloading && (
        <div className=" h-full w-screen fixed z-50 bg-opacity-65   rounded-lg top-0 right-0 bg-gray-700 flex justify-center items-center">
          <HashLoader color="#eb9126" />
        </div>
      )}
      {isModalOpen && (
        <AddOurProject
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
      {isTrusteeModalOpen && (
        <AddTrustee
          className="z-50"
          isModalOpen={isTrusteeModalOpen}
          openModal={openTrusteeModal}
          closeModal={closeTrusteeModal}
        />
      )}
      {isEditTruteeModalOpen && (
        <EditTrustee
          className="z-50"
          isModalOpen={isEditTruteeModalOpen}
          openModal={openEditTrusteeModal}
          closeModal={closeEditTrusteeModal}
          TrusteeData={TrusteeData}
        />
      )}
      {isNewsModalOpen && (
        <CreateNews
          isModalOpen={isNewsModalOpen}
          openModal={openNewsModal}
          closeModal={closeNewsModal}
        />
      )}
      {isCertificateModalOpen && (
        <AddCertificate
          isModalOpen={isCertificateModalOpen}
          openModal={openCertificateModal}
          closeModal={closeCertificateModal}
        />
      )}

      {isEditProjectModalOpen && (
        <EditOurProjects
          isModalOpen={isEditProjectModalOpen}
          openModal={openEditProjectModal}
          closeModal={closeEditProjectModal}
          ProjectData={ProjectData}
        />
      )}
      {isEditNewModalOpen && (
        <EditNews
          isModalOpen={isEditNewModalOpen}
          openModal={openEditNewsModal}
          closeModal={closeEditNewsModal}
          NewsData={NewsData}
        />
      )}
      {isEditCertificateModalOpen && (
        <EditCertificate
          isModalOpen={isEditCertificateModalOpen}
          openModal={openEditCertificateModal}
          closeModal={closeEditCertificateModal}
          CertificateData={CertificateData}
        />
      )}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminEditPage;
