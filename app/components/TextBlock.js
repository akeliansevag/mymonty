'use client';
import React from 'react';
import { useAppContext } from '../AppContext';


const TextBlock = ({ title, description, button, textColor, buttonColor, center }) => {
    const { handleOpenModal } = useAppContext();
    return (
        <div className={`md:max-w-full lg:max-w-[45vw] fhd:max-w-[35vw] ${center ? 'mx-auto' : ''} ${textColor ? 'text-' + textColor : ''}`}>
            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: description }} className='leading-8 mt-8'>

            </p>
            {
                button && (
                    <button onClick={handleOpenModal} className={`mm-button mt-8 ${buttonColor === 'dark' ? '!bg-black !text-white' : '!bg-white !text-black'}`} href="#">Download App</button>
                )
            }
        </div >
    )
}

export default TextBlock;
