import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import AppLoder from "../Loder/AppLoder";

const PrivetRouter = ({ children }) => {
  const { user, loder } = useContext(AuthContext);
  const locations = useLocation();

  if (loder) {
    return <AppLoder></AppLoder>;
  } else if (user) {
    return children;
  }
  return <Navigate state={locations.pathname} to="/auth/login"></Navigate>;
};

export default PrivetRouter;
