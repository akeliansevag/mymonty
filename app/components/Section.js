import Image from 'next/image';
import React from 'react';

const Section = ({ children, bgImage }) => {
    return (
        <section className='py-14 lg:py-28 relative'>
            {bgImage && (
                <Image src={bgImage} fill={true} priority placeholder='blur' sizes='100vw' className='object-cover -z-10' />
            )}
            {children}
        </section>
    )
}

export default Section;
