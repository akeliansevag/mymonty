import Link from 'next/link';
import React from 'react';

const TextBlock = ({ title, description, button, textColor, buttonColor }) => {
    return (
        <div className={textColor ? 'text-' + textColor : ''}>
            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>{title}</h2>
            <p className='leading-8 mt-4'>
                {description}
            </p>
            {button && (
                <Link className={`mm-button mt-4 blue ${(buttonColor && buttonColor == 'white') ? ' white' : ''}`} href="#">Download app</Link>
            )}
        </div>
    )
}

export default TextBlock;
