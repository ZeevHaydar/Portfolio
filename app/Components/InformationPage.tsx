import React, { useState } from 'react';
import Information from './Information'
import Image from 'next/image';
import Link from 'next/link';



const InformationPage: React.FC<{ information: Information[] }> = ({ information }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % information.length);
    };

    const goToPrevPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + information.length) % information.length);
    };


    return (
        <div className='information-page'>
            <div className='information-container'>
                <Link href={information[currentPage].link} target="_blank" rel="noopener noreferrer">
                    <div className={`information-item`} style={{
                        width: '560px',
                        height: '315px'
                    }}>
                        <div className='image-container'>
                            <Image
                                src={`/${information[currentPage].image}`}
                                alt={information[currentPage].title}
                                fill={true}
                                objectFit='contain'
                            />
                        </div>
                        <div className='image-caption'>
                            <h1>{information[currentPage].title}</h1>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="dots">
                {information.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentPage ? 'active' : ''}`}
                        onClick={() => goToPage(index)}
                    ></div>
                ))}
            </div>
            <div className="navigation-arrows">
                <button className='text-4xl' onClick={goToPrevPage}>&lt;</button>
                <button className='text-4xl' onClick={goToNextPage}>&gt;</button>
            </div>

        </div>
    );
};

export default InformationPage;