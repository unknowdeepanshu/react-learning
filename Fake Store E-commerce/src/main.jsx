import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./layout.jsx";
import Allproduct from "./components/allproduct/listproduct.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Allproduct />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
