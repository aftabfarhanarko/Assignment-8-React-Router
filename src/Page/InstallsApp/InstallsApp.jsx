import React, { useState } from "react";
import { getItem } from "../../Components/VanilaJS/vanilajs";
import SingleInstal from "./SingleInstal";
import InstalPageError from "../InstalPageError/InstalPageError";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InstallsApp = () => {
  const [myApp, setMyApp] = useState(() => getItem());

  return (
    <div className="max-w-[1250px] mx-auto">
      <h1 className="text-5xl font-semibold text-center mt-15">
        Your Installed Apps
      </h1>
      <p className=" text-center text-gray-700 mt-3 text-lg">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between items-center mt-10 md-15">
        <h2 className="text-xl font-medium  ">({myApp.length}) Apps Found</h2>
        <details className="dropdown">
          <summary className="btn m-1">open or close</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>
      {myApp.length === 0 ? (
        <InstalPageError></InstalPageError>
      ) : (
        <>
          {myApp.map((apps) => (
            <SingleInstal
              apps={apps}
              key={apps.id}
              setMyApp={setMyApp}
            ></SingleInstal>
          ))}
        </>
      )}
      <ToastContainer position="top-center" />
    </div>
  );
};

export default InstallsApp;
