'use client';
import React, { useEffect, useState } from 'react';
import logo from '@/public/mymontylogo.svg';
import Image from 'next/image';
import Nav from './Nav';
import Link from 'next/link';
import styles from './header.module.css';
import MobileNav from './MobileNav';

const Header = () => {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            // Define a scroll threshold based on your requirements
            const scrollThreshold = 1;

            // Check if the user has scrolled past the threshold
            setScrolling(scrollTop > scrollThreshold);
        };

        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let headerClasses = 'flex items-center fixed top-0 left-0 z-10 w-full z-50 transition-[height] h-[var(--mobile-header-height)] md:h-[var(--header-height)] ' + styles.header;
    headerClasses += scrolling ? ' ' + styles.scrolling + ' scrolling' : '';
    headerClasses += menuOpen || mobileMenuToggle ? ' ' + styles.menuOpen + ' menu-open' : '';

    const handleMenuOpen = (toggle) => {
        setMenuOpen(toggle);
    };

    const handleMobileMenuToggle = () => {
        setMobileMenuToggle(!mobileMenuToggle);
    };
    return (
        <header className={headerClasses}>
            <div className='container flex justify-between items-center'>
                <div className='flex-1'>
                    <Link href='/'>
                        <Image alt="MyMonty Logo" src={logo} />
                    </Link>
                </div>
                <div className='flex-1 flex justify-end gap-3 items-center'>
                    <div className='hidden md:block'>
                        <Nav handleMenuOpen={handleMenuOpen} />
                    </div>
                    <div className='hidden md:block'>
                        <Link href='/who-we-are' className='mm-button white whitespace-nowrap'>
                            Download app
                        </Link>
                    </div>

                    <div className='md:hidden cursor-pointer' onClick={handleMobileMenuToggle}>
                        {!mobileMenuToggle && (
                            <div>
                                <div className='w-[20px] h-[2px] bg-black mb-1'></div>
                                <div className='w-[20px] h-[2px] bg-black mb-1'></div>
                                <div className='w-[20px] h-[2px] bg-black mb-0'></div>
                            </div>
                        )}

                        {mobileMenuToggle && (
                            <div>
                                <div className='w-[20px] h-[2px] bg-black rotate-45 origin-center'></div>
                                <div className='w-[20px] h-[2px] bg-black -rotate-45 origin-center -mt-[2px]'></div>
                            </div>
                        )}


                    </div>
                </div>

            </div>
            <div className='md:hidden'>
                <MobileNav handleMobileMenuToggle={handleMobileMenuToggle} open={mobileMenuToggle} scrolling={scrolling} />
            </div>

        </header>
    )
}

export default Header;
