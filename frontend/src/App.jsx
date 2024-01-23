import "./App.css";

import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-screen w-screen bg-neutral-light dark:bg-black dark:text-white transition-all duration-200">
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
