import React from "react";
import { FaCaretRight } from "react-icons/fa";
import jwt from "../assets/jwt.svg";
import lightLogo from "../assets/logo/logo-light.png";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function AdminAuthUI() {
  return (
    <div 
        style={{ backgroundColor: "#0f0f0f", backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333235' fill-opacity='0.29'%3E%3Cpath d='M2 0h2v12H2V0zm1 20c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM9 8c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-1 4h2v12H8V12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
        className="flex items-center justify-center h-screen w-full"
    >
      <div className="relative flex flex-col gap-2 items-center w-fit h-fit pt-4 pb-6 px-4 border shadow-sm shadow-gray-100 bg-white rounded-md">
        <Link to='/' className="absolute right-3 top-2 hover:bg-zinc-200 p-1 rounded-md">
            <IoMdClose className="text-2xl" />
        </Link>
        <img src={lightLogo} alt="" className="w-10 h-10" />
        <div className="flex flex-col">
          <h2 className="font-bold font-poppins text-zinc-900 text-center text-lg">
            Welcome Back, Admin
          </h2>
          <span className="text-sm font-mukta font-medium text-zinc-500">
            Please fill in the details to get started.
          </span>
        </div>
        <form className="mt-4 font-mukta font-medium text-sm flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1 w-full">
              <label>First name</label>
              <input type="text" className="text-gray-700 border rounded-md p-1 focus:outline-zinc-300" />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label>Last name</label>
              <input type="text" className="text-gray-700 border rounded-md p-1 focus:outline-zinc-300" />
            </div>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label>Email address</label>
            <input type="email" className="text-gray-700 border rounded-md p-1 focus:outline-zinc-300" />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label>Password</label>
            <input type="password" className="text-gray-700 border rounded-md p-1 focus:outline-zinc-300" />
          </div>

          <button className="mt-2 flex items-center justify-center gap-2 border border-black rounded-md p-2 bg-zinc-900 hover:bg-opacity-95 text-zinc-50 w-full">
            Continue
            <FaCaretRight />
          </button>
        </form>

        <div className="w-full h-[1px] bg-[#e3e3e3] my-2" />

        <div className="flex items-center justify-center rounded-md gap-1 bg-zinc-100 h-[60px] w-full">
          <h2 className="font-kanit text-zinc-600">Secured by</h2>
          <div className="flex items-center gap-1">
            <img src={jwt} alt="" className="w-6 h-6" />
            <h2 className="font-raleway font-semibold text-black">JWT</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAuthUI;
