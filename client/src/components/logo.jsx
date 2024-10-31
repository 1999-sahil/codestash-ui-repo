import React, { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import darkLogo from "../assets/logo/logo-light.png";
import lightLogo from "../assets/logo/logo-dark.png";
import { Link } from "react-router-dom";

function Logo() {
  const { darkTheme } = useContext(ThemeContext);
  console.log(darkTheme)

  return (
    <Link to="/" className="flex items-center justify-center gap-1 w-fit p-1.5 cursor-pointer rounded-md hover:bg-[#e3e3e3] dark:hover:bg-zinc-800">
      <img
        src={darkTheme ? lightLogo : darkLogo}
        alt=""
        className="w-4 h-4"
      />
      <div className="flex items-center font-poppins text-sm font-semibold text-black dark:text-white">
        <h2 className="">code</h2>
        <h2 className="text-zinc-600 dark:text-zinc-300">Stash</h2>
        <h2 className="">/ui</h2>
      </div>
    </Link>
  );
}

export default Logo;
