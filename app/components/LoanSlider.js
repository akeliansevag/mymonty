'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/keyboard';
import competitiveRates from '@/public/personal/competitive-rates.svg';
import simpleApplication from '@/public/personal/simple-application.svg';
import quickApproval from '@/public/personal/quick-approval.svg';
import flexibleRepayment from '@/public/personal/flexible-repayment.svg';
import Image from 'next/image';

const LoanSlider = ({ data }) => {
    const swiperParams = {
        breakpoints: {
            768: {
                slidesPerView: 2.2,
            },
            1280: {
                slidesPerView: 3.2,
            },
        },
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 20,
        grabCursor: true,
    };
    return (
        <Swiper {...swiperParams} className='flex flex-col md:flex-row md:items-stretch gap-10 relative mt-20'>
            <SwiperSlide className='aspect-[3/4] overflow-hidden rounded-[1.875rem] bg-gray-100'>
                <div className='px-10 py-14'>
                    <div className='flex items-center justify-center w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] rounded-full border-4 border-black'>
                        <Image src={competitiveRates} className='max-lg:w-[25px] max-lg:h-[25px]' alt='Car Loan' />
                    </div>
                    <h3 className='text-2xl md:text-4xl font-bold mt-4 md:mt-10'>Competitive Rates</h3>
                    <p className='text-xl md:text-2xl mt-4'>Benefit from competitive interest rates designed to suit your budget</p>
                </div>
            </SwiperSlide>

            <SwiperSlide className='aspect-[3/4] overflow-hidden rounded-[1.875rem] bg-gray-100'>
                <div className='px-10 py-14'>
                    <div className='flex items-center justify-center w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] rounded-full border-4 border-black'>
                        <Image src={simpleApplication} className='max-lg:w-[25px] max-lg:h-[25px]' alt='Car Loan' />
                    </div>
                    <h3 className='text-2xl md:text-4xl font-bold mt-4 md:mt-10'>Simple Application</h3>
                    <p className='text-xl md:text-2xl mt-4'>Our easy-to-use online </p>
                </div>
            </SwiperSlide>

            <SwiperSlide className='aspect-[3/4] overflow-hidden rounded-[1.875rem] bg-gray-100'>
                <div className='px-10 py-14'>
                    <div className='flex items-center justify-center w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] rounded-full border-4 border-black'>
                        <Image src={quickApproval} className='max-lg:w-[25px] max-lg:h-[25px]' alt='Car Loan' />
                    </div>
                    <h3 className='text-2xl md:text-4xl font-bold mt-4 md:mt-10'>Quick Approval</h3>
                    <p className='text-xl md:text-2xl mt-4'>Experience swift approval, so you can get behind the wheel sooner</p>
                </div>
            </SwiperSlide>

            <SwiperSlide className='aspect-[3/4] overflow-hidden rounded-[1.875rem] bg-gray-100'>
                <div className='px-10 py-14'>
                    <div className='flex items-center justify-center w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] rounded-full border-4 border-black'>
                        <Image src={flexibleRepayment} className='max-lg:w-[25px] max-lg:h-[25px]' alt='Car Loan' />
                    </div>
                    <h3 className='text-2xl md:text-4xl font-bold mt-4 md:mt-10'>Flexible Repayment</h3>
                    <p className='text-xl md:text-2xl mt-4'>We offer flexible repayment plans tailored to your financial situation</p>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default LoanSlider;
