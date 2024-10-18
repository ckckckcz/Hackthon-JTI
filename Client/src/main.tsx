import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./assets/globals.css";
import Home from "./views/Home";
import Login from "./views/auth/Register";
import Register from "./views/auth/Login";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "Daftar",
    element: <Login />,
  },
  {
    path: "Login",
    element: <Register />,
  },
]);

// Rendering the app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
