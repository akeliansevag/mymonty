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
                    <TextBlock center={true} title="Advance on Salary" description="Have you ever faced an urgent payment? Or missed out on a Black Friday deal because of that 'insufficient funds in your account' message? With MyMonty Advance on Salary, you can access a portion of your next salary in advance to spend and repay at your convenience, with three flexible options." button={true} />
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

                </div>
            </Section>
        </div>
    )
}

export default SectionOne;
