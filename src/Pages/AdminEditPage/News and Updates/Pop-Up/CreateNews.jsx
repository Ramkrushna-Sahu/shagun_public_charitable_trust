import React, { useContext, useState } from "react";
import Modal from "../../../../Components/Modal/Modal";
import { IoClose } from "react-icons/io5";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, collection, setDoc, updateDoc } from "firebase/firestore";
import { storage, db } from "../../../../Components/Firebase/Firebase";
import DataContext from "../../../../Context/FetchData/DataContext";
import LoadContext from "../../../../Context/LoadingAnimation/LoadingContext";
const CreateNews = ({ openModal, closeModal, isModalOpen }) => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState();
  const [data, setData] = useState({
    title: "",
    description: "",
    option: "",
    date: "",
    imageUrl: "",
  });
  const [imageError, setImageError] = useState();
  const [titleError, setTitleError] = useState();
  const [descriptionError, setDescriptionError] = useState();
  const [dateError, setDateError] = useState();
  const { newsDataRetrival } = useContext(DataContext);
  const {isloadinhg, openSetLoading, closeSetLoading} = useContext(LoadContext)
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
  const handleImageUpload = (event) => {
    let temp = event.target.files[0];
    setFile(event.target.files[0]);
    if (temp) {
      console.log(temp);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(temp);
      setImageError("");
    }
  };

  const clearImage = () => {
    setImage(null);
  };
  const validate = () => {
    let valid = true;
    if (!image) {
      setImageError("Upload an Image");
      valid = false;
    } else {
      setImageError("");
    }
    if (!data.title.trim()) {
      setTitleError("Enter the title");
      valid = false;
    } else {
      setTitleError("");
    }
    if (!data.description.trim()) {
      setDescriptionError("Enter the description");
      valid = false;
    } else {
      setDescriptionError("");
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validate()) {
        closeModal();
        openSetLoading();
        const metadata = {
          contentType: file.type, // Set content type to the file's MIME type
          // Add any other metadata properties you want to include
        };
        const banner = ref(storage, "news/" + data.title);
        await uploadBytes(banner, file, metadata).then(async (snapshot) => {
          await getDownloadURL(snapshot.ref).then((downloadUrl) => {
            console.log(downloadUrl);
            data.imageUrl = downloadUrl;
          });
        });

        const newsDocRef = doc(collection(db, "news"));
        await setDoc(newsDocRef, {
          title: data.title,
          description: data.description,
          option: data.option,
          date: data.date,
          imageUrl: data.imageUrl,
        });

        // Get the ID of the newly created document
        const docId = newsDocRef.id;

        // Update the document with the ID
        await updateDoc(newsDocRef, { id: docId });
        await newsDataRetrival();
        closeSetLoading();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <form className="">
            <div className="flex md:flex-row flex-col justify-center items-center">
              <div className="flex items-center justify-center xl:w-[60%] w-full md:my-0 my-4 px-5 relative -z-0">
                <div className="flex flex-col justify-center items-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-[15rem] border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-slate-200 hover:bg-white py-3"
                  >
                    {image ? (
                      <>
                        <img
                          src={image}
                          alt="Uploaded"
                          className="h-52 md:w-48 object-cover rounded-lg py-2"
                        />
                        <div className="bg-gray-400 absolute -top-2 right-2 p-1 rounded-full z-10">
                          <IoClose
                            className="text-red-700 "
                            size={15}
                            onClick={clearImage}
                          />
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 xl:text-sm text-xs text-gray-500 dark:text-gray-400 text-center">
                          <span className="font-semibold ">
                            Click to upload
                          </span>{" "}
                          <br />
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                          SVG, PNG, JPG or GIF
                        </p>
                      </div>
                    )}
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={handleImageUpload}
                      required
                    />
                  </label>
                  {imageError && (
                    <p className="text-red-600 text-sm">{imageError}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col w-full my-5 md:mx-5 mx-0">
                <div className="relative">
                  <input
                    type="text"
                    id="firstname"
                    className="block w-full px-2.5 py-2.5 text-sm bg-transparent rounded-lg border-2 border-gray-400 text-black hover:shadow-sm hover:shadow-slate-200 focus:outline-none focus:ring-0 focus:border-orange-600 peer hover:border-orange-600 dark:focus:border-orange-600 peer-hover:shadow-orange-500 peer-focus:shadow-orange-500 "
                    placeholder="Title"
                    minLength={4}
                    value={data.title}
                    name="title"
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="firstname"
                    className="absolute text-sm  text-black  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-200  px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[50%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Title
                  </label>
                </div>
                {titleError && (
                  <p className="text-red-600 text-sm mx-1">{titleError}</p>
                )}
                <div className="relative mt-2">
                  <textarea
                    id="description"
                    className="block w-full px-2.5 py-2.5 text-sm bg-transparent rounded-lg border-2 border-gray-400 text-black hover:shadow-sm hover:shadow-slate-200 focus:outline-none focus:ring-0 focus:border-orange-600 peer hover:border-orange-600 dark:focus:border-orange-600 peer-hover:shadow-orange-500 peer-focus:shadow-orange-500"
                    placeholder="Description"
                    minLength={4}
                    rows={6}
                    style={{ resize: "none" }}
                    value={data.description}
                    name="description"
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="description"
                    className="absolute text-sm  text-black  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-200  px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[15%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 pointer-events-none"
                  >
                    Description
                  </label>
                </div>
                {descriptionError && (
                  <p className="text-sm text-red-600 mx-1">
                    {descriptionError}
                  </p>
                )}
                <div className="flex md:flex-row flex-col justify-between items-center mt-2 w-full gap-2">
                  <div className="w-full ">
                    <select
                      className=" bg-transparent appearance-none border-2 border-gray-400 hover:border-orange-600 rounded-lg py-1 px-2 outline-none text-black text-center w-full"
                      value={data.option}
                      name="option"
                      onChange={handleChange}
                    >
                      <option
                        value="Choose Option"
                        className=" bg-slate-200 text-black text-left"
                      >
                        Choose Option
                      </option>
                      <option
                        value="Upcoming Project"
                        className=" bg-slate-200 text-black text-left"
                      >
                        Upcoming Project
                      </option>

                      <option
                        value="Project Completed"
                        className=" bg-slate-200 text-black text-left"
                      >
                        Project Completed
                      </option>
                    </select>
                  </div>

                  <div className="md:mt-0 mt-2  w-full ">
                    <input
                      type="date"
                      className="bg-transparent border-2 border-gray-400 hover:border-orange-600 rounded-lg py-1 px-2 outline-none text-black text-start  w-full cursor-pointer"
                      value={data.date}
                      onChange={handleChange}
                      name="date"
                    />
                  </div>
                </div>
                {dateError && (
                  <p className="text-red-600 text-sm mx-1 flex justify-start md:justify-end ">
                    {dateError}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-row  justify-end items-end">
              <button
                className="mx-3 bg-orange-500 px-14 py-2 hover:bg-orange-600 text-white rounded-md"
                onClick={handleSubmit}
              >
                Publish
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default CreateNews;
