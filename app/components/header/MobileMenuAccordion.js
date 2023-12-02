'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const MobileMenuAccordion = ({ data, handleMobileMenuToggle }) => {
    const [toggleOpen, setToggleOpen] = useState(false);
    const handleToggle = () => {
        setToggleOpen(!toggleOpen);
    };

    return (
        <li className='my-3 first:mt-0 last:mb-0'>
            <span className='flex items-center justify-between pb-3 cursor-pointer' onClick={handleToggle}>
                <span className='font-bold select-none'>
                    {data && data.children && (
                        data?.title
                    )}
                    {data && !data.children && data?.url && (
                        <Link onClick={handleMobileMenuToggle} href={data.url}>{data?.title}</Link>
                    )}
                </span>
                {
                    data && data.children && (
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    )
                }


            </span>
            {
                data && data?.children && (
                    <ul className={`rounded-xl px-4 bg-white overflow-hidden transition-all duration-300 ease-in-out ${toggleOpen ? 'max-h-96' : 'max-h-0'}`}>
                        {data.children.map((child, index) => {
                            return (
                                <li key={index} className='py-1 first:pt-4 last:pb-4'>
                                    {child.url && (
                                        <Link onClick={handleMobileMenuToggle} href={child.url}>{child.title}</Link>
                                    )}
                                    {!child.url && (
                                        child.title
                                    )}

                                </li>
                            )
                        })}
                    </ul>
                )
            }
        </li>
    )
}

export default MobileMenuAccordion;
