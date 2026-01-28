'use client';
import React from 'react';
import { useAppContext } from '../AppContext';
import QrCode from '@/app/components/QrCode';

const WhensTheDraw = () => {
    const { handleOpenModal } = useAppContext();
    const { setFormComponent, setLargeWidth } = useAppContext();
    const handleOriginalOpenModal = () => {
            setFormComponent(<QrCode />);
            setLargeWidth(false);
            handleOpenModal();
        }   
  return (
    <div className='bg-[#f7f7f7] w-full rounded-3xl overflow-hidden flex max-lg:flex-col bg-[linear-gradient(110.67deg,#E65C23_-3.89%,#E8609E_35.6%,#1898BD_81.31%)] text-white'>
       <div className='w-full lg:p-16 max-lg:py-10 max-lg:px-5 flex items-center'>
            <div className='flex flex-col gap-5'>
                {/* <img src='/kia-logo.webp' className='max-w-[166px]' /> */}
                <h2 className='section-title'>When’s the draw?</h2>
                <p>The official draw takes place on <strong>October 3, 2025</strong> under the supervision of the Lebanese National Lottery, authorized by Minster of Finance. <br />Winners will be announced on LBCI. Stay tuned!</p>
                <div className='rounded-full bg-[rgb(239,239,239)] text-[#D25788] lg:text-center sm:w-max px-4 py-1 text-pretty max-lg:text-base'>
                    <strong>Promotion ends September 23, 2025</strong>
                </div>
                <div>
                    <button onClick={handleOriginalOpenModal} className='mm-button'>Download MyMonty Now</button>
                </div>
                <p className='text-base'>Terms and Conditions apply</p>
            </div>
            
       </div>
       <div className='w-full flex flex-col max-lg:pl-5 lg:items-center justify-end lg:pt-20'>
        <div className='rounded-3xl bg-[rgba(247,247,247,0.3)] w-[240px] flex flex-col gap-3 items-center justify-center px-3 py-4'>
            <div className='rounded-full bg-[var(--mm-blue)] w-[50px] h-[50px] text-center flex items-center justify-center'>
                <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.764 11.3409H1.19531V19.703C1.19531 21.6543 1.19531 22.63 1.58712 23.3753C1.93177 24.0309 2.4817 24.5639 3.1581 24.8979C3.92707 25.2777 4.9337 25.2777 6.94697 25.2777H17.0124C19.0256 25.2777 20.0323 25.2777 20.8012 24.8979C21.4776 24.5639 22.0276 24.0309 22.3722 23.3753C22.764 22.63 22.764 21.6543 22.764 19.703V11.3409Z" fill="white"/>
                    <path d="M1.19531 11.3409H22.764V9.94728C22.764 7.99595 22.764 7.02029 22.3722 6.27498C22.0276 5.61939 21.4776 5.08638 20.8012 4.75234C20.0323 4.37259 19.0256 4.37259 17.0124 4.37259H16.7727H7.18662H6.94697C4.9337 4.37259 3.92707 4.37259 3.1581 4.75234C2.4817 5.08638 1.93177 5.61939 1.58712 6.27498C1.19531 7.02029 1.19531 7.99595 1.19531 9.94728V11.3409Z" fill="white"/>
                    <path d="M22.764 11.3409H1.19531M22.764 11.3409V19.703M22.764 11.3409V9.94728M1.19531 11.3409V19.703M1.19531 11.3409V9.94728M1.19531 19.703V9.94728M1.19531 19.703C1.19531 21.6543 1.19531 22.63 1.58712 23.3753C1.93177 24.0309 2.4817 24.5639 3.1581 24.8979C3.92707 25.2777 4.9337 25.2777 6.94697 25.2777H17.0124C19.0256 25.2777 20.0323 25.2777 20.8012 24.8979C21.4776 24.5639 22.0276 24.0309 22.3722 23.3753C22.764 22.63 22.764 21.6543 22.764 19.703M22.764 19.703V9.94728M22.764 9.94728C22.764 7.99595 22.764 7.02029 22.3722 6.27498C22.0276 5.61939 21.4776 5.08638 20.8012 4.75234C20.0323 4.37259 19.0256 4.37259 17.0124 4.37259H16.7727M1.19531 9.94728C1.19531 7.99595 1.19531 7.02029 1.58712 6.27498C1.93177 5.61939 2.4817 5.08638 3.1581 4.75234C3.92707 4.37259 4.9337 4.37259 6.94697 4.37259H7.18662M16.7727 2.0498V4.37259M16.7727 6.69538V4.37259M7.18662 2.0498V4.37259M7.18662 6.69538V4.37259M16.7727 4.37259H7.18662" stroke="#2657D4" strokeWidth="2.19374" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.2324 3.15576V7.58011M6.72461 3.15576V7.58011" stroke="white" strokeWidth="3.33578" stroke-linecap="round" stroke-linejoin="round"/>
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
