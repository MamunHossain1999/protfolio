import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../mainLayout/MainLayOut";
import Home from "../pages/home/Home";
import Project from "../pages/Project";
import Services from "../pages/services/Services";
import Skills from "../component/skills/Skills";
import About from "../component/about/About";
import Contact from "../component/contact/Contact";

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
            path: '/skills',
            element: <Skills/>
        },
        {
            path: '/about',
            element: <About/>
        },
        
        {
            path: '/projects',
            element: <Project/>
        },
        {
            path: '/contact',
            element: <Contact/>
        }
    ]
  },
]);
