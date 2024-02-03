import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Link } from "react-router-dom";

function Navbar() {
  const [viewMode, setViewMode] = useState("light");
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.querySelector("html").classList.remove("dark");
    document.querySelector("html").classList.add(viewMode);
  }, [viewMode]);

  const handleDarkMode = () => {
    if (viewMode === "light") {
      setViewMode("dark");
    } else {
      setViewMode("light");
    }
  };
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  return (
    <div className="bg-neutral-light-gray sm:px-6 py-4 px-3 flex justify-between items-center dark:bg-primary-dark dark:bg- dark:text-white transition-all duration-200 2xl:py-8 2xl:px-12">
      <div className="h-[24px] w-[24px] sm:w-[48px] sm:h-[48px] 2xl:w-[72px] 2xl:h-[72px]">
        <Link>
          <img src="/resources/logo.png" className="h-full w-full" />
        </Link>
      </div>
      <div className="flex justify-between items-center gap-10">
        <img
          src="/resources/img1.png"
          className="h-[24px] w-[24px] sm:h-[36px] sm:w-[36px] 2xl:h-[64px] 2xl:w-[64px]"
        />
        <h1 className="font-bebas tracking-wider uppercase text-primary-dark font-semibold text-xl sm:text-2xl dark:text-white transition-all duration-200 2xl:text-4xl">
          private chat room
        </h1>
        <img
          src="/resources/img2.png"
          className="h-[24px] w-[24px] sm:h-[32px] sm:w-[32px] 2xl:h-[58px] 2xl:w-[58px]"
        />
      </div>
      <div>
        <button className="my-auto" onClick={handleDarkMode}>
          <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
