import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import JoinPage from "./pages/JoinPage.jsx";
import MyContext from "./context/MyContext.jsx";
import ChatPage from "./pages/ChatPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
