import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestuarantMenu from "./components/RestuarantMenu";
import Shimmer from "./components/Shimmer";

const Instamart=lazy(()=>import("./components/Instamart"));
const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: ([
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            }, {
                path: "/contact",
                element: <Contact />
            }, {
                path: "/restuarant/:id",
                element: <RestuarantMenu />
             },{
                path: "/instamart",
                element: <Suspense fallback={<Shimmer/>}><Instamart /></Suspense>
             }
        ])
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
