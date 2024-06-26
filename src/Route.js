import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "./page/Contact";
import About from "./page/About";
import Projects from "./page/Projects";
import Project1 from "./page/Project files/Project1";
import Project2 from "./page/Project files/Project2";
import Project3 from "./page/Project files/Project3";
import Project4 from "./page/Project files/Project4";


export const router =createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path:"/projects",
        element: <Projects />
    },
    {
        path:"/project1",
        element: <Project1 />
    },
    {
        path:"/project2",
        element: <Project2 />
    },
    {
        path:"/project3",
        element: <Project3 />
    },
    {
        path:'/project4',
        element: <Project4 />
    }
])