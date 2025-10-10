import React, { Suspense, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downlod from "../../assets/icon-downloads.png";
import reating from "../../assets/icon-ratings.png";
import like from "../../assets/icon-review.png";
import { setItems } from "../../Components/VanilaJS/vanilajs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetlicsSingleApp = () => {
  const [buton, setButon] = useState(false);
  const { id } = useParams();
  const convartId = parseInt(id);
  const data = useLoaderData();
  const findApp = data.find((app) => app.id === convartId);

  const handelButton = (app) => {
    setButon(true);
    setItems(app);

   toast.success("✅ App installed successfully!", {
      position: "top-center",
      autoClose: 500, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };
  return (
    <div className="max-w-[1250px] mx-auto ">
      <div className="flex gap-10 md:gap-20 p-5 bg-base-300 mt-7 rounded-lg">
        <div>
          <img className="h-[280px] rounded-lg" src={findApp.image}></img>
        </div>
        <div className="w-[70%]">
          <div>
            <h1 className="text-xl md:text-3xl font-semibold">
              Name : {findApp.title}
            </h1>
            <p className="text-[14px] text-gray-700">
              Developed by {findApp.companyName}
            </p>
          </div>
          <div className="divider mt-2"></div>
          <div className="flex gap-20">
            <div className="justify-center flex text-center items-center ">
              <div className="flex flex-col items-center">
                <img className="" src={downlod}></img>
                <p className="text-md mt-2 font-medium text-gray-700">
                  Downloads
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 text-purple-600">
                  {findApp.downloads}
                </h2>
              </div>
            </div>

            <div className="justify-center flex text-center items-center ">
              <div className="flex flex-col items-center">
                <img className="" src={reating}></img>
                <p className="text-md mt-2 font-medium  text-gray-700">
                  Average Ratings
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 text-purple-600">
                  {findApp.ratingAvg}
                </h2>
              </div>
            </div>

            <div className="justify-center flex text-center items-center ">
              <div className="flex flex-col items-center">
                <img className="" src={like}></img>
                <p className="text-md mt-2 font-medium  text-gray-700">
                  Total Reviews
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 text-purple-600">
                  {findApp.reviews}K
                </h2>
              </div>
            </div>
          </div>
          <button
            disabled={buton}
            onClick={() => handelButton(findApp)}
            className="btn btn-accent px-6 text-white text-lg font-semibold mt-5 shadow-2xl"
          >
            {buton ? "Install" : `Install Now (${findApp.size} MB)`}
          </button>
        </div>
      </div>

      <div className="divider mt-5"></div>
      {/* {
        findApp.ratings.map((app, index) => <Suspense>
            <Chart key={index} app={app}></Chart>
        </Suspense>)
      } */}
      <div className="divider mt-5"></div>
      <div>
        <h1 className="text-xl font-semibold ">Description : </h1>
        <div className=" space-x-6">
          <p className=" leading-relaxed text-gray-700 text-lg mt-7 ">
            {findApp.description}
          </p>
        </div>
      </div>
       <ToastContainer position="top-center" />
    </div>
    
  );
};

export default DetlicsSingleApp;
