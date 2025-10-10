import React, { useState } from "react";
import { getItem } from "../../Components/VanilaJS/vanilajs";
import SingleInstal from "./SingleInstal";
import InstalPageError from "../InstalPageError/InstalPageError";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import download from '../../assets/download.png'

const InstallsApp = () => {
  const [myApp, setMyApp] = useState(() => getItem());


  const handleSort =(names) =>{
    if(names === "Low-High"){
      const sortByInstallApp = [...myApp].sort((a,b) => a.size - b.size   );
      setMyApp(sortByInstallApp);
    }
     if(names === "High-Low"){
      const sortLowToHighApp = [...myApp].sort((a,b) => b.size - a.size);
      setMyApp(sortLowToHighApp);
    }
    
  }


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
        <h2 className="text-xl font-medium border-b-2 pb-1 border-gray-600 ">({myApp.length}) Apps Found</h2>


        <details className="dropdown text-center">
          <summary className="btn m-1  text-gray-600 ">
            Sort By Size
            <img src={download}></img>
          </summary>

          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 max-w-52 p-2 shadow-sm ">
            <li className="font-medium">
              <a onClick={() => handleSort("Low-High")}>Down Low-High</a>
            </li>
            <li className="font-medium">
              <a onClick={() => handleSort("High-Low")}>Down High-Low</a>
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
