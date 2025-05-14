import React from 'react';
import Image from 'next/image';

import { websiteName } from '@/app/config';
import banner from '@/public/youth-banner.webp';
import youthCard from '@/public/youth-card.webp';
import controlYourMoney1 from '@/public/control-your-money-1.webp';
import controlYourMoney2 from '@/public/control-your-money-2.webp';
import forParents from '@/public/for-parents.webp';

import AnimationSection from './AnimationSection';
import Contact from './Contact';
import CardsSlider from './CardsSlider';

export const metadata = {
    title: websiteName + 'Under 18',
    description: '',
};

const Under18 = () => {

    const marqueeItems = [
        { text: 'E-Wallet LBP/USD', color: '#E95942' },
        { text: 'Vouchers', color: '#47A58B' },
        { text: 'QR Payments', color: '#7367FF' },
        { text: 'Transfer P2P', color: '#F57F00' },
        { text: 'Digital Onboarding', color: '#F98BB0' },
        { text: 'Cash/Card Top Up', color: '#73AAEE' },
    ];

    return (
        <>
            <section className='flex flex-col relative lg:min-h-[100dvh] pt-[var(--header-height)] overflow-hidden max-lg:pb-32'>
                <img src='/youth-banner.webp' alt='Youth Card' className='absolute top-0 left-0 object-cover object-bottom w-full h-full -z-10' />

                <div className='container h-full text-center mt-20 lg:mt-40'>
                    <h1 className='font-black text-[42px] ssm:text-5xl md:text-6xl lg:text-[5.4rem] xl:text-[5.4rem] mt-6 leading-none uppercase'>Be life ready</h1>
                    <p className='text-xl mt-8'>Your money. Your rules. Your Card.</p>
                    <button className='mm-button !bg-white !text-black mt-8'>Download The App</button>
                    <Image quality={100} sizes='100vw' priority placeholder='blur' alt='Youth Card' src={youthCard} className="lg:w-1/2 mx-auto mt-20" />
                </div>
            </section>

            <div className="marquee overflow-hidden relative z-20 -top-10 ">
                <div className="relative wrapper grid grid-flow-col auto-cols-[7rem] lg:auto-cols-[10rem] justify-items-center items-center animate-[marquee_20s_linear_infinite] lg:animate-[marqueelg_20s_linear_infinite]">
                    {Array.from({ length: 9 }).map((_, innerIndex) => (
                        <img
                            key={`inner-${innerIndex}`}
                            className="marquee-item w-[180px]"
                            src={`shape-${innerIndex + 1}.svg`}
                            alt={`Marquee-${innerIndex}`}
                            width={200}
                            height={200}
                        />
                    ))}
                    {Array.from({ length: 9 }).map((_, innerIndex) => (
                        <img
                            key={`inner-${innerIndex}`}
                            className="marquee-item w-[180px]"
                            src={`shape-${innerIndex + 1}.svg`}
                            alt={`Marquee-${innerIndex}`}
                            width={200}
                            height={200}
                        />
                    ))}
                    {Array.from({ length: 9 }).map((_, innerIndex) => (
                        <img
                            key={`inner-${innerIndex}`}
                            className="marquee-item w-[180px]"
                            src={`shape-${innerIndex + 1}.svg`}
                            alt={`Marquee-${innerIndex}`}
                            width={200}
                            height={200}
                        />
                    ))}
                </div>
            </div>

            <section className='relative pt-7 pb-7 bg-gradient-to-b from-white to-[#F8F4EE] from-0% to-20% z-0'>
                <img src='/shape-10.svg' alt='Shape' className='absolute top-64 lg:top-20 left-0 -z-10' />
                <div className='container h-full text-center lg:mt-40'>
                    <h1 className='font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] mt-6 leading-none uppercase'>Take Control of Your Money with <span className="blue-text">MyMonty &lt;18</span></h1>
                    <p className='text-xl mt-8'>Start your journey toward financial independence with MyMonty &lt;18. Manage your money, make smart choices, and have the freedom to spend and save, all on your phone.</p>
                    <button className='mm-button !bg-[#EED793] !text-black mt-8'>Get The App</button>
                    <div className='flex max-lg:flex-col items-center gap-8 mt-10'>
                        <Image quality={100} sizes='100vw' priority placeholder='blur' alt='control you money' src={controlYourMoney1} />
                        <Image quality={100} sizes='100vw' priority placeholder='blur' alt='control you money' src={controlYourMoney2} />
                    </div>
                </div>
            </section>

            <AnimationSection />

            <section className="marquee-1 overflow-hidden relative z-20 bg-[#ECE2F5] py-12">
                <div className="relative wrapper grid grid-flow-col auto-cols-[18rem] lg:auto-cols-[18rem] justify-items-center items-center animate-[marquee1_20s_linear_infinite] lg:animate-[marqueelg1_20s_linear_infinite]">
                    {marqueeItems.map((marquee, i) => (
                        <div key={i} className={`marquee-shadow border-4 bg-white rounded-full flex items-center justify-center gap-2 py-2 px-6 w-[250px]`} style={{ borderColor: marquee.color }}>
                            <span className='w-2 h-2 rounded-full' style={{ backgroundColor: marquee.color}}></span>
                            <h3 style={{ color: marquee.color }}>{marquee.text}</h3>
                        </div>
                    ))}
                    {marqueeItems.map((marquee, i) => (
                        <div key={i} className={`marquee-shadow border-4 bg-white rounded-full flex items-center justify-center gap-2 py-2 px-6 w-[250px]`} style={{ borderColor: marquee.color }}>
                            <span className='w-2 h-2 rounded-full' style={{ backgroundColor: marquee.color}}></span>
                            <h3 style={{ color: marquee.color }}>{marquee.text}</h3>
                        </div>
                    ))}
                    {marqueeItems.map((marquee, i) => (
                        <div key={i} className={`marquee-shadow border-4 bg-white rounded-full flex items-center justify-center gap-2 py-2 px-6 w-[250px]`} style={{ borderColor: marquee.color }}>
                            <span className='w-2 h-2 rounded-full' style={{ backgroundColor: marquee.color}}></span>
                            <h3 style={{ color: marquee.color }}>{marquee.text}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <section className='relative pt-7 pb-7 overflow-x-hidden'>
                <div className='container h-full text-center lg:mt-40'>
                    <h1 className='font-black text-[#F68231] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] mt-6 leading-none uppercase'>For Parents</h1>
                    <p className='text-xl mt-8'>You stay in control while giving them the freedom to learn responsibility. <br /> With MyMonty &lt;18, you can monitor spending, set limits, and guide their financial journey, all while they build essential money skills.</p>
                    <button className='mm-button !bg-[#C6025F] mt-8'>Get The App</button>

                    <div className='relative max-lg:mt-10'>
                        <Image quality={100} sizes='100vw' priority placeholder='blur' alt='For Parents' src={forParents} />
                        <img  src='/shape-15.svg' alt='Shape' className='absolute max-sm:bottom-10 max-md:bottom-12 max-lg:bottom-24 lg:bottom-24 right-0 max-sm:w-[50px] max-md:w-[100px] max-lg:w-[150px] animate-[rotate_10s_linear_infinite]' />
                     </div>
                </div>
            </section>

            <section className='relative pt-36 pb-36 mt-20'>
                <div className="absolute bottom-0 left-0 w-full h-full -z-10">
                    <img src='/how-to-get-mymonty-under-18-bg.webp' alt='How to get MyMonty <18' className='w-full h-full object-cover' />
                </div>
                <div className='container h-full'>
                    <div className='flex max-lg:flex-col justify-between items-center'>
                        <div className="w-full lg:w-1/2">
                            <h1 className='font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] mt-6 leading-none uppercase'>How to Get MyMonty <span className="text-[#FFE401]">&lt;18</span></h1>
                            <button className='mm-button !bg-[#FFE401] !text-black mt-8'>Get The App</button>
                        </div>
                        <div className='w-full lg:w-1/2 relative max-lg:mt-10'>
                            <CardsSlider />
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative py-28'>
                <div className="absolute bottom-0 left-0 w-full h-full -z-10">
                    <img src='/shape-13.svg' alt='Shape' className='w-full h-full object-cover' />
                </div>
                <div className='container h-full text-center'>
                    <div className='lg:w-3/5 mx-auto'>
                        <h1 className='font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] mt-6 leading-none uppercase'>Fill out the form to <span className="text-[#2657D4]">reach&nbsp;us</span></h1>

                        <div className="p-4 bg-white rounded-3xl mt-20 youth-form">
                            <Contact />
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Under18;
