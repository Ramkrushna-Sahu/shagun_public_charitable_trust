import React, { useState } from "react";
import LoadContext from "./LoadingContext";

const LoadingState = ({ children }) => {
  const [isloading, setLoading] = useState(false);
  const [homeLoad, setHomeLoad] = useState(false);

  const openHome = () => {
    setHomeLoad(true);
  };
  const closeHome = () => {
    setHomeLoad(false);
  };
  const openSetLoading = () => {
    setLoading(true);
  };
  const closeSetLoading = () => {
    setLoading(false);
  };

  return (
    <LoadContext.Provider
      value={{ openSetLoading, closeSetLoading, isloading,openHome, closeHome, homeLoad }}
    >
      {children}
    </LoadContext.Provider>
  );
};

export default LoadingState;
