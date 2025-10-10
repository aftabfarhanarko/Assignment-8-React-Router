import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import DisplayAllApp from "./DisplayAllApp";

const AllApp = () => {
  const appData = useLoaderData();
  
  const handelSearch = (e) => {
    const targesdt = e.target.search.value;
    console.log(targesdt);
    
  }

  return (
    <div className="max-w-[1250px] mx-auto ">
      <div className="text-center mt-15">
        <h1 className="text-5xl font-semibold">Our All Applications</h1>
      <p className="text-lg mt-3  text-gray-700">Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className="flex justify-between items-center mt-10">
        <h1 className="text-xl font-semibold">({appData.length}) Apps Found</h1>
     <form onSubmit={handelSearch}>
         <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" name="search"  required placeholder="Search" />
      </label>
     </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3 md:px-0">
        {appData.map((data) => (
          <Suspense fallback={<h1>Loding......</h1>}>
            <DisplayAllApp data={data} key={data.id}></DisplayAllApp>
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default AllApp;
