import React from 'react'
import Background from './Background'
import { Poppins } from 'next/font/google';

const poppinsBold = Poppins({ subsets: ['latin'], weight: "700" });
const NoPage = () => {
    return (
        <div className='screen w-full h-full'>
            <Background />
            <div className='content'>
                <div className='flex justify-center items-center w-full'>
                    <div className='title'>
                        <h1 className={poppinsBold.className}>Page is Not Available.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoPage