import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../mainLayout/MainLayOut";
import Home from "../pages/Home";
import About from "../pages/About";
import Skil from "../pages/Skil";
import Project from "../pages/Project";
import Contact from "../pages/Contact";

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
