import React, { useContext } from 'react'
import { ThemeContext } from '../context/theme-context';
import darkLogo from '../assets/logo/logo-light.png';
import lightLogo from '../assets/logo/logo-dark.png';

function Logo() {
    const { darkTheme } = useContext(ThemeContext);
  return (
    <div className="flex items-center justify-center">
      <img
  src={darkTheme === "dark-theme" ? lightLogo : darkLogo}
  alt=""
  className="your-class-name" // Add any necessary class names here
/>
      <div className="">
        <h2 className="">code</h2>
        <h2 className="">Stash</h2>
        <h2 className="">/ui</h2>
      </div>
      <img
        src={darkLogo}
        alt=""
        className=""
        />
        <img
          src={lightLogo}
          alt=""
          className=""
        />
    </div>
  )
}

export default Logo