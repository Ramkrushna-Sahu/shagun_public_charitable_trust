import React, { useCallback, useEffect, useState, useMemo } from "react";
import DataContext from "./DataContext";
import { db } from "../../Components/Firebase/Firebase";
import { getDocs, query, collection } from "firebase/firestore";

function DataState(props) {
  const [newsData, setNewsData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [certificateData, setCertificateData] = useState([]);
  const [trusteeData, setTrusteeData] = useState([]);
  const newsDataRetrival = async () => {
    console.log("Start");
    const q = query(collection(db, "news"));
    const querySnapshot = await getDocs(q);
    const newData = [];
    querySnapshot.forEach((doc) => {
      newData.push({ id: doc.id, ...doc.data() });
      // console.log(doc.id, " => ", doc.data());
    });
    setNewsData(newData);
  };

  const projectDataRetrival = async () => {
    console.log("Start");
    const q = query(collection(db, "projects"));
    const querySnapshot = await getDocs(q);
    const newData = [];
    querySnapshot.forEach((doc) => {
      newData.push({ id: doc.id, ...doc.data() });
    });
    setProjectData(newData);
  };

  const certificateDataRetrival = async () => {
    const q = query(collection(db, "certificate"));
    const querySnapshot = await getDocs(q);
    const newData = [];
    querySnapshot.forEach((doc) => {
      newData.push({ id: doc.id, ...doc.data() });
    });
    setCertificateData(newData);
  };
  const trusteeDataRetrival = async () => {
    const q = query(collection(db, "trustee"));
    const querySnapshot = await getDocs(q);
    const newData = [];
    querySnapshot.forEach((doc) => {
      newData.push({ id: doc.id, ...doc.data() });
    });
    setTrusteeData(newData);
  };

  return (
    <DataContext.Provider
      value={{
        newsData,
        newsDataRetrival,
        projectData,
        projectDataRetrival,
        certificateData,
        certificateDataRetrival,
        trusteeData,
        trusteeDataRetrival
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default DataState;
