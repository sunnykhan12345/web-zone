// 'use client'

// import { CiSearch } from "react-icons/ci";
// import { IoMdAdd } from "react-icons/io";
// import React, { useState } from 'react'
// import { useRouter } from "next/navigation";
// import { LuLogOut } from "react-icons/lu";
// import { SignedIn, SignIn, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
// import sunny from "../../public/images/sunny.jpeg"
// import Link from "next/link";
// import Image from "next/image";
// const TopBar = () => {
//            const router = useRouter();
//   const[search, setSearch] = useState('');
//   return (
//     <div className='flex items-center justify-between mt-6'>
//       <div className='relative'>
//         <input type='text'
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//          placeholder='search posts, people, ...'
//           className='bg-dark-2 w-full py-3 px-5 rounded-lg focus:outline-none text-light-1 font-semibold'/>
//      <CiSearch className="absolute right-2 top-4 text-light-1 text-2xl"/>
//       </div>
      
//       <button
//        className=" hidden md:flex items-center gap-2 rounded-lg py-2.5 px-3 bg-gradient-to-t from-pink-1 to-purple-1 text-light-1"
//        onClick={() => router.push("/create-post")}
       
//        >
//        <IoMdAdd className="text-white text-2xl"/><p>Create A Post</p>
//         </button>

//         <div className="flex md:hidden gap-3">
//         <SignedIn>
//        <SignOutButton>
//         <div className='flex items-center cursor-pointer'>
//         <LuLogOut className='text-white text-[22px]' />
//         {/* <p className=' font-bold text-light-1'>Log Out</p> */}
//         </div>
//        </SignOutButton>
//       </SignedIn>
//       <Link href="/">
//         <Image src={sunny} alt='sunny' width={50} height={50} className='w-[50px] h-[50px] object-cover rounded-full flex-grow-0 flex-shrink-0 md:hidden' />
//         </Link>
//         </div>
      
//     </div>
//   )
// }

// export default TopBar














'use client'

import { CiSearch } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { LuLogOut } from "react-icons/lu";
import { SignedIn, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import sunny from "../../public/images/sunny.jpeg";
import Link from "next/link";
import Image from "next/image";

const TopBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  return (
    <div className='flex items-center justify-between mt-6'>
      <div className='relative'>
        <input 
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='search posts, people, ...'
          className='bg-dark-2 w-full py-3 px-5 rounded-lg focus:outline-none text-light-1 font-semibold'
        />
        <CiSearch className="absolute right-2 top-4 text-light-1 text-2xl"/>
      </div>
      
      <button
        className="hidden md:flex items-center gap-2 rounded-lg py-2.5 px-3 bg-gradient-to-t from-pink-1 to-purple-1 text-light-1"
        onClick={() => router.push("/create-post")}
      >
        <IoMdAdd className="text-white text-2xl"/>
        <p>Create A Post</p>
      </button>

      <div className="flex md:hidden gap-3">
        <SignedIn>
          <SignOutButton>
            <div className='flex items-center cursor-pointer'>
              <LuLogOut className='text-white text-[22px]' />
              {/* <p className='font-bold text-light-1'>Log Out</p> */}
            </div>
          </SignOutButton>
        </SignedIn>
        <Link href="/">
          <Image 
            src={sunny} 
            alt='sunny' 
            width={50} 
            height={50} 
            className='w-[50px] h-[50px] object-cover rounded-full flex-grow-0 flex-shrink-0 md:hidden' 
          />
        </Link>
      </div>
    </div>
  )
}

export default TopBar;

