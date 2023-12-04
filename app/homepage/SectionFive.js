import React from 'react';

const SectionFive = () => {
    return (
        <section className='pt-14 pb-14 lg:pt-28 lg:pb-20 bg-black text-white'>
            <div className='container'>
                <div className='flex flex-col-reverse gap-10 md:flex-row md:items-center md:gap-20'>
                    <div className='flex-1'>
                        <video className='mb-6' width="100%" playsInline autoPlay muted loop controls={false}>
                            <source src='/rotating-card1.mp4' type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='flex-1 flex justify-end'>
                        <div>
                            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Prefer Having Something Tangible in Your Hand?</h2>
                            <p className='leading-8 mt-4'>Choose between your free Standard card or the Premium card and be ready for the envious looks it attracts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionFive;
