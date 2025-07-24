import React from 'react';
import {Link} from "react-router";

function Navbar() {
  return (
      <div className='h-auto md:h-20 w-full bg-[#ffe6e6] flex justify-between items-center cursor-pointer border-b-[1px] border-[#ff9999] mb-5 pl-0 md:pl-2'>
          <p className='font-semibold text-xl '>Bhushan Murkute</p>

        <div className='flex'>
          <p className='text-lg p-2'>Home</p>
          <p className='text-lg p-2'>About</p>
          <p className='text-lg p-2'>Skills</p>
          <p className='text-lg p-2'>Projects</p>
          <p className='text-lg p-2'>Contact</p>
        </div>
      </div>
  )
}
export default Navbar;