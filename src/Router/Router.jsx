import React from "react";
import { createBrowserRouter, NavLink } from "react-router";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Page/Home/Home";
import AllApp from "../Page/AllApp/AllApp";
import InstallsApp from "../Page/InstallsApp/InstallsApp";
import DetlicsSingleApp from "../Page/DetlicsSingleApp/DetlicsSingleApp";
import AppLoder from "../Loder/AppLoder";
import imgad from "../assets/App-Error.png";
import { Link } from "lucide-react";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: (
      <div className="text-center">
        <div className="flex justify-center">
          <img className="mx-auto py-10 mt-10" src={imgad}></img>
        </div>
        <NavLink to={-1}>
          <button className="  shadow-2xl btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white  text-center  px-12 text-lg">
            Back to Home
          </button>
        </NavLink>
      </div>
    ),
    hydrateFallbackElement: <AppLoder></AppLoder>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/trindingApp.json"),
        Component: Home,
      },
      {
        path: "/allApp",
        loader: () => fetch("/allapp.json"),
        Component: AllApp,
      },
      {
        path: "/install",
        loader: () => fetch("/allapp.json"),
        Component: InstallsApp,
      },
      {
        path: "/appDetlics/:id",
        loader: () => fetch("/allapp.json"),
        Component: DetlicsSingleApp,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
