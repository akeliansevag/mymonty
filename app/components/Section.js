import Image from 'next/image';
import React from 'react';

const Section = ({ children, bgImage, bgDark, bg }) => {
    return (
        <section className={`py-20 lg:py-40 relative ${ bg } ${bgDark ? 'bg-black' : ''}`}>
            {bgImage && (
                <Image src={bgImage} fill={true} priority placeholder='blur' sizes='100vw' className='object-cover -z-10' />
            )}
            {children}
        </section>
    )
}

export default Section;
