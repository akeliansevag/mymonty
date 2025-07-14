'use client';
import React from 'react';
import TextBlock from '../components/TextBlock';

const SectionTwo = () => {
    const items = [
        {
            description: '<p>Open MyMonty & head to <strong>"E-Services"</strong></p>'
        },
        {
            description: '<p>Pick a <strong>charity</strong> that speaks to your heart</p>'
        },
        {
            description: '<p>Enter your <strong>donation amount</strong> & choose your wallet</p>'
        },
        {
            description: '<p><strong>Leave a personal a note</strong> if you wish & share your thoughts with the charity</p>'
        },
        {
            description: '<p><strong>Tap confirm</strong> & spread some love!</p>'
        },
    ];
    return (
        <section className='lg:py-24 max-lg:py-10 bg-black relative'>
            <img src='/donations-bg.webp'  className='absolute w-full h-full top-0 left-0 object-cover' width="5184" height="2037" />
            <div className='container relative  text-center text-white'>
                <TextBlock center={true} title="From Your eWallet to the Community" />
                <div className='relative'>
                    <div className="flex lg:justify-between max-lg:flex-col lg:gap-0 max-lg:gap-8 lg:mt-16 max-lg:mt-10">
                        {items.map((item,index)=> (
                            <div key={index} className='lg:w-1/5 flex flex-col items-center gap-4 relative px-5'>
                                <div className={`max-lg:hidden absolute w-[calc(90%-70px)] h-[1px] bg-white top-[35px] left-[calc(55%+35px)] ${index===(items.length-1) ? 'hidden' : 'max-lg:block'}`}></div>
                                <div className='rounded-full border  border-white w-[70px] h-[70px] flex items-center justify-center font-bold relative'>{index+1}
                                   
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo;
