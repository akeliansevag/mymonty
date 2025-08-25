'use client';
import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import styles from './header.module.css';
import MobileNav from './MobileNav';
import { useAppContext } from '@/app/AppContext';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();
    const [scrolling, setScrolling] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
    const [regionToggle, setRegionToggle] = useState(false);
    const { handleOpenModal } = useAppContext();

    useEffect(() => {
        // Function to handle scroll events
        let lastScrollTop = 0;
        let scrollDirection = null;
        let pixelsScrolledSinceDirectionChange = 0;
        if (window.scrollY > 0) {
            setScrolling(true);
        }
        const handleScroll = () => {
            setRegionToggle(false);

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

    useEffect(() => {
        // Access the document object only after the component has mounted
        const bodyElem = document.getElementsByTagName("body")[0];
        
        // Add or remove class based on isScrollingDown state
        if (isScrollingDown) {
          bodyElem.classList.add('menu-hidden');
          bodyElem.classList.remove('a');
        } else {
          bodyElem.classList.add('a');
          bodyElem.classList.remove('menu-hidden');
        }
    
        // Optional: cleanup to remove the classes on unmount
        return () => {
          bodyElem.classList.remove('menu-hidden', 'a');
        };
      }, [isScrollingDown]); // This effect runs whenever isScrollingDown changes

    let headerClasses = 'flex items-center fixed top-0 left-0 z-10 w-full z-50 transition-transform  h-[var(--mobile-header-height)] md:h-[var(--header-height)] ' + styles.header;
    headerClasses += scrolling ? ' ' + styles.scrolling + ' scrolling' : '';
    headerClasses += menuOpen || mobileMenuToggle ? ' ' + styles.menuOpen + ' menu-open' : '';
    headerClasses += isScrollingDown ? ' -translate-y-full' : ' -translate-y-0';
    
    const handleMenuOpen = (toggle) => {
        setMenuOpen(toggle);
    };

    const handleMobileMenuToggle = () => {
        setMobileMenuToggle(!mobileMenuToggle);
    };

    const handleRegionToggle = () => {
        console.log(regionToggle)
        setRegionToggle(!regionToggle);
    };

    return (
        <header className={headerClasses}>
            <div className='container relative h-full flex justify-between items-center'>
                <div className='flex gap-2 flex-1'>
                    <Link onClick={() => { setMenuOpen(false); setMobileMenuToggle(false); }} href='/' className='logo'>
                        {/* <Image priority alt="MyMonty Logo" src={logo} /> */}
                        <svg width="133" height="27" viewBox="0 0 133 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_642_4255)">
                                <path d="M77.618 3.84546C82.2664 3.84546 86.3581 7.19362 86.3581 12.1203C86.3581 17.047 82.2664 20.4284 77.618 20.4284C72.9697 20.4284 68.8779 17.1135 68.8779 12.1203C68.8779 7.12715 72.9987 3.84546 77.618 3.84546ZM77.618 16.4613C79.9111 16.4613 81.8635 14.6003 81.8635 12.1203C81.8635 9.64035 79.9111 7.81257 77.618 7.81257C75.325 7.81257 73.3726 9.64035 73.3726 12.1203C73.3726 14.6003 75.3582 16.4613 77.618 16.4613Z" fill="#0E1414" />
                                <path d="M87.5713 3.84546H92.1906V6.3545C93.524 4.49349 95.1981 3.84546 97.1214 3.84546C101.587 3.84546 102.796 7.40963 102.796 11.439V20.0878H98.1766V11.5304C98.1766 9.3288 97.3707 7.65472 95.2313 7.65472C93.092 7.65472 92.1947 9.35787 92.1947 11.5595V20.0836H87.5754V3.84546H87.5713Z" fill="#0E1414" />
                                <path d="M109.504 3.8828H113.908V7.50928H109.504V15.2566C109.504 15.9378 109.783 16.6523 110.684 16.6523C111.586 16.6523 111.893 15.9088 111.893 15.1652C111.893 14.6999 111.768 14.0477 111.677 13.8027H115.337C115.615 14.3925 115.71 15.1361 115.71 15.6927C115.71 18.0481 114.161 20.4367 110.41 20.4367C107.618 20.4367 104.893 19.4438 104.893 14.8246L104.864 0.2854H109.513V3.88696L109.504 3.8828Z" fill="#0E1414" />
                                <path d="M4.6193 3.84546H0V20.0878H4.6193V3.84546Z" fill="#0E1414" />
                                <path d="M18.7555 3.84546C17.2351 3.84546 14.9421 4.18609 13.7332 6.51235C12.9273 4.90059 11.2823 3.84546 8.86469 3.84546C7.78048 3.84546 6.93306 4.17778 6.15625 4.72196V7.88319C6.39718 7.76688 6.76274 7.65887 7.25292 7.65887C9.30086 7.65887 9.91981 9.36203 9.91981 11.5346V20.0919H14.5059V11.5678C14.5059 9.42849 15.1248 7.66302 17.1395 7.66302C19.1543 7.66302 19.8064 9.36618 19.8064 11.5387V20.0961H24.4257V11.4474C24.4257 7.41794 23.2169 3.85377 18.7513 3.85377L18.7555 3.84546Z" fill="#0E1414" />
                                <path d="M48.1994 3.84546H43.5801V20.0878H48.1994V3.84546Z" fill="#0E1414" />
                                <path d="M62.3316 3.84546C60.8113 3.84546 58.5182 4.18609 57.3094 6.51235C56.5035 4.90059 54.8585 3.84546 52.4409 3.84546C51.3567 3.84546 50.5092 4.17778 49.7324 4.72196V7.88319C49.9734 7.76688 50.3389 7.65887 50.8291 7.65887C52.877 7.65887 53.496 9.36203 53.496 11.5346V20.0919H58.0821V11.5678C58.0821 9.42849 58.701 7.66302 60.7157 7.66302C62.7304 7.66302 63.3826 9.36618 63.3826 11.5387V20.0961H68.0019V11.4474C68.0019 7.41794 66.7931 3.85377 62.3275 3.85377L62.3316 3.84546Z" fill="#0E1414" />
                                <path d="M31.712 11.2397L28.4884 3.84546H23.8691L29.3525 16.5485L31.712 11.2397Z" fill="#0E1414" />
                                <path d="M37.2576 3.84546L26.9639 27.0001H31.5956L41.8893 3.84546H37.2576Z" fill="#0E1414" />
                                <path d="M122.822 11.2397L119.599 3.84546H114.979L120.467 16.5485L122.822 11.2397Z" fill="#0E1414" />
                                <path d="M128.368 3.84546L118.078 27.0001H122.71L132.999 3.84546H128.368Z" fill="#0E1414" />
                            </g>
                            <defs>
                                <clipPath id="clip0_642_4255">
                                    <rect width="133" height="26.7188" fill="white" transform="translate(0 0.28125)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <svg onClick={handleRegionToggle} className='cursor-pointer dropdown-logo' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M6 9L12 15L18 9' stroke={(pathname == '/business' || pathname == '/sign-up-and-win') ? '#FFFFFF' : '#000000'} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path>
                    </svg>
                </div>
                <div className='flex-1 flex justify-end gap-3 items-center'>
                    <div className='hidden md:block'>
                        <Nav menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
                    </div>
                    <div className='hidden md:block'>
                        {pathname == '/business' && (
                            <Link href="https://corporate.mymonty.com/" target='_blank' rel='noopener noreferrer nofollow' className='mm-button whitespace-nowrap'>
                                Login
                            </Link>
                        )}

                        {pathname != '/business' && (
                            <button onClick={handleOpenModal} className='mm-button whitespace-nowrap'>
                                Download App
                            </button>
                        )}

                    </div>

                    <div className='md:hidden mobile-burger cursor-pointer' onClick={handleMobileMenuToggle}>
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
                {regionToggle && (
                    <a href="https://mymonty.com/en-EU" target="_blank" className='absolute top-full left-0 p-5 ml-4 w-40 bg-white text-base font-bold rounded-b-[20px] leading-none'>Europe</a>
                )}
            </div>
            <div className='md:hidden'>
                <MobileNav handleMobileMenuToggle={handleMobileMenuToggle} open={mobileMenuToggle} scrolling={scrolling} />
            </div>
        </header>
    )
}

export default Header;
