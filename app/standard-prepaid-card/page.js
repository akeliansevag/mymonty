import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';

import React from 'react';
import banner from '@/public/standard-physical-card.webp';

import Image from 'next/image';
import TextBlock from '../components/TextBlock';
import cardThatWorks from '@/public/a-card-that-works.webp';

export const metadata = {
    title: 'Standard Prepaid Card' + websiteName,
    description: '',
};


const standardCard = () => {
    const data = {
        title: 'Your Everyday Card',
        subtitle: 'Cards',
        desc: 'The most affordable physical card for your daily spending.',
        image: {
            inGrid: true,
            layout: 'half',
            url: banner,
        },
        cta: {
            type: 'button',
            button: {
                name: 'Order Your Standard Card'
            }
        }
    };

    const terms = {
        termsAndConditions: '/Virtual Prepaid Card Terms.pdf', 
        kfs: '/kfs/Standard-Prepaid-Card-KFS.pdf'
    }

    const howToOrder = [
        {
            title: 'Open the <strong>MyMonty App</strong>',
        },
        {
            title: 'Go to <strong>Cards</strong>',
        },
        {
            title: 'Tap <strong>New</strong> at the top right of the screen',
        },
        {
            title: 'Select <strong>Prepaid Card</strong>, then choose <strong>Standard Card</strong>',
        },
        {
            title: 'Tap <strong>Continue</strong>',
        },
    ];

    return (
        <>
            <Banner terms={terms} data={data} />
            
            <section className="bg-white text-center py-28 max-lg:py-14">
                <div className="container flex flex-col gap-8">
                    <TextBlock buttonColor="dark" title="Spend Your Way" center={true} button={false}  />          

                    <div className='grid lg:grid-cols-3 gap-4 mt-12'>
                        <div className='text-white overflow-hidden relative rounded-3xl px-4 lg:px-8 py-28 w-full h-full'>
                            <div className="absolute inset-0 bg-black/50 z-10"></div>
                            <img className='absolute top-0 left-0 w-full h-full object-cover' src="/lowest-issuance-fee.webp" />
                            <div className='flex flex-col justify-between items-center h-full relative z-20 max-lg:text-center'>
                                <h4 className='text-4xl font-bold mb-2'>Lowest Issuance Fee</h4>
                                <div className='w-max text-2xl font-bold bg-[#2657D4] rounded-full py-4 px-12 mt-24'>5 USD</div>
                            </div>
                        </div>   
                        <div className='text-white overflow-hidden relative rounded-3xl px-4 lg:px-8 py-28 w-full h-full'>
                            <div className="absolute inset-0 bg-black/50 z-10"></div>
                            <img className='absolute top-0 left-0 w-full h-full object-cover' src="/highly-competitive.webp" />
                            <div className='flex flex-col justify-between items-center h-full relative z-20 max-lg:text-center'>
                                <h4 className='text-4xl font-bold mb-2'>Highly competitive FX rate of</h4>
                                <div className='w-max text-2xl font-bold bg-[#2657D4] rounded-full py-4 px-12 mt-24'>4%</div>
                            </div>
                        </div>   
                        <div className='text-white overflow-hidden relative rounded-3xl px-4 lg:px-8 py-28 w-full h-full'>
                            <div className="absolute inset-0 bg-black/50 z-10"></div>
                            <img className='absolute top-0 left-0 w-full h-full object-cover' src="/no-surprises.webp" />
                            <div className='flex flex-col justify-between items-center h-full relative z-20 max-lg:text-center'>
                                <h4 className='text-4xl font-bold mb-2'>No Surprises Just Smart Spending</h4>
                                <div className='w-max text-2xl font-bold bg-[#2657D4] rounded-full py-4 px-12 mt-24'>100%</div>
                            </div>
                        </div>   
                    </div>  
                    <button className='mm-button w-max mx-auto'>Order Your Standard Card</button>
                </div>
            </section> 

            <section className="bg-[#F7F7F7] py-28 max-lg:py-14">
                <div className='container'>
                    <div className='flex md:flex-row max-lg:gap-10 lg:gap-32 items-center max-md:flex-col-reverse'>
                        <img className='md:w-1/2' src='/fits-your-routine.webp' alt='Requested Amount' width='' height='' />

                        <div>
                            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none text-balance'>A Card That Fits Your Routine</h2>
                            <p className='leading-8 mt-8'>Perfect for daily expenses, online purchases, and controlled spending.</p>
                            <ul className='flex flex-col gap-6 my-8'>
                                <li className='flex gap-2'>
                                    <span className='mt-1'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#2657D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    Valid for 5 years
                                </li>
                                <li className='flex gap-2'>
                                    <span className='mt-1'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#2657D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    Fresh USD balance
                                </li>
                                <li className='flex gap-2'>
                                    <span className='mt-1'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#2657D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    Full visibility through the MyMonty app
                                </li>
                            </ul>
                            <button className='mm-button w-max mx-auto'>Order Your Standard Card</button>
                        </div>
                    </div>
                </div>
            </section> 

            <section>
                <div className='relative'>
                    <Image alt='A card that works' placeholder='blur' quality={100} sizes='100vw' className='!absolute object-cover w-full h-full' src={cardThatWorks} width="1728" height="863" />
        
                    <div className='relative z-10 w-full text-white pt-28 max-lg:py-14'>
                        <div className='flex flex-col lg:justify-end items-center container text-center h-full'>
                            <div>
                                <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none text-balance'>A Card That just Works.</h2>
                                <p className="leading-8 mt-8">Your Standard Card is linked to your MyMonty USD wallet.</p>
                                <button className="mm-button mt-8 blue !text-white">Order Your Standard Card</button>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-8 mt-24">
                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-col justify-center items-center bg-[#101014] py-12 p-4 lg:p-12 rounded-3xl text-center">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.0013 12C17.0013 11.4477 16.5536 11 16.0013 11C15.449 11 15.0013 11.4477 15.0013 12L15.0013 15.0001H12.0013C11.449 15.0001 11.0013 15.4478 11.0013 16.0001C11.0013 16.5523 11.449 17.0001 12.0013 17.0001H15.0013V20C15.0013 20.5523 15.449 21 16.0013 21C16.5536 21 17.0013 20.5523 17.0013 20L17.0013 17.0001H20.0013C20.5536 17.0001 21.0013 16.5523 21.0013 16.0001C21.0013 15.4478 20.5536 15.0001 20.0013 15.0001H17.0013V12Z" fill="#0786FD"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.0778 1.66669H15.9248C12.847 1.66667 10.4349 1.66666 8.55291 1.91968C6.6266 2.17867 5.10656 2.71912 3.91348 3.9122C2.7204 5.10528 2.17995 6.62531 1.92096 8.55163C1.66794 10.4336 1.66795 12.8456 1.66797 15.9235V16.0765C1.66795 19.1544 1.66794 21.5664 1.92096 23.4484C2.17995 25.3747 2.7204 26.8948 3.91348 28.0878C5.10656 29.2809 6.6266 29.8214 8.55291 30.0804C10.4349 30.3334 12.8469 30.3334 15.9248 30.3334H16.0778C19.1557 30.3334 21.5677 30.3334 23.4497 30.0804C25.376 29.8214 26.896 29.2809 28.0891 28.0878C29.2822 26.8948 29.8227 25.3747 30.0816 23.4484C30.3347 21.5664 30.3347 19.1544 30.3346 16.0765V15.9235C30.3347 12.8457 30.3347 10.4336 30.0816 8.55163C29.8227 6.62531 29.2822 5.10528 28.0891 3.9122C26.896 2.71912 25.376 2.17867 23.4497 1.91968C21.5677 1.66666 19.1557 1.66667 16.0778 1.66669ZM5.3277 5.32642C6.08724 4.56687 7.11487 4.13102 8.8194 3.90185C10.5527 3.66881 12.8303 3.66669 16.0013 3.66669C19.1723 3.66669 21.4499 3.66881 23.1832 3.90185C24.8877 4.13102 25.9154 4.56687 26.6749 5.32642C27.4344 6.08596 27.8703 7.11358 28.0995 8.81812C28.3325 10.5514 28.3346 12.8291 28.3346 16C28.3346 19.171 28.3325 21.4486 28.0995 23.1819C27.8703 24.8865 27.4344 25.9141 26.6749 26.6736C25.9154 27.4332 24.8877 27.869 23.1832 28.0982C21.4499 28.3312 19.1723 28.3334 16.0013 28.3334C12.8303 28.3334 10.5527 28.3312 8.8194 28.0982C7.11487 27.869 6.08724 27.4332 5.3277 26.6736C4.56816 25.9141 4.1323 24.8865 3.90313 23.1819C3.67009 21.4486 3.66797 19.171 3.66797 16C3.66797 12.8291 3.67009 10.5514 3.90313 8.81812C4.1323 7.11358 4.56816 6.08596 5.3277 5.32642Z" fill="#0786FD"/>
                                        </svg>
                                        <h2 className="uppercase font-black text-2xl leading-none mt-6">Top up</h2>
                                        <p>Directly from your MyMonty eWallet</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center bg-[#101014] py-12 p-4 lg:p-12 rounded-3xl text-center">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 4C22 3.46957 22.2107 2.96086 22.5858 2.58579C22.9609 2.21071 23.4696 2 24 2H28C28.5304 2 29.0391 2.21071 29.4142 2.58579C29.7893 2.96086 30 3.46957 30 4V28H31C31.2652 28 31.5196 28.1054 31.7071 28.2929C31.8946 28.4804 32 28.7348 32 29C32 29.2652 31.8946 29.5196 31.7071 29.7071C31.5196 29.8946 31.2652 30 31 30H1C0.734784 30 0.48043 29.8946 0.292893 29.7071C0.105357 29.5196 0 29.2652 0 29C0 28.7348 0.105357 28.4804 0.292893 28.2929C0.48043 28.1054 0.734784 28 1 28H2V22C2 21.4696 2.21071 20.9609 2.58579 20.5858C2.96086 20.2107 3.46957 20 4 20H8C8.53043 20 9.03914 20.2107 9.41421 20.5858C9.78929 20.9609 10 21.4696 10 22V28H12V14C12 13.4696 12.2107 12.9609 12.5858 12.5858C12.9609 12.2107 13.4696 12 14 12H18C18.5304 12 19.0391 12.2107 19.4142 12.5858C19.7893 12.9609 20 13.4696 20 14V28H22V4ZM24 28H28V4H24V28ZM18 28V14H14V28H18ZM8 28V22H4V28H8Z" fill="#0786FD"/>
                                        </svg>
                                        <h2 className="uppercase font-black text-2xl leading-none mt-6">TRACK</h2>
                                        <p>Every transaction in real time</p>
                                    </div>
                                </div>
                                <div className="max-lg:flex lg:hidden flex-col justify-between bg-[#101014] pt-12 p-4 lg:pt-12 pb-0 rounded-3xl text-center h-full">
                                    <img src="/mymonty-app.webp" className="w-1/2 lg:w-full mx-auto mt-12" alt="MyMonty App" width="50" height="50" />
                                </div>
                                <img src="/mymonty-app.webp" className="max-lg:hidden w-1/2 lg:w-full mx-auto" alt="MyMonty App" width="50" height="50" />
                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-col justify-center items-center bg-[#101014] py-12 p-4 lg:p-12 rounded-3xl text-center">
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.3438 19.022C11.5005 20.93 13.0556 22.416 15.8441 22.592V24H17.0816V22.582C19.9691 22.386 21.6562 20.89 21.6562 18.718C21.6562 16.744 20.3651 15.726 18.0572 15.198L17.0816 14.974V11.14C18.3191 11.276 19.107 11.932 19.2968 12.84H21.4665C21.3097 11.002 19.6845 9.564 17.0816 9.408V8H15.8441V9.438C13.3794 9.672 11.6985 11.11 11.6985 13.144C11.6985 14.944 12.9484 16.088 15.0253 16.558L15.8441 16.754V20.822C14.5757 20.636 13.7362 19.962 13.5465 19.022H11.3438ZM15.8338 14.69C14.6169 14.416 13.9569 13.858 13.9569 13.018C13.9569 12.078 14.6685 11.374 15.8441 11.168V14.688L15.8338 14.69ZM17.2611 17.076C18.7399 17.408 19.4226 17.946 19.4226 18.896C19.4226 19.98 18.5728 20.724 17.0816 20.86V17.036L17.2611 17.076Z" fill="#0786FD"/>
                                            <path d="M16.5 30C12.6709 30 8.9987 28.525 6.29115 25.8995C3.58359 23.274 2.0625 19.713 2.0625 16C2.0625 12.287 3.58359 8.72601 6.29115 6.1005C8.9987 3.475 12.6709 2 16.5 2C20.3291 2 24.0013 3.475 26.7089 6.1005C29.4164 8.72601 30.9375 12.287 30.9375 16C30.9375 19.713 29.4164 23.274 26.7089 25.8995C24.0013 28.525 20.3291 30 16.5 30ZM16.5 32C20.8761 32 25.0729 30.3143 28.1673 27.3137C31.2616 24.3131 33 20.2435 33 16C33 11.7565 31.2616 7.68687 28.1673 4.68629C25.0729 1.68571 20.8761 0 16.5 0C12.1239 0 7.92709 1.68571 4.83274 4.68629C1.73839 7.68687 0 11.7565 0 16C0 20.2435 1.73839 24.3131 4.83274 27.3137C7.92709 30.3143 12.1239 32 16.5 32Z" fill="#0786FD"/>
                                            <path d="M16.5 27C13.4915 27 10.6061 25.8411 8.47876 23.7782C6.35139 21.7153 5.15625 18.9174 5.15625 16C5.15625 13.0826 6.35139 10.2847 8.47876 8.22183C10.6061 6.15893 13.4915 5 16.5 5C19.5085 5 22.3939 6.15893 24.5212 8.22183C26.6486 10.2847 27.8438 13.0826 27.8438 16C27.8438 18.9174 26.6486 21.7153 24.5212 23.7782C22.3939 25.8411 19.5085 27 16.5 27ZM16.5 28C18.1251 28 19.7343 27.6896 21.2357 27.0866C22.7371 26.4835 24.1013 25.5996 25.2504 24.4853C26.3996 23.371 27.3111 22.0481 27.933 20.5922C28.5549 19.1363 28.875 17.5759 28.875 16C28.875 14.4241 28.5549 12.8637 27.933 11.4078C27.3111 9.95189 26.3996 8.62902 25.2504 7.51472C24.1013 6.40042 22.7371 5.5165 21.2357 4.91345C19.7343 4.31039 18.1251 4 16.5 4C13.2179 4 10.0703 5.26428 7.74955 7.51472C5.42879 9.76515 4.125 12.8174 4.125 16C4.125 19.1826 5.42879 22.2348 7.74955 24.4853C10.0703 26.7357 13.2179 28 16.5 28Z" fill="#0786FD"/>
                                        </svg>
                                        <h2 className="uppercase font-black text-2xl leading-none mt-6">Fees</h2>
                                        <p>No hidden fees</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center bg-[#101014] py-12 p-4 lg:p-12 rounded-3xl text-center">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.8441 11.0312H20.3785C20.0598 11.0312 19.7566 11.1844 19.5691 11.4469L14.6566 18.2594L12.4316 15.1719C12.2441 14.9125 11.9441 14.7563 11.6223 14.7563H10.1566C9.95352 14.7563 9.83477 14.9875 9.95352 15.1531L13.8473 20.5531C13.9393 20.6815 14.0605 20.7861 14.201 20.8583C14.3415 20.9305 14.4971 20.9681 14.6551 20.9681C14.813 20.9681 14.9687 20.9305 15.1092 20.8583C15.2497 20.7861 15.3709 20.6815 15.4629 20.5531L22.0441 11.4281C22.166 11.2625 22.0473 11.0312 21.8441 11.0312Z" fill="#0786FD"/>
                                            <path d="M16 2C8.26875 2 2 8.26875 2 16C2 23.7313 8.26875 30 16 30C23.7313 30 30 23.7313 30 16C30 8.26875 23.7313 2 16 2ZM16 27.625C9.58125 27.625 4.375 22.4188 4.375 16C4.375 9.58125 9.58125 4.375 16 4.375C22.4188 4.375 27.625 9.58125 27.625 16C27.625 22.4188 22.4188 27.625 16 27.625Z" fill="#0786FD"/>
                                        </svg>
                                        <h2 className="uppercase font-black text-2xl leading-none mt-6">Simple As That</h2>
                                        <p>You only spend what you load.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#F7F7F7] py-28 max-lg:py-14 text-center'>
                <div className='container'>
                    <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none text-balance'>How to Order Your Standard Card</h2>
                    <p className="leading-8 mt-8">Getting your Standard Card takes just a few taps: </p>
                    <button className="mm-button mt-8 blue !text-white">Order Your Standard Card</button>
                    <div className='max-w-[950px] mx-auto relative mt-16'>
                        <>
                            <div className='max-lg:hidden border-t-[2px] left-1/2 -translate-x-1/2 h-[1px] absolute top-[43px] w-[80%]'></div>
                            <div className='relative flex max-lg:flex-col max-lg:items-center max-lg:gap-10 gap-4 text-center w-full'>
                                {
                                    howToOrder.map((item, index)=>{
                                        return (
                                            <div className='w-1/2 lg:w-1/4' key={index}>
                                                <div className="flex flex-col gap-3 items-center justify-center">
                                                        <div className='bg-[#F7F7F7] px-5'>
                                                            <div className="font-bold w-[86px] h-[86px] flex border border-black rounded-full justify-center items-center">
                                                                {index+1}
                                                            </div>
                                                        </div>
                                                    <div dangerouslySetInnerHTML={{ __html: item.title }}></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                    </div>
                </div>
            </section>
        </>
    )
}

export default standardCard;
