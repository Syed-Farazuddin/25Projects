import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Project7() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-white text-black" : " "
      } h-[100vh] bg-black text-white flex justify-center items-center flex-col`}
    >
      <h1
        className={`${darkMode ? "text-black" : ""} text-2xl font-bold  mb-10`}
      >
        Project 7: Theme Switcher
      </h1>
      <div
        className={`w-1/2 h-auto p-6 flex justify-center items-center flex-col gap-4 bg-white text-black`}
      >
        <div className="flex justify-center items-center gap-2">
          <button
            className={` flex items-center  justify-center p-2 bg-blue-600 rounded-lg text-white font-bold hover:bg-orange-500 hover:text-black hover:font-extrabold`}
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            <p className="mr-1">
              Switch to {darkMode ? "Dark mode" : "Light mode"}
            </p>
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project7;
