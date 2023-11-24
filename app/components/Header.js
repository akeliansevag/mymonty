import React from 'react';
import logo from '@/public/mymontylogo.svg';
import Image from 'next/image';

const Header = () => {
    return (
        <div className='flex items-center h-24 fixed top-0 left-0 z-10 w-full'>
            <div className='container'>
                <Image src={logo} />
            </div>
        </div>
    )
}

export default Header;
