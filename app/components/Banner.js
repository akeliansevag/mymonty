'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useAppContext } from '../AppContext';
import Form from '@/app/business/Form';
import AppForm from '@/app/components/Form';

const Banner = ({ data, theme, salaryForm, AnimatedImage, terms }) => {
    let target = data.cta?.link?.target ? data.cta.link.target : '';
    const { handleOpenModal } = useAppContext();

    const { setFormComponent, setLargeWidth } = useAppContext();

    const handleGetClick = () => {
        setFormComponent(<Form />);
        setLargeWidth(true);
        handleOpenModal();
    }

    const handleOriginalOpenModal = () => {
        setFormComponent(<AppForm />);
        setLargeWidth(false);
        handleOpenModal();
    }

    return (
        <section className={`pb-14 md:pb-20 md:pt-26 max-md:pt-[calc(var(--header-height)+20px)] flex flex-col justify-center min-h-[calc(100vh-var(--header-height))] w-full relative ${theme == 'dark' ? 'bg-black' : 'bg-gray-100'} ${data.image.layout !== 'full' || !data.image.inGrid ? 'max-md:pb-14' : ''}`}>
            {
                data?.image?.layout === 'full' && (
                    <>
                        <Image alt='Girl holding a phone' fill placeholder='blur' quality={100} sizes='100vw' src={data.image.url} className='hidden md:block object-cover custom-object-position md:object-center' priority />
                        <Image alt='Girl holding a phone' fill placeholder='blur' quality={100} sizes='100vw' src={data.image.urlMobile} className='block md:hidden object-cover' priority />
                    </>
                )
            }

            <div className='relative z-1 md:mt-[80px]'>
                {
                    data.image.inGrid ? (
                        <div className='container'>
                            <div className={`flex flex-col md:flex-row gap-10 md:gap-0 items-center ${data.image.layout !== 'full' ? 'justify-center ' : 'h-[100dvh]'} `}>
                                <div className={`flex flex-col w-full md:w-1/2 justify-center md:mt-0 ${data.image.layout !== 'full' ? '' : ''}`}>
                                    <div>
                                        {
                                            data?.subtitle && (
                                                <div className='flex gap-5 items-center'>
                                                    <h2>{data.subtitle}</h2>
                                                    {data?.comingSoon && (
                                                        <div className='rounded-xl inline-block text-base py-2 px-4 bg-gradient-to-r from-[#E73E3E] to-[#F02CC2] font-bold italic text-white'>
                                                            Coming soon
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        }
                                        <h1 className={`font-black text-4xl sm:text-5xl md:text-6xl fhd:text-[5.4rem] leading-none uppercase ${data.image.layout !== 'full' ? 'mt-6' : ''}`}>{data.title}</h1>
                                        <p dangerouslySetInnerHTML={{ __html: data.desc }} className='text-xl mt-8'></p>

                                        {
                                            data.cta && (
                                                data.cta.type === 'link' ? (
                                                    <Link className={`mm-button mt-8 ${theme == 'dark' ? 'white' : 'blue'}`} href={data.cta.link.url} target={target}>{data.cta.link.name}</Link>
                                                ) : salaryForm ? (
                                                    <button onClick={handleGetClick} className={`mm-button mt-8 ${theme == 'dark' ? 'white' : 'blue'}`}>{data.cta.button.name}</button>
                                                ) : (
                                                    <button onClick={handleOriginalOpenModal} className={`mm-button mt-8 ${theme == 'dark' ? 'white' : 'blue'}`}>{data.cta.button.name}</button>
                                                )
                                            )
                                        }
                                    </div>
                                </div>

                                {
                                    data?.image?.layout === 'half' && !AnimatedImage && (
                                        <div className='w-full md:w-1/2'>
                                            <Image alt='Girl holding a phone' placeholder='blur' quality={100} sizes='100vw' src={data.image.url} className='w-full md:w-2/3 ml-auto' priority />
                                        </div>
                                    )

                                }
                                {
                                    data?.image?.layout === 'half' && AnimatedImage && (
                                        <div className='w-full md:w-1/2'>
                                            <AnimatedImage />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className='container'>
                                <div className={`flex flex-col md:flex-row gap-10 md:gap-0 items-center ${data.image.layout !== 'full' ? 'justify-cente ' : 'h-[100dvh]'} `}>
                                    <div className={`flex flex-col w-full md:w-1/2 justify-center md:mt-0 ${data.image.layout !== 'full' ? '' : ''}`}>
                                        <div>
                                            {
                                                data?.subtitle && (
                                                    <div className='flex gap-5 items-center'>
                                                        <h2>{data.subtitle}</h2>
                                                        {data?.comingSoon && (
                                                            <div className='rounded-xl inline-block text-base py-2 px-4 bg-gradient-to-r from-[#E73E3E] to-[#F02CC2] font-bold italic text-white'>
                                                                Coming soon
                                                            </div>
                                                        )}
                                                    </div>

                                                )
                                            }
                                            <h1 className={`font-black text-4xl sm:text-5xl md:text-6xl fhd:text-[5.4rem] leading-none uppercase ${data.image.layout !== 'full' ? 'mt-6' : ''}`}>{data.title}</h1>
                                            <p className='text-xl mt-8'>{data.desc}</p>

                                            {
                                                data.cta && (
                                                    data.cta.type === 'link' ? (
                                                        <Link className={`mm-button mt-8 ${theme == 'dark' ? 'white' : 'blue'}`} href={data.cta.link.url} target={target}>{data.cta.link.name}</Link>
                                                    ) : salaryForm ? (
                                                        <button onClick={handleGetClick} className={`mm-button mt-8 ${theme == 'dark' ? 'white' : 'blue'}`}>{data.cta.button.name}</button>
                                                    ) : (
                                                        <button onClick={handleOriginalOpenModal} className={`mm-button mt-8 ${theme == 'dark' ? 'white' : 'blue'}`}>{data.cta.button.name}</button>
                                                    )
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='max-md:container mt-10'>
                                <div className='md:absolute flex h-full w-full md:w-5/12 top-0 right-[5%] justify-end items-center'>
                                    {data?.image?.url && (
                                        <Image alt='Girl holding a phone' placeholder='blur' quality={100} sizes='100vw' src={data.image?.url} className='w-full' priority />
                                    )}
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
            
            {
                terms && (
                    <div className='container text-base underline text-[#2657D4] mt-10'>
                        {terms.termsAndConditions && (
                            <div>
                                 <a className='uppercase' href={terms.termsAndConditions} target='_blank'>TERMS & CONDITIONS APPLY</a>
                            </div>
                        )}
                        {terms.kfs && (
                            <div>
                                 <a className='uppercase' href={terms.kfs} target='_blank'>Key Facts Statement (KFS)</a>
                            </div>
                        )}
                        
                    </div>
                )
            }
           
        </section>
    )
}

export default Banner;
