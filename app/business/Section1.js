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
                <h2 className='text-center uppercase font-black text-3xl sm:text-5xl lg:text-[2.875rem] w-full lg:w-2/3 leading-none mx-auto'>EMPLOYEE PAYROLL SERVICES
                    WITH A PORTAL FOR COMPANIES</h2>

                <p className='leading-8 mt-10 text-center w-full lg:w-2/3 mx-auto'>Streamline Payroll Services for your employees and enjoy automated payroll management. Centralizing salary payments boosts efficiency, reduces costs, and saves time. Employees benefit from having their salaries deposited directly into their wallet accounts.</p>

                <button onClick={handleButtonClick} className='mm-button white mt-8'>Learn More</button>

                <Image className='mt-10' alt='Growth Oriented Environmemt' placeholder='blur' quality={100} src={salary} />

                <p className='leading-8 mt-10 text-center w-full lg:w-2/3 mx-auto'>Enhance employee retention with timely payments, allowing effective planning and reducing errors through minimized manual intervention. Accurate salary disbursements contribute to a more satisfied workforce.</p>
            </div>
        </section>
    )
}

export default Section1