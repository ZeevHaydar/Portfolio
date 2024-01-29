'use client'

import React from 'react'
import Information from '../Components/Information';
import InformationPage from '../Components/InformationPage';
import { Poppins } from 'next/font/google';
import NavigationMenu from '../Components/NavigationMenu';
import Background from '../Components/Background';

const poppinsBold = Poppins({ subsets: ['latin'], weight: "700" });
const information = [
    new Information(
        "just_run.png",
        "Just Run! (Unity Game Project)",
        "https://rfdt.itch.io/just-run",
    ),
    new Information(
        "simplicity.png",
        "Simplicity (Java Game Project)",
        "https://github.com/ReyhanPA/Tubes-OOP-Kelompok-3",
    ),
    new Information(
        "pharmacy_review_software.jpg",
        "Pharmacy Review App (Code Igniter)",
        "https://github.com/cathlauretta/II3160-pharmacy-review",
    ),
    new Information(
        "infastq.jpg",
        "INFASTQ (IoT Softwart Project with Django, ML, React, SQL, ESP32)",
        "https://github.com/ZeevHaydar/infastq-api",
    ),
];

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


const page = () => {

    return (
        <div className='screen h-full w-full'>
            <Background />
            <div className='content'>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <div className='w-[500px] pt-[60px] pl-[60px]'>
                        <div className='title'>
                            <h1 className={poppinsBold.className}>You Can Check My Projects!</h1>
                        </div>
                    </div>
                    <div className='pr-[40px] flex justify-between flex-col'>
                        <InformationPage information={information} />
                        <NavigationMenu />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default page