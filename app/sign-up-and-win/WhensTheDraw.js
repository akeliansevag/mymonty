'use client';
import React from 'react';
import { useAppContext } from '../AppContext';
import AppForm from '@/app/components/Form';

const WhensTheDraw = () => {
    const { handleOpenModal } = useAppContext();
    const { setFormComponent, setLargeWidth } = useAppContext();
    const handleOriginalOpenModal = () => {
            setFormComponent(<AppForm />);
            setLargeWidth(false);
            handleOpenModal();
        }   
  return (
    <div className='bg-[#f7f7f7] w-full rounded-3xl overflow-hidden flex max-lg:flex-col'>
       <div className='w-full lg:p-16 max-lg:p-10'>
            <div className='flex flex-col gap-5'>
                <img src='/kia-logo.webp' className='max-w-[166px]' />
                <h2 className='section-title'>When’s the draw?</h2>
                <p>The official draw takes place on <strong>October 3, 2025</strong> under the supervision of the Lebanese National Lottery, authorized by Minster of Finance.Winners will be announced on LBCI. Stay tuned!</p>
                <div className='rounded-full bg-[#EFEFEF] lg:text-center sm:w-max px-4 py-1 text-pretty'>
                    <strong>Promotion ends September 23, 2025</strong>
                </div>
                <div>
                    <button onClick={handleOriginalOpenModal} className='mm-button'>Download MyMonty Now</button>
                </div>
            </div>
            
       </div>
       <div className='w-full flex flex-col max-lg:pl-10 lg:items-center justify-end lg:pt-20'>
        <div className='rounded-3xl lg:mt-2220 lg:ml-5222 bg-[#EFEFEF] border border-[rgba(217,217,217,0.8)] w-[240px] flex flex-col gap-3 items-center justify-center px-3 py-4'>
            <div className='rounded-full bg-[#BF0022] w-[50px] h-[50px] text-center flex items-center justify-center'>
                <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.764 10.8409H1.19531V19.203C1.19531 21.1543 1.19531 22.13 1.58712 22.8753C1.93177 23.5309 2.4817 24.0639 3.1581 24.3979C3.92707 24.7777 4.9337 24.7777 6.94697 24.7777H17.0124C19.0256 24.7777 20.0323 24.7777 20.8012 24.3979C21.4776 24.0639 22.0276 23.5309 22.3722 22.8753C22.764 22.13 22.764 21.1543 22.764 19.203V10.8409Z" fill="white"/>
                    <path d="M1.19531 10.8409H22.764V9.44728C22.764 7.49595 22.764 6.52029 22.3722 5.77498C22.0276 5.11939 21.4776 4.58638 20.8012 4.25234C20.0323 3.87259 19.0256 3.87259 17.0124 3.87259H16.7727H7.18662H6.94697C4.9337 3.87259 3.92707 3.87259 3.1581 4.25234C2.4817 4.58638 1.93177 5.11939 1.58712 5.77498C1.19531 6.52029 1.19531 7.49595 1.19531 9.44728V10.8409Z" fill="white"/>
                    <path d="M22.764 10.8409H1.19531M22.764 10.8409V19.203M22.764 10.8409V9.44728M1.19531 10.8409V19.203M1.19531 10.8409V9.44728M1.19531 19.203V9.44728M1.19531 19.203C1.19531 21.1543 1.19531 22.13 1.58712 22.8753C1.93177 23.5309 2.4817 24.0639 3.1581 24.3979C3.92707 24.7777 4.9337 24.7777 6.94697 24.7777H17.0124C19.0256 24.7777 20.0323 24.7777 20.8012 24.3979C21.4776 24.0639 22.0276 23.5309 22.3722 22.8753C22.764 22.13 22.764 21.1543 22.764 19.203M22.764 19.203V9.44728M22.764 9.44728C22.764 7.49595 22.764 6.52029 22.3722 5.77498C22.0276 5.11939 21.4776 4.58638 20.8012 4.25234C20.0323 3.87259 19.0256 3.87259 17.0124 3.87259H16.7727M1.19531 9.44728C1.19531 7.49595 1.19531 6.52029 1.58712 5.77498C1.93177 5.11939 2.4817 4.58638 3.1581 4.25234C3.92707 3.87259 4.9337 3.87259 6.94697 3.87259H7.18662M16.7727 1.5498V3.87259M16.7727 6.19538V3.87259M7.18662 1.5498V3.87259M7.18662 6.19538V3.87259M16.7727 3.87259H7.18662" stroke="#BF0022" stroke-width="2.19374" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.2324 2.65576V7.08011M6.72461 2.65576V7.08011" stroke="white" stroke-width="3.33578" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
            <div>
                <h5 className='font-black text-center'>OCTOBER</h5>
                <h5 className='font-black text-5xl text-center'>03</h5>
            </div>
            
        </div>
        <img src='/kia-k4.webp' className='w-full'/>
         

       </div>
    </div>
  )
}

export default WhensTheDraw;
