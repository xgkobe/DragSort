/*
 * @Description: 
 * @Author: xuguang
 * @Date: 2023-04-07 20:03:12
 */
import React, {lazy} from "react";
import Home from '@/home';
// const Home = lazy(() => import("@/Home"));

const About = lazy(() => import("@/About"));

const routes = [
    { 
        path: "/home", 
        element: <Home />
    },
    { 
        path: "/about", 
        element: <About />
    },
]

export default routes;