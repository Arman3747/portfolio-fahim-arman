import React from 'react';

import { createBrowserRouter } from "react-router";
import Home from '../components/Home';
import ProjectBridge from '../components/ProjectBridge';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/home',
                element: <Home></Home>
            },
            {
                path: "/projectRoomies",
                element: <div>Hello World</div>,
            }
        ]
    },
    {
        path: "/projectBridge",
        element: <ProjectBridge></ProjectBridge>,
    },

]);

export default Router;