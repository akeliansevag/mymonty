'use client';
import React from 'react';
import Section from '../components/Section';
import TextBlock from '../components/TextBlock';
import Image from 'next/image';
import useGlobalAnimation from '../hooks/useGlobalAnimation';
import free from '@/public/personal/option1.webp';
import installment from '@/public/personal/option2.webp';
import twopointfive from '@/public/personal/option3.webp';

const SectionOne = () => {
    const animRef = useGlobalAnimation();
    const animRef2 = useGlobalAnimation();
    const animRef3 = useGlobalAnimation();
    return (
        <div id="advance-on-salary">
            <Section>
                <div className='container overflow-hidden text-center'>
                    <TextBlock buttonColor="dark" center={true} title="receive your ADVANCE ON SALARY" description="Ever faced an urgent payment or missed out on a Black Friday deal because of insufficient funds? With MyMonty's Advance on Salary, access a portion of your next salary in advance. Spend and repay at your convenience with three flexible options." button={false} />
                    <div className='flex flex-col md:flex-row gap-10 items-center justify-center mt-10'>
                        <div>
                            <Image ref={animRef} className='' alt="Free" src={free} />
                        </div>
                        <div>
                            <Image ref={animRef2} className='' alt="Installment" src={installment} />
                        </div>
                        <div>
                            <Image ref={animRef3} className='' alt="Two Point Five" src={twopointfive} />
                        </div>

                    </div>

                    <TextBlock buttonColor="dark" center={true} title="" description="" button={true} />

                </div>
            </Section>
        </div>
    )
}

export default SectionOne;