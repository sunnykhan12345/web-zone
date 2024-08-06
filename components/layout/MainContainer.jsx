'use client'
import React from 'react'
import TopBar from './TopBar'
import sunny from "../../public/images/sunny.jpeg"
import { pageData } from './mockdata/PageData'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const MainContainer = ({children}) => {
  const currentPath = usePathname();
  const regex = /^\/([^\/]+)/;
  
  const firstPathMatch = currentPath.match(regex);
  const firstPath = firstPathMatch ? firstPathMatch[0] : currentPath;
  
  
  const title = pageData.find((page) => page.url === firstPath)?.title || " ";

  // const currentPath = usePathname();

  // const regex = /^\/([^\/]+)/;

  // const firstpath = currentPath.match(regex)
  //       ? path.match(regex)[0]
  //       : currentPath

  //       // get title current path

  //       const title = pageTitles.find((page) => page.url === firstpath)?.title || " "
  return (
    <div className='flex flex-col flex-1 max-w-3xl px-4 md:px-4 lg:px-10'>
      <TopBar />
      <div className='mt-6 mb-20'>
        <h1>Feed</h1>
        <Image src={sunny} alt="img" width={50} height={50} className="w-[50px] h-[50px] rounded-full object-cover mt-3"/>

      </div>
    </div>
  )
}

export default MainContainer
