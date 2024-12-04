import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestuarantMenu from "./components/RestuarantMenu";
//import Shimmer from "./components/Shimmer";
//import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Carts from "./components/Carts";

//const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
    // const [user, setUser] = useState({
    //     name: "Bittu",
    //     email: "bittu@gmail.com"
    // });

    return (
        <Provider store={store}>
            {/* <UserContext.Provider value={{ user, setUser }}> */}
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-grow pt-16">
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            {/* </UserContext.Provider> */}
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "restuarant/:id",
                element: <RestuarantMenu />,
            },
            // {
            //     path: "instamart",
            //     element: (
            //         <Suspense fallback={<Shimmer />}>
            //             <Instamart />
            //         </Suspense>
            //     ),
            // },
            {
                path: "cart",
                element: <Carts />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
