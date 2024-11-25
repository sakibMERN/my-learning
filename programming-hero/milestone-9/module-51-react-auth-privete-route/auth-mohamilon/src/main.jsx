import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/Root.jsx";
import Home from "./component/Home.jsx";
import Register from "./component/Register.jsx";
import Login from "./component/Login.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import PrivetRoute from "./routes/PrivetRoute.jsx";
import Orders from "./component/Orders.jsx";
import Profile from "./component/Profile.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        path: "/orders",
        element: <PrivetRoute><Orders></Orders></PrivetRoute>
      },
      {
        path: '/profile',
        element: <PrivetRoute><Profile></Profile></PrivetRoute>
      }
      // {
      //   path: "/orders",
      //   element: <PrivetRoute></PrivetRoute>
      // }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
