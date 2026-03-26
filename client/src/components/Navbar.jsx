import { useState } from "react";
import { Link } from "react-router";

function Navbar() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.querySelector("html").classList.remove("dark");
    } else {
      document.querySelector("html").classList.add("dark");
    }
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="bg-neutral-light-gray sm:px-6 py-4 px-4 flex justify-between items-center dark:bg-primary-dark  dark:text-white transition-all duration-200 2xl:py-8 2xl:px-12">
      <div className="h-6 w-6 sm:w-12 sm:h-12 2xl:w-18 2xl:h-18">
        <Link to={"/"}>
          <img src="/resources/img1.png" className="h-full w-full" />
        </Link>
      </div>

      <div className="flex justify-between items-center gap-10">
        <img
          src="/resources/logo.png"
          className="h-6 w-6 sm:h-9 sm:w-9 2xl:h-16 2xl:w-16"
        />
        <h1 className="font-bebas tracking-wider uppercase text-primary-dark font-semibold text-xl sm:text-2xl dark:text-white transition-all duration-200 2xl:text-4xl">
          private chat room
        </h1>
        <img
          src="/resources/img2.png"
          className="h-6 w-6 sm:h-8 sm:w-8 2xl:h-14.5 2xl:w-14.5"
        />
      </div>

      <button
        className="p-2 rounded-xl border dark:border-gray-700 cursor-pointer transition"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
}

export default Navbar;
