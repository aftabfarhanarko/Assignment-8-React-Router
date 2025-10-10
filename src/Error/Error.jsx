import React from "react";
import error from "../assets/error-404.png";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="py-20">
      <div className="flex justify-center items-center text-center">
        <div>
          <img className="w-[500px]" src={error}></img>
          <h1 className="text-5xl font-semibold mt-7">Oops, page not found!</h1>
          <p className="text-lg text-gray-400 mt-4">
            The page you are looking for is not available.
          </p>
          <Link to="/">
            <button className="mt-5  shadow-2xl btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white  text-center  px-12 text-lg">
              Go Back!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
