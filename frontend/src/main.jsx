/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import { Suspense, lazy } from "react";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Spinner from "./components/Loaders.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));

const CreatePage = lazy(() => import("./pages/CreatePage.jsx"));
const JoinPage = lazy(() => import("./pages/JoinPage.jsx"));
const MyContext = lazy(() => import("./context/MyContext.jsx"));
const ChatPage = lazy(() => import("./pages/ChatPage.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center">
            <Spinner />
          </div>
        }
      >
        <App />
      </Suspense>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "/create", element: <CreatePage /> },
      { path: "/join", element: <JoinPage /> },
      { path: "/chat", element: <ChatPage /> },
    ],
  },
  {
    path: "*",
    element: <h1>Error:Page Not Found.</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContext>
      <RouterProvider router={router} />
    </MyContext>
  </React.StrictMode>
);
