import React from "react";
import { useAtom } from "jotai";
import { themes } from "../store/global State";
function DarkMode() {
  const [theme, setTheme] = useAtom(themes);
  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };
  return (
    <div>
      <button onClick={toggleTheme}> Dark Mode </button>
    </div>
  );
}

export default DarkMode;
