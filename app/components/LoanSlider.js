'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/keyboard';
import competitiveRates from '@/public/personal/competitive-rates.svg';
import simpleApplication from '@/public/personal/simple-application.svg';
import quickApproval from '@/public/personal/quick-approval.svg';
import flexibleRepayment from '@/public/personal/flexible-repayment.svg';
import expertGuidance from '@/public/personal/message-square-02.svg';
import Image from 'next/image';

const LoanSlider = ({ data }) => {
    const swiperParams = {
        breakpoints: {
            768: {
                slidesPerView: 2.2,
            },
            1280: {
                slidesPerView: 3.5,
            },
            1600: {
                slidesPerView: 3.5,
            },
            1800: {
                slidesPerView: 4,
            },
        },
        slidesPerView: 1.2,
        spaceBetween: 20,
        grabCursor: true,
    };
    const items = [
        // {
        //     icon: competitiveRates,
        //     title: 'Competitive Rates',
        //     description: 'Benefit from competitive interest rates designed to suit your budget'
        // },
        {
            icon: simpleApplication,
            title: 'Simple Application',
            description: 'Enjoy a user-friendly online application process, ensuring a straightforward and hassle-free experience.'
        },
        {
            icon: quickApproval,
            title: 'Quick Approval',
            description: 'Experience swift approval, so you can get behind the wheel sooner'
        },
        {
            icon: flexibleRepayment,
            title: 'Flexible Repayment',
            description: 'We offer flexible repayment plans tailored to your financial situation'
        },
        {
            icon: expertGuidance,
            title: 'Expert Guidance',
            description: 'Our team is ready to assist you with any question or detail'
        }
    ];
    return (
        <Swiper {...swiperParams} className='flex flex-col md:flex-row md:items-stretch gap-10 relative mt-20'>
            {items && items.map((item, key) => {
                return (
                    <SwiperSlide key={key} className='overflow-hidden rounded-[1.875rem] bg-gray-100'>
                        <div className='min-h-[400px] px-10 py-5'>
                            <div className='flex items-center justify-center w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full border-2 border-black'>
                                <Image src={item.icon} className='max-lg:w-[25px] max-lg:h-[25px] w-[45px] h-[45px]' alt='Car Loan' />
                            </div>
                            <h3 className='text-2xl md:text-3xl font-black mt-4 md:mt-4'>{item.title}</h3>
                            <p className='mt-4'>{item.description}</p>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default LoanSlider;
