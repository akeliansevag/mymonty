'use client';
import Link from 'next/link';
import React from 'react';
import { data } from '../navData';

const Nav = ({ handleMenuOpen, menuOpen }) => {
    const handleMouseEnter = () => {
        handleMenuOpen(true);
    };

    const handleMouseLeave = () => {
        handleMenuOpen(false);
    };
    return (
        <nav className='text-[1rem]'>
            <ul className={`flex`}>
                {data && data.map((items, index) => {
                    return (
                        <li key={index} onMouseLeave={() => items.children ? handleMouseLeave() : false} onMouseEnter={() => items.children ? handleMouseEnter() : false} className='h-[var(--header-height)] flex items-center group'>
                            <span className='transition-all py-[7px] px-[30px] rounded-full group-hover:bg-black group-hover:text-white'>
                                {items?.url ? <Link onClick={() => handleMenuOpen(false)} href={items.url}>{items?.title}</Link> : items.title}
                            </span>
                            {items.children && (
                                <div className={`${menuOpen ? 'group-hover:block' : null} min-h-[40vh] submenu fixed py-10 bg-[#f7f7f7] w-full top-full left-0 hidden`}>
                                    <div className='container flex lg:gap-24 max-lg:gap-10'>
                                        {items.children.map((child, index2) => {
                                            return (
                                                <div key={index2}>
                                                    <span className='font-bold block mb-[15px] text-xl sub-title'>
                                                        {child?.url ? <Link onClick={(e) => handleMenuOpen(false)} href={child.url}>{child.title}</Link> : child.title}
                                                    </span>
                                                    {child?.children && (
                                                        <ul>
                                                            {child.children.map((c, index3) => {
                                                                return (
                                                                    <li className='mb-2' key={index3}>
                                                                        {c?.url ?
                                                                            <Link {...(c?.noIndex ? { rel: 'nofollow' } : {})} onClick={() => handleMenuOpen(false)} href={c.url}>
                                                                                {c?.title}
                                                                            </Link>
                                                                            : c.title
                                                                        }
                                                                    </li>
                                                                )

                                                            })}
                                                        </ul>
                                                    )}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav;   