import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Page/Home/Home";
import AllApp from "../Page/AllApp/AllApp";
import InstallsApp from "../Page/InstallsApp/InstallsApp";
import DetlicsSingleApp from "../Page/DetlicsSingleApp/DetlicsSingleApp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
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
         children:[
          {
            path:"*",
            element:<h2>No Data Found</h2>
          }
        ]
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
        children:[
          {
            path:"*",
            element:<h2>No Data Found</h2>
          }
        ]
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
