'use client'

import React from 'react'
import NoPage from '../Components/NoPage'
import Background from '../Components/Background'
import { Poppins } from 'next/font/google';
import NavigationMenu from '../Components/NavigationMenu';
import { faCss3, faHtml5, faJava, faJs, faPython, faReact, faUnity } from '@fortawesome/free-brands-svg-icons';
import Icon from '../Components/Icon';
import NextJSIcon from '@/public/next-js.svg';
import TailwindIcon from '@/public/tailwind-css.svg'
import FlutterIcon from '@/public/flutter.svg'
import Image from 'next/image';
import IconImage from '../Components/IconImage';
import { CSharpIcon } from '../Components/IconList';

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
    justifyContent: 'normal',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  };

  const navigationStyle: React.CSSProperties = {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    right: '48px'
  }
  const iconStyle: React.CSSProperties = {
    width: 64,
    height: 64,
    margin: '16px'
  }
  return (
    <div className='screen h-full w-full relative overflow-hidden'>
      <Background />
      <div className='content' style={contentStyle}>
        <h1 className={poppinsBold.className} style={{ fontSize: '5em' }}>ABOUT ME</h1>
        <h2 className={poppinsBold.className}> Skillsets</h2>
        <div className='h-[16px]'></div> {/* separator for margin */}
        <div className='min-h-[30%] h-fit w-[70%] rounded-xl border-2 border-violet-200 bg-slate-400/30 p-[8px] flex justify-center items-center'>
          <div className='flex flex-wrap justify-center w-fit h-fit'>
            <Icon icon={faHtml5} />
            <Icon icon={faCss3} />
            <Icon icon={faJs} />
            <Icon icon={faPython} />
            <Icon icon={faReact} />
            <Icon icon={faJava} />
            <Icon icon={faUnity} />
            <IconImage icon={NextJSIcon} style={iconStyle} />
            <IconImage icon={TailwindIcon} style={iconStyle} />
            <IconImage icon={FlutterIcon} style={iconStyle} />
            <IconImage icon={CSharpIcon} style={iconStyle}/>
          </div>
        </div>
      </div>
      <div className='navigation-about-container' style={navigationStyle}>
        <NavigationMenu />
      </div>
    </div>
  )
}

export default page