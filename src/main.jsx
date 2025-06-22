import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Routing } from "./routing/Routing";
import { AuthProvider } from "./context/AuthContext"; 
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider> 
      <RouterProvider router={Routing} />
    </AuthProvider>
  </React.StrictMode>
);
