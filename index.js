import React from "react";
import ReactDom from "react-dom/client";
import Header from "./CookAppComponents/HeaderComponent";
import BodyComp from "./CookAppComponents/BodyComponent";
import MasterCom from "./CookAppComponents/MasterComponent";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import AboutUs from "./CookAppComponents/About";
import Profile from "./CookAppComponents/Profile";
import Reciepes from "./CookAppComponents/Reciepes";
import ErrorPage from "./CookAppComponents/ErrorPage";

// React-router-dom is js library , which gives us routing powers in React npm install react-router-dom , import createRouterBrowseer and others
// createBrowserRouter([{path:"/",element:<Home/>}])
// To render the UI according to the route(Path) , createBrowserRouter creates the paths with elements (Childern Routes) 
// Once the Paths are configured , we need to provide them using RouterProvider component and its params as the paths.
// <Outlet/> component renders according to the path configured

const AppLayout = ()=>{
    return(<div>
        <Header/> {/* Common Component / Page*/}
        <Outlet/> {/* conditional Rendered} */}
    </div>)
}

const AppRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<BodyComp/>,
                errorElement:<ErrorPage/>
            },{
            path:"/home",
            element:<BodyComp/>,
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
        },]

    }
])

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);