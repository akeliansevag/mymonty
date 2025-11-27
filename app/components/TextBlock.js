'use client';
import React from 'react';
import { useAppContext } from '../AppContext';
import Link from 'next/link';

const TextBlock = ({noMaxWidth, subTitle, title, description, button, textColor, buttonColor, center, bold, link }) => {
    const { handleOpenModal } = useAppContext();
    return (
        <div className={`md:max-w-full ${!noMaxWidth ? 'lg:max-w-[60vw] fhd:max-w-[45vw]' : ''} ${center ? 'mx-auto' : ''} ${textColor ? 'text-' + textColor : ''}`}>
            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none text-balance' dangerouslySetInnerHTML={{ __html: title }}></h2>
            {
                subTitle && (
                    <h3 className='uppercase font-black text-2xl mt-2'>{subTitle}</h3>
                )
            }
            {
               description && (
                    <p dangerouslySetInnerHTML={{ __html: description }} className={`leading-8 mt-8 ${bold ? 'font-bold' : ''}`}></p>
               ) 
            }
            {
                button && (
                    <button onClick={handleOpenModal} className={`mm-button mt-8 ${buttonColor === 'dark' ? '!bg-black !text-white' : '!bg-white !text-black'}`} href="#">Download App</button>
                )
            }
            {
                link && (
                    <div className='mt-8'>
                        <Link href={link} className={`mm-button ${buttonColor === 'dark' ? 'text-black' : 'text-white'}`}>Learn More</Link>
                    </div>
                )
            }
        </div >
    )
}

export default TextBlock;
