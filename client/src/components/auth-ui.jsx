import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import darkLogo from '../assets/logo/logo-dark.png'

function AuthUI() {
  return (
    <div 
        style={{ backgroundColor: "#0f0f0f", backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333235' fill-opacity='0.29'%3E%3Cpath d='M2 0h2v12H2V0zm1 20c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM9 8c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-1 4h2v12H8V12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
        className="flex items-center justify-center h-screen w-full"
    >
        <div className="relative flex flex-col gap-2 items-center w-fit h-fit border shadow-sm shadow-gray-100 bg-white rounded-md">
            <Link to='/' className="absolute right-3 top-2 hover:bg-zinc-200 p-1 rounded-md">
              <IoMdClose className="text-2xl text-red-500" />
            </Link>

            <div className='bg-[#111] flex items-center w-full justify-center gap-1'>
                <img src={darkLogo} alt='' className='w-8 h-8' />
                <div className='flex text-white font-poppins text-lg font-semibold'>
                    <h2>code</h2>
                    <h2 className='text-zinc-300'>stash</h2>
                    <h2>/ui</h2>
                </div>
            </div>

            <form>
                <div>
                <div className="flex flex-col gap-1 w-full">
              <label>First name</label>
              <input type="text" className="text-gray-700 border rounded-md p-1 focus:outline-zinc-300" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label>Last name</label>
              <input type="text" className="text-gray-700 border rounded-md p-1 focus:outline-zinc-300" />
            </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AuthUI