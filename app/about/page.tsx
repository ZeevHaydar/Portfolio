'use client'

import React from 'react'
import NoPage from '../Components/NoPage'
import Background from '../Components/Background'
import { Poppins } from 'next/font/google';
import NavigationMenu from '../Components/NavigationMenu';
const poppinsBold = Poppins({ subsets: ['latin'], weight: "700" });

const page = () => {
  const contentStyle: React.CSSProperties = {
    position: "absolute",
    zIndex: 1,
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingTop: '8px',
    left: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  };

  const navigationStyle: React.CSSProperties =  {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    right: '48px'
  }
  return (
    <div className='screen h-full w-full relative overflow-hidden'>
      <Background />
      <div className='content' style={contentStyle}>
        <h1 className={poppinsBold.className} style={{fontSize: '5em'}}>ABOUT ME</h1>
      </div>
      <div className='navigation-about-container' style={navigationStyle}>
        <NavigationMenu/>
      </div>
    </div>
  )
}

export default page