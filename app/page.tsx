'use client'

import Image from 'next/image'
import React from 'react'
import Background from './Components/Background'
import SelfImage from './Components/SelfImage'
import { Inter, Poppins } from 'next/font/google';
import { faLinkedin, faFacebook, faTwitter, faInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'


const poppinsBold = Poppins({ subsets: ['latin'], weight: "700" });

export default function Home() {
  const [isIconHovered, setIsIconHovered] = React.useState(false);
  const [hoveredIcon, setHoveredIcon] = React.useState<String>("");


  const contentStyle: React.CSSProperties = {
    position: "absolute",
    zIndex: 2,
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

  const iconStyle: React.CSSProperties = {
    transition: 'color 0.3s ease',
  };
  return (
    <div className='screen h-full w-full'>
      <Background />
      <div className='content' style={contentStyle}>
        <div className='flex justify-end flex-col h-full pl-6'>
          <SelfImage />
        </div>
        <div className='menu'>
          <div className='title'>
            <h1 className={poppinsBold.className}>
              Welcome to My Page!
            </h1>
          </div>
          <div className='description'>
            <h2 className='text-2xl pb-4 pr-3 pt-4 flex justify-end'>
              I Am <span style={{ color: 'blue', paddingLeft: '6px', fontWeight: "bold" }}>Nazhif Haidar</span>
            </h2>
          </div>
          <div className='w-full flex justify-end'>
            <div className='social-media-link'>
              <Link href={"https://github.com/ZeevHaydar"}>
                <div className='w-fit h-fit'>
                  <FontAwesomeIcon icon={faSquareGithub} size='2x'
                    color={isIconHovered && hoveredIcon === "github" ? 'blue' : 'white'}
                    onPointerEnter={() => { setIsIconHovered(true); setHoveredIcon("github") }}
                    onPointerLeave={() => { setIsIconHovered(false); setHoveredIcon("") }} />
                </div>
              </Link>
              <Link href={"https://www.instagram.com/nazhifhaidar/"}>
                <div className='w-fit h-fit'>
                  <FontAwesomeIcon icon={faInstagram}
                    size='2x'
                    color={isIconHovered && hoveredIcon === "instagram" ? 'blue' : 'white'}
                    onPointerEnter={() => { setIsIconHovered(true); setHoveredIcon("instagram") }}
                    onPointerLeave={() => { setIsIconHovered(false); setHoveredIcon("") }} />
                </div>
              </Link>
              <Link href={"https://twitter.com/NazhifHaidar"}>
                <div className='w-fit h-fit'>
                  <FontAwesomeIcon icon={faTwitter}
                    size='2x'
                    color={isIconHovered && hoveredIcon === "twitter" ? 'blue' : 'white'}
                    onPointerEnter={() => { setIsIconHovered(true); setHoveredIcon("twitter") }}
                    onPointerLeave={() => { setIsIconHovered(false); setHoveredIcon("") }} />
                </div>
              </Link>
              <Link href={"https://www.linkedin.com/in/nazhif-haidar-putra-wibowo/"}>
                <div className='w-fit h-fit'>
                  <FontAwesomeIcon icon={faLinkedin}
                    size='2x'
                    color={isIconHovered && hoveredIcon === "linkedin" ? 'blue' : 'white'}
                    onPointerEnter={() => { setIsIconHovered(true); setHoveredIcon("linkedin") }}
                    onPointerLeave={() => { setIsIconHovered(false); setHoveredIcon("") }} />
                </div>
              </Link>

            </div>

          </div>


        </div>

      </div>

    </div>


  )
}
