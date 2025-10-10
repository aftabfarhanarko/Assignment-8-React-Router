import React, { useState } from "react";
import { getItem } from "../../Components/VanilaJS/vanilajs";
import SingleInstal from "./SingleInstal";

const InstallsApp = () => {
  const items = getItem();
  const [myApp, setMyApp] = useState();
  // setMyApp(items);
  return (
    <div className="max-w-[1250px] mx-auto">
      <h1 className="text-5xl font-semibold text-center mt-15">
        Your Installed Apps
      </h1>
      <p className=" text-center text-gray-700 mt-3 text-lg">
        Explore All Trending Apps on the Market developed by us
      </p>
      {items.map((apps) => (
        <SingleInstal apps={apps} key={apps.id}></SingleInstal>
      ))}
    </div>
  );
};

export default InstallsApp;
