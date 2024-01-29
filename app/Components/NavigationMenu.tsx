import React from 'react'
import Tooltip from './Tooltip';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLaptop, faUser } from '@fortawesome/free-solid-svg-icons';

const NavigationMenu = () => {
    const [isIconHovered, setIsIconHovered] = React.useState(false);
    const [hoveredIcon, setHoveredIcon] = React.useState<String>("");

    const navigationStyle: React.CSSProperties = {
        boxShadow: "3px 4px 15px rgba(248, 250, 252, 0.15)",
      };
    return (
        <div className='navigation-menu'>
            <div className='rounded-3xl h-fit w-60 bg-slate-400/20 mb-8 py-2 px-4 flex justify-between' style={navigationStyle}>
                <Link href={"/"}>
                    <Tooltip text={"Home"}>
                        <FontAwesomeIcon icon={faHouse}
                            size='2x'
                            color={isIconHovered && hoveredIcon === "home" ? '#4484EB' : 'white'}
                            onPointerEnter={() => { setIsIconHovered(true); setHoveredIcon("home") }}
                            onPointerLeave={() => { setIsIconHovered(false); setHoveredIcon("") }}
                        />
                    </Tooltip>
                </Link>
                <Link href={"/about"}>
                    <Tooltip text={"About"}>
                        <FontAwesomeIcon icon={faUser}
                            size='2x'
                            color={isIconHovered && hoveredIcon === "about" ? '#4484EB' : 'white'}
                            onPointerEnter={() => { setIsIconHovered(true); setHoveredIcon("about") }}
                            onPointerLeave={() => { setIsIconHovered(false); setHoveredIcon("") }}
                        />
                    </Tooltip>
                </Link>
                <Link href={"/projects"}>
                    <Tooltip text={"Projects"}>
                        <FontAwesomeIcon icon={faLaptop}
                            size='2x'
                            color={isIconHovered && hoveredIcon === "projects" ? '#4484EB' : 'white'}
                            onPointerEnter={() => { setIsIconHovered(true); setHoveredIcon("projects") }}
                            onPointerLeave={() => { setIsIconHovered(false); setHoveredIcon("") }}
                        />
                    </Tooltip>
                </Link>
            </div>
        </div>
    )
}

export default NavigationMenu