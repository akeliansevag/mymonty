'use client';
import React, { useEffect } from 'react'
import Image from 'next/image';
import employeeBenefits from '@/public/business/employee-benefits.webp';
import { useAppContext } from '@/app/AppContext';
import Form from './Form';
import earlySalary from '@/public/business/early-salary.webp';

const Section3 = () => {
    const { handleOpenModal } = useAppContext();
    const { setFormComponent, setLargeWidth } = useAppContext();

    const handleButtonClick = () => {
        setFormComponent(<Form />);
        setLargeWidth(true);
        handleOpenModal();
    }

    return (
        <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
            <div className='container'>
                <div className='flex flex-col items-center'>
                    <h2 className='text-center uppercase font-black text-3xl sm:text-5xl lg:text-[2.875rem] w-full lg:w-2/3 leading-none'>How Does Early Salary Work?</h2>

                    <p className='leading-8 mt-10 text-center w-full lg:w-2/3'>Implementing Early Salary for your employees is simple. Our dedicated sales team will facilitate the integration, ensuring a smooth and secure process that aligns with our payroll system.</p>

                    <button onClick={handleButtonClick} className='mm-button !bg-white !text-black w-max mt-5'>Get Started Today!</button>

                    <Image alt='Growth Oriented Environmemt' placeholder='blur' className='mt-10' src={earlySalary} width="1670" height="976" />

                    <p className='leading-8 mt-10 text-center w-full lg:w-4/5'>By offering Early Salary, we’re not just providing a financial service; we’re investing in the well-being and satisfaction of your employees.<br />
                        Join us in empowering your workforce to manage their finances more effectively. </p>
                </div>
            </div>
        </section>
    )
}

export default Section3