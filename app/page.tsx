'use client'

import Image from 'next/image'
import React from 'react'
import Background from './Components/Background'
import SelfImage from './Components/SelfImage'
import { Poppins } from 'next/font/google';
import { faLinkedin, faTwitter, faInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { faHouse, faLaptop, faUser } from '@fortawesome/free-solid-svg-icons'
import Tooltip from './Components/Tooltip'
import NavigationMenu from './Components/NavigationMenu'


const poppinsBold = Poppins({ subsets: ['latin'], weight: "700" });

export default function Home() {
  const [isIconHovered, setIsIconHovered] = React.useState(false);
  const [hoveredIcon, setHoveredIcon] = React.useState<String>("");

  const navigationStyle: React.CSSProperties = {
    boxShadow: "3px 4px 15px rgba(248, 250, 252, 0.15)",
  };

  const contentStyle: React.CSSProperties = {
    position: "absolute",
    zIndex: 1,
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingTop: '8px',
    left: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  };

  return (
    <div className='screen h-full w-full'>
      <Background />
      <div className='content' style={contentStyle}>
        <div className='flex justify-end flex-col h-full pl-12'>
          <SelfImage />
        </div>
        <div className='menu-container'>
          <div className='menu'>
            <div className='title'>
              <h1 className={poppinsBold.className}>
                Welcome to My Page!
              </h1>
            </div>
            <div className='description'>
              <h2 className='text-2xl pb-4 pr-3 pt-4 flex justify-end'>
                I Am <span style={{ color: '#4484eb', paddingLeft: '6px', fontWeight: "bold" }}>Nazhif Haidar</span>
              </h2>
            </div>
            <div className='w-full flex justify-end'>
              <div className='social-media-link'>
                <Link href={"https://github.com/ZeevHaydar"} target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faSquareGithub} size='2x'
                    color={isIconHovered && hoveredIcon === "github" ? '#4484eb' : 'white'}
                    onPointerEnter={() => { setIsIconHovered(true); setHoveredIcon("github") }}
                    onPointerLeave={() => { setIsIconHovered(false); setHoveredIcon("") }} />
                </Link>
                <Link href={"https://www.instagram.com/nazhifhaidar/"}  target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faInstagram}
                    size='2x'
                    color={isIconHovered && hoveredIcon === "instagram" ? '#4484eb' : 'white'}
                    onPointerEnter={() => { setIsIconHovered(true); setHoveredIcon("instagram") }}
                    onPointerLeave={() => { setIsIconHovered(false); setHoveredIcon("") }} />
                </Link>
                <Link href={"https://twitter.com/NazhifHaidar"}  target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faTwitter}
                    size='2x'
                    color={isIconHovered && hoveredIcon === "twitter" ? '#4484eb' : 'white'}
                    onPointerEnter={() => { setIsIconHovered(true); setHoveredIcon("twitter") }}
                    onPointerLeave={() => { setIsIconHovered(false); setHoveredIcon("") }} />
                </Link>
                <Link href={"https://www.linkedin.com/in/nazhif-haidar-putra-wibowo/"}  target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin}
                    size='2x'
                    color={isIconHovered && hoveredIcon === "linkedin" ? '#4484eb' : 'white'}
                    onPointerEnter={() => { setIsIconHovered(true); setHoveredIcon("linkedin") }}
                    onPointerLeave={() => { setIsIconHovered(false); setHoveredIcon("") }} />
                </Link>
              </div>
            </div>
          </div>
          <div className='flex justify-end'>
            <div className='flex justify-between flex-col pr-[40px] h-[160px] w-fit'>
              <div className='flex justify-center'>
                <Link href={"https://drive.google.com/file/d/1pM4-ATqkMZ_0LdBuQXe6rIjlct11rAKH/view?usp=sharing"} target='_blank' rel='noopener noreferrer'>
                  <div className='cv-button'>
                    <h2>
                      Check CV
                    </h2>
                  </div>
                </Link>
              </div>
              <NavigationMenu/>
            </div>
          </div>

        </div>
      </div>
    </div>


  )
}
