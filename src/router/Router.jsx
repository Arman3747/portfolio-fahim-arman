import React from 'react';

import { createBrowserRouter } from "react-router";
import Home from '../components/Home';
import ProjectBridge from '../components/ProjectBridge';
import ProjectRoomies from '../components/ProjectRoomies';
import ProjectBloodConnect from '../components/ProjectBloodConnect';
import AllProjects from '../components/AllProjects';
import ProjectNextProduct from '../components/ProjectNextProduct';
import ErrorPage from '../components/ErrorPage';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
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
        path: "/allProjects",
        element: <AllProjects></AllProjects>,
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
    {
        path: "/projectNextProduct",
        element: <ProjectNextProduct></ProjectNextProduct>
    },

]);

export default Router;