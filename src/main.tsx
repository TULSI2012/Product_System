import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Favorites from "./Pages/Favorites";
import AddProduct from "./Pages/AddProduct";
import NotFound from "./Components/NotFound";
import Layout from "./Components/Layout";
import { StrictMode } from "react";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/favourites",
        element: <Favorites />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default App;
