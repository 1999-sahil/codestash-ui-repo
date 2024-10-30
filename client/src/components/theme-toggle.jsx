import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

function ThemeToggle() {
    const { darkTheme, toggleTheme} = useContext(ThemeContext);
  return (
    <div className={`${darkTheme ? 'dark-theme' : 'light-theme'}`}>
            <button onClick={toggleTheme} className="border p-1">
                Click to change theme
            </button>
        </div>
  )
}

export default ThemeToggle