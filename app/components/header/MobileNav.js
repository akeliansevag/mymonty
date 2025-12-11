'use client';
import React, { useState } from 'react';
import MobileNavParents from './MobileNavParents';
import MobileSubMenu from './MobileSubMenu';
import { data } from '../navData';
import { useAppContext } from '@/app/AppContext';


const MobileNav = ({ open, handleMobileMenuToggle,pathname }) => {
    const [selectedParentIndex, setSelectedParentIndex] = useState(0);
    const { handleOpenModal } = useAppContext();
    let navStyles = 'text-black h-[calc(100dvh-var(--mobile-header-height))] z-[50] w-full fixed top-[var(--mobile-header-height)] bg-[#f7f7f7] overflow-scroll text-[1rem] transition-all';
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
                    {pathname !== '/business' && pathname !== '/business/business-wallet' && pathname !== '/business/salary-advance' && pathname !== '/business/salary-domiciliation' && (
                        <button onClick={handleOpenModal} className='w-full top-full mm-button white whitespace-nowrap'>
                            Download App
                        </button>
                    )}
                    {(pathname == '/business' || pathname == '/business/business-wallet' || pathname == '/business/salary-advance' || pathname == '/business/salary-domiciliation') && (
                        <a target="_blank" href='https://corporate.mymonty.com/auth/login' className='w-full top-full mm-button white whitespace-nowrap'>
                            Log in
                        </a>
                    )}
                </div>

            </div>

        </nav>
    )
}

export default MobileNav;
