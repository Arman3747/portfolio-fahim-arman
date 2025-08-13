import React from 'react';

import { createBrowserRouter } from "react-router";
import Home from '../components/Home';
import ProjectBridge from '../components/ProjectBridge';
import ProjectRoomies from '../components/ProjectRoomies';
import ProjectBloodConnect from '../components/ProjectBloodConnect';

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
                path: "/projectRoomiesdfsd",
                element: <div>Hello World</div>,
            }
        ]
    },
    {
        path: "/projectBridge",
        element: <ProjectBridge></ProjectBridge>,
    },
    {
        path: "/projectRoomies",
        element: <ProjectRoomies></ProjectRoomies>
    },
    {
        path: "/projectBloodConnect",
        element: <ProjectBloodConnect></ProjectBloodConnect>
    },

]);

export default Router;