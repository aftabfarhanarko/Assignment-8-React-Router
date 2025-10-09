import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Home/Root/Root';
import Error from '../Error/Error';

export const route = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        errorElement: Error,
        children:[
            {

            }
        ]
    }
])