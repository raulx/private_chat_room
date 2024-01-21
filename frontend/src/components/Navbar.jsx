import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

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
    <div className="bg-neutral-light-gray py-4 px-6 flex justify-between dark:bg-primary-dark dark:text-white transition-all duration-200">
      <div className="w-[48px] h-[48px]">
        <img src="../src/resources/logo.png" className="h-full w-full" />
      </div>
      <div className="flex justify-between items-center gap-10">
        <img src="../src/resources/img1.png" className="h-[36px] w-[36px]" />
        <h1 className="uppercase text-primary-dark font-bold text-xl dark:text-white transition-all duration-200">
          private chat room
        </h1>
        <img src="../src/resources/img2.png" className="h-[32px] w-[32px]" />
      </div>
      <div className="mr-10">
        <button className="my-auto" onClick={handleDarkMode}>
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={28}
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
