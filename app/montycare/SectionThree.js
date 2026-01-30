'use client';
import React from 'react';
import { useAppContext } from '../AppContext';
const SectionThree = () => {
  const { handleOpenModal } = useAppContext();
  return (
    <section className='bg-black lg:py-28 max-lg:py-14 text-white'>
        <div className='container'>
            <h2 className='text-center section-title text-balance'>Apply for a Montycare Credit Card</h2>
            <p className='text-center mt-5'>Download MyMonty app, open an account, and request your Montycare Credit Card.</p>
            <div className='flex max-md:flex-col justify-center gap-5 mt-12'>
                <div className='overflow-hidden relative rounded-2xl aspect-[4/5] md:w-1/4 p-5 flex justify-center'>
                    <img className='w-full h-full top-0 left-0 object-cover absolute' src='/montycare-7.webp' />
                    <div className='bg-[#00000040] w-full h-full absolute top-0 left-0'></div>
                    <div className='flex justify-center flex-col z-10'>
                        <h3 className='uppercase font-black mt-3 text-balance text-center'>MYMONTY USER?</h3>
                        <button onClick={handleOpenModal} className='mm-button red mt-3'>Request your card</button>
                    </div>
                </div>

                <div className='overflow-hidden relative rounded-2xl aspect-[4/5] md:w-1/4 p-5 flex justify-center'>
                    <img className='w-full h-full top-0 left-0 object-cover absolute' src='/montycare-8.webp' />
                    <div className='bg-[#00000040] w-full h-full absolute top-0 left-0'></div>
                    <div className='flex justify-center flex-col z-10'>
                        <h3 className='uppercase font-black mt-3 text-balance text-center'>NEW USER?</h3>
                        <button onClick={handleOpenModal} className='mm-button white mt-3'>Download and register</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionThree;
