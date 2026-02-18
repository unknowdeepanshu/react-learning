import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./layout.jsx";
import Totalprice from "./components/total price/totalprice.jsx";
import Singleproduct from "./components/single product page/singleProduct.jsx";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import AppInitializer from "./getdata.jsx";
import Allproduct from "./components/allproduct/listproduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Allproduct /> },
      { path: "/product", element: <Totalprice /> },
      { path: "/product/:name", element: <Singleproduct /> },
      { path: "/app", element: <App /> },
      { path: "/you-cart", element: <Totalprice /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppInitializer>
      <RouterProvider router={router} />
    </AppInitializer>
  </Provider>,
);
