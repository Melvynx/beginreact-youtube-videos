import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { BeginReactLayout } from "./BeginReactLayout.jsx";
import "./index.css";
import { router } from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BeginReactLayout>
    <RouterProvider router={router} />
  </BeginReactLayout>
  // </React.StrictMode>
);
