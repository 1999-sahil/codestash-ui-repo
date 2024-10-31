import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

function ThemeToggle() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme} className={`${darkTheme ? 'dark' : 'light'}`}>
      <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={darkTheme} // Bind directly to darkTheme
            onChange={toggleTheme} // Call toggleTheme on change
            className='sr-only'
          />
          <div className='block h-6 w-12 rounded-full bg-[#c5c5c5] dark:bg-[#202020]'></div>
          <div
            className={`dot absolute ${darkTheme ? 'translate-x-[25px]' : 'translate-x-[3px]'} 
            top-[2px] h-5 w-5 rounded-full bg-white dark:bg-zinc-600 transition`}
          ></div>
        </div>
      </label>
    </div>
  );
}

export default ThemeToggle;
