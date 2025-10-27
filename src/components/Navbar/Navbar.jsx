import React from "react";
import "../../index.css";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { HousePlus } from "lucide-react";
import { Webhook } from "lucide-react";
import { FaBeer } from "react-icons/fa";

const Navbar = () => {
  const link = (
    <>
      <NavLink to="/" className="flex  items-center">
        <span className="text-black">
          <HousePlus />
        </span>
        <li className="m-2 text-lg font-medium ">Home</li>
      </NavLink>

      <NavLink to="/allApp" className="flex  items-center ml-3">
        <Webhook />
        <li className="m-2 text-lg font-medium ">Apps</li>
      </NavLink>

      <NavLink to="/install" className="flex  items-center ml-3">
        <FaBeer />
        <li className="m-2 text-lg font-medium ">Installation</li>
      </NavLink>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-[1250px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-center menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a
            href="/"
            className="text-purple-600 font-semibold btn-ghost text-xl flex items-center"
          >
            <img className="w-[60px]" src={logo}></img>
            HERO.IO
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">{link}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/auth/login">
           <button className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white border-black">
            Login
           </button>
          </Link>

      
        </div>
      </div>
    </div>
  );
};

export default Navbar;
