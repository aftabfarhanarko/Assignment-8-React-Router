import React, { Suspense } from "react";
import Display from "./Display";
import TrindingApp from "../TrindingApp/TrindingApp";
import { Link } from "react-router";
import AppLoder from "../../Loder/AppLoder";
import { TrendingUp } from 'lucide-react';
import useProducts from "../../Components/LodingSpiner/lodingSpiner";


const Home = () => {
   const {producat}  =useProducts()
   const slicesData = producat.slice(0,8);

  return (
    <div>
      <Display></Display>
      <div className="max-w-[1250px] mx-auto">
        <div className="text-center mt-20">
         <div className="flex items-center  justify-center gap-4">
           <h1 className="text-4xl md:text-5xl font-semibold text-gray-700">Trending Apps</h1>
           <span><TrendingUp className="h-15 w-15 text-purple-700" /></span>
         </div>
          <p className="text-lg  text-gray-700 mt-3">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 gap-7 px-4   md:px-2 lg:px-0">
          {slicesData.map((data) => (
            <Suspense fallback={<AppLoder></AppLoder>}>
              <TrindingApp data={data} key={data.id}></TrindingApp>
            </Suspense>
          ))}
        </div>
        <div className="flex justify-center mt-15 ">
          <Link to="/allApp">
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
