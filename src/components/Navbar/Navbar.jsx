import React, { useContext, useEffect, useState } from "react";
import "../../index.css";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { HousePlus, Webhook, Sun, Moon, LayoutDashboard, User, Box } from "lucide-react";
import { FaBeer } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handelLogOut = () => {
    logOutUser().then(() => {
      toast.success("Logout User Successfully");
    });
  };

  const link = (
    <>
      <NavLink to="/" className="flex items-center">
        <span className="">
          <HousePlus className="w-5 h-5" />
        </span>
        <li className="m-2 text-lg font-medium">Home</li>
      </NavLink>

      <NavLink to="/allApp" className="flex items-center ml-3">
        <Webhook className="w-5 h-5" />
        <li className="m-2 text-lg font-medium">Apps</li>
      </NavLink>

      <NavLink to="/install" className="flex items-center ml-3">
        <FaBeer className="w-5 h-5" />
        <li className="m-2 text-lg font-medium">Installation</li>
      </NavLink>

      {user && (
        <>
           <NavLink to="/dashbord" className="flex items-center ml-3">
            <LayoutDashboard className="w-5 h-5" />
            <li className="m-2 text-lg font-medium">Dashboard</li>
          </NavLink>
           <NavLink to="/my-profile" className="flex items-center ml-3">
            <User className="w-5 h-5" />
            <li className="m-2 text-lg font-medium">Profile</li>
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-center menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link
            to="/"
            className="text-primary font-bold btn-ghost text-2xl flex items-center gap-2"
          >
            <Box className="w-8 h-8 fill-primary/20" />
            NEXIO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">{link}</ul>
        </div>
        <div className="navbar-end flex items-center gap-4">
          <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
            {theme === "light" ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
          </button>

          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/my-profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handelLogOut}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center">
              <Link to="/auth/login">
                <button className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white border-none">
                  Login
                </button>
              </Link>
              <Link to="/auth/rigister" className="hidden md:block">
                <button className="ml-4 btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white border-none">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
