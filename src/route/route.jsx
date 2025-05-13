import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../mainLayout/MainLayOut";
import Home from "../pages/home/Home";
import About from "../pages/About";
import Skil from "../pages/Skil";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Services from "../pages/services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/services',
            element: <Services/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/skill',
            element: <Skil/>
        },
        {
            path: '/project',
            element: <Project/>
        },
        {
            path: '/contact',
            element: <Contact/>
        }
    ]
  },
]);
