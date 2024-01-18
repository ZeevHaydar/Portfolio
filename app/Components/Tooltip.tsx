import React from 'react'

const Tooltip:React.FC<{children: React.ReactNode, text: String}> = ({children, text}) => {
  return (
    <div className='tooltip-container'>
        {children}
        <span className='tooltip'><h3>{text}</h3></span>
    </div>
  )
}

export default Tooltip