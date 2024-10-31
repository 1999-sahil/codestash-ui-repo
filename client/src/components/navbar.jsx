import React from "react";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";

function Navbar() {

  return (
    <nav className="flex items-center justify-between w-full px-3 py-3 lg:px-8 sticky">
      <div className="flex items-center gap-10">
        <Logo />
        <div className="hidden md:flex items-center gap-5 font-openSans text-sm font-semibold text-zinc-700 dark:text-zinc-400">
            <a href="" className="hover:text-black dark:hover:text-white">
                <button className="">
                    Components
                </button>
            </a>
            <a href="" className="hover:text-black dark:hover:text-white">
                <button>
                    Snippets
                </button>
            </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-4">
            <Link to="/admin-auth">
                <button className="flex items-center gap-2 text-center font-inter text-sm font-normal border px-2.5 py-1.5 rounded-md border-zinc-300 hover:border-zinc-200 hover:text-black dark:border-zinc-800 dark:text-white dark:bg-[#0f0f0f] dark:hover:border-zinc-900">
                    Admin Login
                    <RiAdminLine />
                </button>
            </Link>
            <Link to="/auth">
                <button className="flex items-center gap-2 text-center font-inter text-sm font-normal border px-2.5 py-1.5 rounded-md bg-zinc-900 hover:bg-opacity-95 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-white dark:text-black">
                    Get Started
                    <FaArrowRight />
                </button>
            </Link>
        </div>
        <ThemeToggle />
        <div className="flex lg:hidden">
          <HiMenuAlt3 className="text-3xl text-[#111] dark:text-zinc-200 p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

{
  /**
<div className='flex items-center gap-4'>
            <ThemeToggle />
            <div className='flex md:hidden cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-900 p-1 rounded-md'>
                <HiMenuAlt3 className='text-2xl text-zinc-900 dark:text-zinc-300' />
            </div>
        </div>    
*/
}
