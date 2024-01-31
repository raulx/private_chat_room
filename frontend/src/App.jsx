import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { socket } from "../utils/socket";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });
  }, []);

  return (
    <div className="h-screen w-screen bg-neutral-light dark:bg-black dark:text-white transition-all duration-200">
      <ToastContainer />
      <>
        <Navbar />
      </>
      <>
        <Outlet />
      </>
    </div>
  );
}

export default App;
