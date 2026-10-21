import React from 'react';

import { createBrowserRouter } from "react-router";
import Home from '../components/Home';
import ProjectBridge from '../components/ProjectBridge';
import ProjectRoomies from '../components/ProjectRoomies';
import ProjectBloodConnect from '../components/ProjectBloodConnect';
import AllProjects from '../components/AllProjects';
import ProjectNextProduct from '../components/ProjectNextProduct';
import ErrorPage from '../components/ErrorPage';
import ProjectBookNest from '../components/ProjectBookNest';
import ProjectOpenNotes from '../components/ProjectOpenNotes';

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
    {
        path: "/projectBookNest",
        element: <ProjectBookNest></ProjectBookNest>
    },
    {
        path: "/projectOpenNotes",
        element: <ProjectOpenNotes></ProjectOpenNotes>
    },
]);

export default Router;