import React from 'react';
import Image from 'next/image';

import { websiteName } from '@/app/config';
import banner from '@/public/youth-banner.webp';
import youthCard from '@/public/youth-card.webp';
import controlYourMoney1 from '@/public/control-your-money-1.webp';
import controlYourMoney2 from '@/public/control-your-money-2.webp';
import AnimationSection from './AnimationSection';
export const metadata = {
    title: websiteName + 'Cards',
    description: '',
};

const Under18 = () => {
    return (
        <>
            <section className='flex flex-col relative lg:min-h-[100dvh] pt-[var(--header-height)] overflow-hidden -z-10 max-lg:pb-32'>
                <img src='/youth-banner.webp' alt='Youth Card' className='absolute top-0 left-0 object-cover object-bottom w-full h-full -z-10' />

                <div className='container h-full text-center mt-20 lg:mt-40'>
                    <h1 className='font-black text-[42px] ssm:text-5xl md:text-6xl lg:text-[5.4rem] xl:text-[5rem] mt-6 leading-none uppercase'>Be life ready</h1>
                    <p className='text-xl mt-8'>Your money. Your rules. Your Card.</p>
                    <button className='mm-button !bg-white !text-black mt-8'>Download The App</button>
                    <Image quality={100} sizes='100vw' priority placeholder='blur' alt='Youth Card' src={youthCard} className="lg:w-3/5 mx-auto mt-10" />
                </div>
            </section>

            <div className="marquee overflow-hidden relative z-20 -top-10 ">
                <div className="relative wrapper grid grid-flow-col auto-cols-[5rem] lg:auto-cols-[10rem] justify-items-center items-center animate-[marquee_20s_linear_infinite] lg:animate-[marqueelg_20s_linear_infinite]">
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
                <img src='/shape-10.svg' alt='Shape' className='absolute top-20 left-0 -z-10' />
                <div className='container h-full text-center mt-40'>
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
        </>

    )
}

export default Under18;
