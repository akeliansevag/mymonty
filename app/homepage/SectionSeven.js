import React from 'react';

const SectionSeven = () => {
    return (
        <section className='pt-14 pb-14 lg:pt-40 lg:pb-40 bg-black text-white'>
            <div className='container'>
                <div className='flex flex-col-reverse gap-10 md:flex-row md:items-center md:gap-20'>
                    <div className='relative section-video flex-1'>
                        <video className=' mb-6' width="100%" playsInline autoPlay muted loop controls={false}>
                            <source src='/rotating-card-2.mp4' type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='flex-1 flex justify-end'>
                        <div>
                            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>HOLDING IT DOWN WITH OUR PREMIUM CARD?</h2>
                            <p className='leading-8 mt-8'>Opt for our Premium Mastercard to elevate your style with a sleek design and exclusive benefits. Turn heads and add sophistication to your wallet experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSeven;
