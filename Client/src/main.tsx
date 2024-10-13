import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./assets/globals.css";
import Home from "./views/Home";
// import Login from "./views/Login";
// import Error from "./views/error/Error";

// Initialize react-query client
const queryClient = new QueryClient();

// Define routes with createBrowserRouter
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
    path: "login",
    // element: <Login />,
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
