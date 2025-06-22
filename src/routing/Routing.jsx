import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContactUs from "../pages/ContactUs";
import Payout from "../pages/Payout";
import AiBanking from "../pages/AiBanking";
import Products from "../pages/Products";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import HomeLayout from '../components/HomeLayout'
import About from "../pages/About";

const Routing = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout with NavBar and footer
    children: [
      { path: "", element: <HomeLayout /> }, // default page
      { path: "payout", element: <Payout /> },
      { path: "banking", element: <AiBanking /> },
      { path: "products", element: <Products /> },
      { path: "contactus", element: <ContactUs /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);

export { Routing };
