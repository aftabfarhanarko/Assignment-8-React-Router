import React, { useState } from "react";
import { getItem } from "../../Components/VanilaJS/vanilajs";
import SingleInstal from "./SingleInstal";
import InstalPageError from "../InstalPageError/InstalPageError";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const InstallsApp = () => {
  const [myApp, setMyApp] = useState(() => getItem());

  const handleSort = (names) => {
    if (names === "Low-High") {
      const sortByInstallApp = [...myApp].sort((a, b) => a.size - b.size);
      setMyApp(sortByInstallApp);
    }
    if (names === "High-Low") {
      const sortLowToHighApp = [...myApp].sort((a, b) => b.size - a.size);
      setMyApp(sortLowToHighApp);
    }
  };

  return (
    <div className="max-w-[1250px] mx-auto">
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold text-center mt-15 text-gray-700">
          Your Installed Apps
        </h1>
        <p className=" text-center text-gray-700 mt-3 text-lg">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center mt-10 md-15 px-2 md:px-0">
        <h2 className="text-xl font-medium border-b-2 pb-1 border-gray-600 ">
          ({myApp.length}) Apps Found
        </h2>

        <select className="select select-bordered w-[200px]">
          Download
          <option onClick={() => handleSort("Low-High")} value="none">
            Down Low-High
          </option>
          <option onClick={() => handleSort("High-Low")} value="price-asc">
            Down High-Low
          </option>
        </select>
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
;
