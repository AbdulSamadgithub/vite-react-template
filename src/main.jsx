import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./router.jsx";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
