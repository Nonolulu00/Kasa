import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/base.scss";
import App from "./pages/Home";
import { ErrorPage } from "./components/Error/404";
import { Accomodation } from "./pages/Accomodation/Accomodation";
import { About } from "./pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/accomodation/:id",
    element: <Accomodation />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
