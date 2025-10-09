import React, { Suspense } from "react";
import Display from "./Display";
import TrindingApp from "../TrindingApp/TrindingApp";
import { Link, useLoaderData } from "react-router";
import AppLoder from "../../Loder/AppLoder";

const Home = () => {
  const appData = useLoaderData();
  console.log(appData);

  return (
    <div>
      <Display></Display>
      <div className="max-w-[1250px] mx-auto">
        <div className="text-center mt-20">
          <h1 className="text-4xl md:text-5xl font-semibold">Trending Apps</h1>
          <p className="text-lg text-gray-400 mt-3">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2 gap-7 px-4 md:px-0">
          {appData.map((data) => (
            <Suspense fallback={<AppLoder></AppLoder>}>
              <TrindingApp data={data}></TrindingApp>
            </Suspense>
          ))}
        </div>
        <div className="flex justify-center mt-15 ">
          <Link to="">
          <button className="  shadow-2xl btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white  text-center  px-12 text-lg">
            Show All
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
