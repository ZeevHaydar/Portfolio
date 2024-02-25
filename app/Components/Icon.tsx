import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Icon: React.FC<{ icon: IconDefinition }> = ({ icon }) => {
    return (
        <div className='w-[64px] h-[64px] m-[16px]'>
            <FontAwesomeIcon
                icon={icon}
                size='4x'
                color={'#4484eb'}
            />
        </div>

    );
};

export default Icon;
