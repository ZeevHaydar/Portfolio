import React from 'react'
import Image from 'next/image'

const IconImage:React.FC<{ icon: any, style:React.CSSProperties }> = ({icon, style}) => {
    return (
        <div className='icon' style={style}>
            <Image src={icon} alt=" " width={64} height={64} />
        </div>
    )
}

export default IconImage;