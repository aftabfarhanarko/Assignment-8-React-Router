import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Page/Home/Home";
import AllApp from "../Page/AllApp/AllApp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
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
    ],
  },
]);
