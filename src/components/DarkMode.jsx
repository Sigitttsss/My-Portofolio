import React, { useState, useEffect } from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 rounded-full ${
        darkMode ? 'bg-yellow-400' : 'bg-gray-800'
        } ${
        darkMode ? 'text-gray-900' : 'text-white'
        } transition-colors duration-200`}
    >
        {darkMode ? <MdOutlineWbSunny /> : <FaMoon />}
  </button>
  );
};

export default DarkMode;    