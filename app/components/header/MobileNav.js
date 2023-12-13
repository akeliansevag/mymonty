'use client';
import React, { useState } from 'react';
import MobileNavParents from './MobileNavParents';
import MobileSubMenu from './MobileSubMenu';
import { data } from '../navData';
import Link from 'next/link';
import { useAppContext } from '@/app/AppContext';


const MobileNav = ({ open, handleMobileMenuToggle }) => {
    const [selectedParentIndex, setSelectedParentIndex] = useState(0);
    const { handleOpenModal } = useAppContext();
    let navStyles = 'h-[calc(100dvh-var(--mobile-header-height))] z-[50] w-full fixed top-[var(--mobile-header-height)] bg-[#f7f7f7] overflow-scroll text-[1rem] transition-all';
    navStyles += ' ';
    navStyles += open ? 'left-0' : '-left-full';
    return (
        <nav className={navStyles}>
            <div className='container h-full flex flex-col justify-between'>
                <div>
                    <MobileNavParents handleMobileMenuToggle={handleMobileMenuToggle} setSelectedParentIndex={setSelectedParentIndex} data={data} />
                    {data && data.map((parent, index) => {
                        {
                            return (
                                parent.children && selectedParentIndex === index &&
                                (
                                    <MobileSubMenu handleMobileMenuToggle={handleMobileMenuToggle} key={index} data={parent} />
                                )
                            )

                        }

                    })}
                </div>
                <div className='mb-[30px] mt-[15px]'>
                    <button onClick={handleOpenModal} href='/who-we-are' className='w-full top-full mm-button white whitespace-nowrap'>
                        Get the app
                    </button>
                </div>

            </div>

        </nav>
    )
}

export default MobileNav;
