import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Home from "./Pages/Home/Home/Home.jsx";
import AvailableFood from "./Pages/AvailableFood/AvailableFood.jsx";
import CategoryFood from "./Pages/CategoryBaseFood/CategoryFood.jsx";
import AddFood from "./Pages/AddFood/AddFood.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/available",
        element: <AvailableFood></AvailableFood>,
      },
      {
        path: "/add-food",
        element: <AddFood></AddFood>,
      },
      {
        path: "/categoryFood/:category",
        element: <CategoryFood></CategoryFood>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/food/${params.category}`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
