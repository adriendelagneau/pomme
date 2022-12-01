import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  UserCircleIcon
} from "@heroicons/react/outline";

function Navbar() {
    const [showInput, setShowInput] =  useState(false);

  return (
    <header className='sticky h-18 top-0 z-30  w-full bg-custom-white py-5 px-5 md:px-10'>
        <div className='flex items-center justify-between '>

            <Link href="/" className='mb-1 flex-1 '>
                <div className='relative w-8 h-8 cursor-pointer opacity-75 transition hover:opacity-100'>
                    <Image  src="https://res.cloudinary.com/dos8mey8r/image/upload/v1669878559/mac-shop/clipart46436_e4pwqg.png" alt="" layout='responsive' width={32} height={32}/>
                </div>
            </Link>

            <div className='flex flex-1  text-lg sm:text-xl xl:text-2xl'>
                <ul className='flex flex-1 justify-center'>
                    <li className='cursor-pointer hover:text-sky-700'>Accueil</li>
                    <li className=' cursor-pointer hover:text-sky-700 px-3 xl:px-5'>Produits</li>
                    <li className='cursor-pointer hover:text-sky-700'>Contact</li>
                </ul>
            </div>

            <div className=" flex-1 relative -top-3 lg:-top-3">
               <div className='flex flex-col-reverse absolute -top-1 right-0 lg:flex-row lg:space-x-1'>
                <input placeholder='Search...' className={`lg:relative lg:-left-1 absolute left-[-165px]  w-[150px] border border-black border-1 rounded-full px-2 py-[2px] sm:w-[200px] sm:left-[-210px] transition ${showInput ? 'scale-x-1' : 'scale-x-0'}`}/>
                <SearchIcon className="headerIcon mt-4 lg:-mt-1"  onClick={() =>  setShowInput(!showInput)} />
                  
                    
                    <Link href={"/login"} className="">
                        <UserIcon className="headerIcon lg:-mt-1" />
                    </Link>      
                </div>
            </div>

        </div>
  </header>
  )
}

export default Navbar