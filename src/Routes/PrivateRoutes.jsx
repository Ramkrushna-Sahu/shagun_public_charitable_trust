import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(true);

  const handlePasswordPrompt = () => {
    const enteredPassword = prompt("Please enter your password:");
    if (enteredPassword === "Shagun@2024") {
   
      alert(enteredPassword);
      
      setAuthenticated(true);
      alert(authenticated);
    } else {
      setAuthenticated(false);
    }
  };

  useEffect(() => {handlePasswordPrompt()}, []);

  return authenticated ? <Outlet /> : <Navigate to="/access-denied" />;
};

export default PrivateRoutes;
