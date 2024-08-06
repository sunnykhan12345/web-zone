import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import sunny from "../../public/images/sunny.jpeg"
import Menu from './Menu'
import { LuLogOut } from "react-icons/lu";
import { SignedIn, SignIn, SignInButton, SignOutButton, SignUp, UserButton } from "@clerk/nextjs";

const LeftSideBar = () => {
  return (
    <div className='h-screen top-0 left-0 sticky bg-black text-white overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden custom-scrollbar '>

      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-2 items-center text-light-1'>
          <Link href="/" >
          <Image src={sunny} alt='sunny' width={60} height={60} className='w-10 h-10 object-cover rounded-full' />
          </Link>
          <p className='font-semibold'>sunny</p>
        </div>
        <div className='flex gap-5 justify-between text-light-1'>
          <div className='flex flex-col items-center'>
            <p className='text-base font-bold'>1</p>
            <p className='text-base font-medium'>Posts</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-base font-bold'>1</p>
            <p className='text-base font-medium'>Followers</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-base font-bold'>1</p>
            <p className='text-base font-medium'>Following</p>
          </div>
        </div>

        <hr />
        <Menu />

        
      <hr />
      <div className="flex gap-2 py-5 items-center">
        <UserButton />
        <p className="text-light-1 font-bold cursor-pointer">Manage Account</p>
      </div>

      <SignedIn>
       <SignOutButton>
        <div className='flex gap-2 items-center cursor-pointer'>
        <LuLogOut className='text-white text-[22px]' />
        <p className=' font-bold text-light-1'>Log Out</p>
         
        </div>

       </SignOutButton>
      </SignedIn>
    
      </div>
    </div>
  )
}

export default LeftSideBar