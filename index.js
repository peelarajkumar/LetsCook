import React from "react";
import ReactDom from "react-dom/client";
import MasterCom from "./CookAppComponents/MasterComponent";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import AboutUs from "./CookAppComponents/About";
import Profile from "./CookAppComponents/Profile";
import Reciepes from "./CookAppComponents/Reciepes";
import ErrorPage from "./CookAppComponents/ErrorPage";

const AppRouter = createBrowserRouter([
    {
        path:"/home",
        element:<MasterCom/>
    },{
        path:"/",
        element:<MasterCom/>,
        errorElement:<ErrorPage/>
    },{
        path:"/about",
        element:<AboutUs/>
    },
    {
        path:"/recipes",
        element:<Reciepes/>
    },
    {
        path:"/profile",
        element:<Profile/>
    },

])

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);