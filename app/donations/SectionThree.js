'use client';
import React from 'react';
import { useAppContext } from '../AppContext';


const SectionThree = () => {
    const { handleOpenModal } = useAppContext();
    const items = [
        {
            title: 'Students'
        },
        {
            title: 'Traveler'
        },
        {
            title: 'Others'
        }
    ];
    return (
        <section className='lg:py-24 max-lg:py-10 bg-[#f7f7f7] relative'>
            <div className='container'>
                <div className="flex max-lg:flex-col lg:justify-between gap-10">
                    <div className='lg:w-1/2 flex flex-col gap-10'>
                        <div className="md:max-w-full lg:max-w-[45vw] fhd:max-w-[35vw]">
                            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Who Can Donate?</h2>
                            <p className='leading-8 mt-8'>
                            Anyone with a MyMonty account! Whether you're a student, a traveler, or just someone who wants to give back, you can now support causes that matter with just a few taps.
                            </p>
                            <div className='mt-10'>
                                <ul className='font-bold flex max-lg:flex-col lg:items-center lg:gap-10 max-lg:gap-3'>
                                    {
                                        items.map((item,index)=>(
                                            <li key={index} className='flex items-center gap-2'>
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M32 16C32 24.8366 24.8366 32 16 32C7.16342 32 0 24.8366 0 16C0 7.16342 7.16342 0 16 0C24.8366 0 32 7.16342 32 16ZM14.1493 24.4719L26.0203 12.6009C26.4234 12.1978 26.4234 11.5442 26.0203 11.1411L24.5605 9.68129C24.1574 9.27813 23.5037 9.27813 23.1006 9.68129L13.4194 19.3625L8.89942 14.8425C8.49632 14.4394 7.84271 14.4394 7.43955 14.8425L5.97974 16.3023C5.57664 16.7054 5.57664 17.359 5.97974 17.7621L12.6894 24.4718C13.0926 24.875 13.7461 24.875 14.1493 24.4719Z" fill="black"/>
                                                </svg>
                                                <span>{item.title}</span>
                                            </li>
                                        ))
                                    }
                                    
                                </ul>
                            </div>
                            <button onClick={handleOpenModal} className="mm-button mt-10" href="#">Download App</button>
                            
                        </div>
                    </div>
                    <div className='lg:w-1/2'>
                        <img className='w-full rounded-3xl' src='/who-can-donate.webp'/>
                    </div>
                    
                </div>
                
            </div>
        </section>

    )
}

export default SectionThree;
