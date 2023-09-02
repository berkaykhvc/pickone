import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function Footer() {
  return (
    <div className='bg-slate-800 h-60 grid grid-cols-10'>
        <div className='grid col-span-2 justify-center items-center'>
            <img className='w-56' src="images/logo.png" alt="" />
        </div>
        <div className='flex absolute left-2 h-60 items-end'>
            <h2 className='font-semibold'>
                Pickone © 2023
            </h2>
        </div>
        <div className='flex flex-row gap-x-52'>
        <div className='flex flex-col ml-20 mt-10'>
            <h2 className='text-xl text-slate-200 font-semibold text-center whitespace-nowrap underline underline-offset-4'>Used Technologies</h2>
            <h3 className='text-center pt-1'>HTML</h3>
            <h3 className='text-center'>CSS</h3>
            <h3 className='text-center'>Javascript</h3>
            <h3 className='text-center'>React</h3>
            <h3 className='text-center'>Tailwind</h3>
        </div>
        <div className='flex flex-col mt-10  w-40'>
            <h2 className='font-semibold text-slate-200 text-xl text-center whitespace-nowrap underline underline-offset-4'>Services</h2>
            <h3 className='text-center pt-1 whitespace-nowrap'>Random Picker</h3>
            <h3 className='text-center whitespace-nowrap'>Giveaway Wheel</h3>
            <h3 className='text-center'>About</h3>
        </div> 
        <div className='flex flex-col mt-10 w-40'>
            <h2 className='font-semibold text-slate-200 text-xl text-center whitespace-nowrap underline underline-offset-4'>Other</h2>
            <h3 className='text-center pt-1'>Privacy Policy</h3>
            <h3 className='text-center whitespace-nowrap'>Terms and Conditions</h3>
            <h3 className='text-center'>Support</h3>
        </div>
        <div className='flex flex-col mt-10  w-40'>
            <h2 className='font-semibold text-slate-200 text-xl text-center whitespace-nowrap underline underline-offset-4'>Follow me</h2>
            <div className='flex flex-row items-center justify-center gap-x-1'>
                <AiFillGithub size={26} className=''/>
                <h3 className='text-center pt-1'>Github</h3>
            </div>
            <div className='flex flex-row items-center justify-center gap-x-1'>
                <AiFillLinkedin size={26} className=''/>
                <h3 className='text-center pt-1'>Linkedin</h3> 
            </div>
        </div>
        </div>
    </div>
)
}

export default Footer