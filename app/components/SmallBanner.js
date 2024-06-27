import React from 'react';

function SmallBanner({ title }) {
    return (
        <section className='py-32 flex flex-col justify-center w-full relative bg-gray-100'>
            <div className='container'>
                <div class="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-center  ">
                    <div class="flex flex-col w-full md:w-2/3 justify-center md:mt-0 ">
                        <div>
                            <h1 class="font-black text-4xl sm:text-5xl md:text-6xl fhd:text-[5.4rem] leading-none uppercase mt-6">
                                {title}
                            </h1>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3"></div>
                </div>
            </div>
        </section>
    )
}

export default SmallBanner;
