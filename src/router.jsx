import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Pagetwo from "./Pagetwo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/pagetwo", element: <Pagetwo /> },
]);
