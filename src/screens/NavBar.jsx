import React, { useState } from 'react'
import '../index.css'
import { IoIosArrowDown } from 'react-icons/io'
import ReactFlagsSelect from "react-flags-select";

function NavBar() {
    const [selected, setSelected] = useState("");

return (
    <div className='static z-10'>
        <nav className='flex flex-row justify-between bg-navcolor items-center fixed left-0 right-0 top-0 shadow-lg drop-shadow-xl'>
            <input type="checkbox" id='check' className='hidden' />
            <img className='flex w-[240px] h-[75px] select-none object-contain mt-1 ml-6' src="/images/logo.png"        alt="logo" />
            <label for="check" class="checkbtn" className='flex text-sm text-white float-right cursor-pointer hover:text-yellow-500 mr-5 lg:hidden lg:invisible sm:text-base md:text-lg'>
                <i class="fas fa-bars fa-2x"></i>
            </label>    
            <ul className='hidden invisible gap-x-16 mr-12 text-xl font-semibold uppercase lg:flex lg:visible'>
                <li>
                    <a className='transition-colors hover:text-green-500' href="/">Random Picker</a>
                </li>
                <li>
                    <a className='transition-colors hover:text-red-500' href="/">Giveaway Wheel</a>
                </li>
                <li>
                    <a className='transition-colors hover:text-blue-500' href="/">About</a>
                </li>
            </ul>
        </nav>
    </div>
)
}

export default NavBar