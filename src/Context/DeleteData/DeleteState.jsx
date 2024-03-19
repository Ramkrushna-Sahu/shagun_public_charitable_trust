import React from "react";
import DeleteDataContext from "./DeleteDataContext";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../../Components/Firebase/Firebase";
import { deleteObject, ref } from "firebase/storage";
const DeleteState = ({ children }) => {
  const deleteNews = async (data) => {
    await deleteDoc(doc(db, "news", data.id));
    const banner = ref(storage, "news/" + data.title);
    await deleteObject(banner).then((res) => {});
  };
  const deleteProject = async (data) => {
    // alert(data.id);
    // const res=await deleteDoc(doc(db, "projects", data.id))
    // const banner = ref(storage, "projects/" + data.title);
    // await deleteObject(banner).then((res) => {});
    // console.log(res)
    // alert("Project deleted successfully");

    try {
      alert(data.id); 
      await deleteDoc(doc(db, "projects", data.id));

      const bannerRef = ref(storage, "projects/" + data.title);
      await deleteObject(bannerRef);

      console.log("Project and corresponding storage object deleted successfully");
      alert("Project deleted successfully");
  } catch (error) {
      console.error("Error deleting project:", error);
      alert("Error deleting project: " + error.message);
  }
  };
  const deleteCertificate = async (data) => {
    await deleteDoc(doc(db, "certificate", data.id));
    const banner = ref(storage, "certificate/" + data.title);
    await deleteObject(banner).then((res) => {});
  };
  const deleteTrustee = async (data) => {
    await deleteDoc(doc(db, "trustee", data.id));
    const banner = ref(storage, "trustee/" + data.name);
    await deleteObject(banner).then((res) => {});
  };
  return (
    <DeleteDataContext.Provider
      value={{
        deleteNews,
        deleteProject,
        deleteCertificate,
        deleteTrustee
      }}
    >
      {children}
    </DeleteDataContext.Provider>
  );
};

export default DeleteState;
