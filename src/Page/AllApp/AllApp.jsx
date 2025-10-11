import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import DisplayAllApp from "./DisplayAllApp";
import { Search } from "lucide-react";
import NotFound from "./NotFound";

const AllApp = () => {
  const appData = useLoaderData();
  const [search, setSearch] = useState("");

  const trimUser = search.trim().toLowerCase();
  const conDItions = trimUser
    ? appData.filter((app) => app.title.toLowerCase().includes(trimUser))
    : appData;

  return (
    <div className="max-w-[1250px] mx-auto ">
      <div className="text-center mt-15">
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-700">
          Our All Applications
        </h1>
        <p className="text-md md:text-lg mt-3  text-gray-600">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center mt-10 px-2 md:px-0">
        <h1 className="text-xl font-semibold">({appData.length}) Apps Found</h1>
        <form>
          <label className="input">
            <Search className="w-5" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              name="search"
              required
              placeholder="Search"
            />
          </label>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3 md:px-0">
        {
          conDItions.length === 0 ? <NotFound></NotFound> : (
            conDItions.map((data) => (
             <DisplayAllApp data={data} key={data.id}></DisplayAllApp>
            ))
          )
        }
      </div>
    </div>
  );
};

export default AllApp;
