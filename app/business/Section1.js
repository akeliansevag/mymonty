'use client';
import React, { useEffect } from 'react'
import Image from 'next/image';
import salary from '@/public/business/salary.webp';
import { useAppContext } from '@/app/AppContext';
import Form from './Form';

const Section1 = () => {
    const { handleOpenModal } = useAppContext();
    const { setFormComponent, setLargeWidth } = useAppContext();

    const handleButtonClick = () => {
        setFormComponent(<Form />);
        setLargeWidth(true);
        handleOpenModal();
    }

    return (
        <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
            <div className='container text-center'>
                <h2 className='text-center uppercase font-black text-3xl sm:text-5xl lg:text-[2.875rem] w-full lg:w-2/3 leading-none mx-auto'>Employee Salary domiciliation with a portal for companies</h2>

                <p className='leading-8 mt-10 text-center w-full lg:w-2/3 mx-auto'>Setting up free salary domiciliation for your employees will ensure a smooth transition to automated payroll management. Centralizing salary payments not only increases efficiency but also saves costs and time. Employees will benefit from the convenience of having their salaries deposited directly into their wallet accounts.</p>

                <button onClick={handleButtonClick} className='mm-button white mt-8'>Learn more</button>

                <Image className='mt-10' alt='Growth Oriented Environmemt' placeholder='blur' quality={100} src={salary} />

                <p className='leading-8 mt-10 text-center w-full lg:w-2/3 mx-auto'>Enhanced employee retention is achieved through timely payments, allowing them to plan effectively. This is coupled with reduced errors, as manual intervention is minimized, contributing to accuracy in salary disbursements. </p>
            </div>
        </section>
    )
}

export default Section1