'use client';
import React, { useEffect, useState } from 'react';
import logo from '@/public/mymontylogo.svg';
import Image from 'next/image';
import Nav from './Nav';
import Link from 'next/link';
import styles from './header.module.css';
import MobileNav from './MobileNav';
import { useAppContext } from '@/app/AppContext';
import { current } from 'tailwindcss/colors';

const Header = () => {
    const [scrolling, setScrolling] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
    const { handleOpenModal } = useAppContext();
    useEffect(() => {
        // Function to handle scroll events
        let lastScrollTop = 0;
        let scrollDirection = null;
        let pixelsScrolledSinceDirectionChange = 0;

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            // Define a scroll threshold based on your requirements
            const scrollThreshold = 0;

            if (currentScroll > scrollThreshold) {
                setScrolling(true);
            }

            if (currentScroll <= 0) {
                setScrolling(false);
            }



            // Determine the current scroll direction
            if (currentScroll > lastScrollTop) {
                // Scrolling down
                if (scrollDirection !== 'down') {
                    scrollDirection = 'down';
                    pixelsScrolledSinceDirectionChange = 0; // Reset counter
                }
            } else {
                // Scrolling up
                if (scrollDirection !== 'up') {
                    scrollDirection = 'up';
                    pixelsScrolledSinceDirectionChange = 0; // Reset counter
                }
            }

            // Increment the scrolled pixels counter
            pixelsScrolledSinceDirectionChange += Math.abs(currentScroll - lastScrollTop);

            // Perform action every 100px scrolled after direction change
            if (pixelsScrolledSinceDirectionChange >= 200) {
                if (scrollDirection == 'down') {
                    setIsScrollingDown(true);
                } else {
                    setIsScrollingDown(false);
                }
                // Reset the counter
                pixelsScrolledSinceDirectionChange = 0;
            }


            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

        };

        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let headerClasses = 'flex items-center sticky top-0 left-0 z-10 w-full z-50 transition-all h-[var(--mobile-header-height)] md:h-[var(--header-height)] ' + styles.header;
    headerClasses += scrolling ? ' ' + styles.scrolling + ' scrolling' : '';
    headerClasses += menuOpen || mobileMenuToggle ? ' ' + styles.menuOpen + ' menu-open' : '';
    headerClasses += isScrollingDown ? ' -translate-y-full' : ' -translate-y-0';

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
                    <Link onClick={() => { setMenuOpen(false); setMobileMenuToggle(false); }} href='/'>
                        <Image priority alt="MyMonty Logo" src={logo} />
                    </Link>
                </div>
                <div className='flex-1 flex justify-end gap-3 items-center'>
                    <div className='hidden md:block'>
                        <Nav menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
                    </div>
                    <div className='hidden md:block'>
                        <button onClick={handleOpenModal} className='mm-button whitespace-nowrap'>
                            Get the app
                        </button>
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
