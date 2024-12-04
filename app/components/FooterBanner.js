'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

function FooterBanner({ subtitle, title, downloadURL }) {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <section className='py-32 flex flex-col justify-center w-full relative bg-gray-100'>
            <div className='container'>
                <div class="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-center  ">
                    <div class="flex flex-col w-full md:w-2/3 justify-center md:mt-0 ">
                        <div>
                            {subtitle && (
                                <div className="flex items-center gap-4">
                                    { pathname == '/khoury-home/terms-and-conditions' && (
                                        <Link href="/khoury-home">
                                            <svg className="opacity-60" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </Link>
                                    )}
                                    <h2 className="font-bold opacity-60">{subtitle}</h2>
                                </div>
                            )}
                            <h1 class="font-black text-4xl sm:text-5xl md:text-6xl fhd:text-[5.4rem] leading-none uppercase mt-6">
                                {title}
                            </h1>
                            {downloadURL && (
                                <a className='download-pdf' href={downloadURL} target='_blank'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                        <g clip-path="url(#clip0_2906_7287)">
                                            <path d="M3.95833 2.0835C3.08386 2.0835 2.375 2.796 2.375 3.66683V10.0002V13.1668V17.9168C2.375 18.7877 3.08386 19.5002 3.95833 19.5002H15.0417C15.9165 19.5002 16.625 18.7877 16.625 17.9168V13.1668V10.0002V6.8335L11.875 2.0835H3.95833Z" fill="#C0392B" />
                                            <path d="M3.95833 1.29175C3.08386 1.29175 2.375 2.00425 2.375 2.87508V9.20841V12.3751V17.1251C2.375 17.9959 3.08386 18.7084 3.95833 18.7084H15.0417C15.9165 18.7084 16.625 17.9959 16.625 17.1251V12.3751V9.20841V6.04175L11.875 1.29175H3.95833Z" fill="#E74C3C" />
                                            <path d="M16.625 6.04175L11.875 1.29175V4.45841C11.875 5.32925 12.5835 6.04175 13.4583 6.04175H16.625Z" fill="#C0392B" />
                                            <path d="M15.1316 9.2085H14.902C14.8308 9.28766 14.4263 9.84183 14.2513 10.0002C14.2038 10.0793 14.1325 10.1585 14.0922 10.1585C13.504 10.871 12.2531 12.0585 11.5026 12.6918C11.4045 12.771 11.3095 12.8501 11.292 12.8501C11.2398 12.9293 10.7395 13.2459 10.5146 13.4043C9.79817 13.8793 8.95742 14.2751 8.30429 14.4335C7.01538 14.7501 6.00973 14.671 4.70411 14.0376C4.30954 13.8793 3.74738 13.5626 3.43918 13.3251C3.13677 13.0876 3.16867 13.0877 3.16915 13.4835V13.8793L3.37324 13.9585C3.63504 14.1168 4.20013 14.4334 4.56858 14.5918C4.8493 14.7501 4.93678 14.8293 4.77971 14.8293C4.635 14.7501 3.81372 14.7501 3.49816 14.8293H3.1815C3.17421 14.8293 3.16828 14.9877 3.16828 15.146V15.4627H3.27381C3.72791 15.3043 4.70253 15.3043 5.15623 15.3834C5.69045 15.4626 6.06633 15.5418 6.51782 15.7793C7.37923 16.1751 8.09371 16.9668 8.40484 17.7584L8.46817 17.9168H8.8165H9.16483L9.14583 17.8377C9.03421 17.3627 8.72071 16.8085 8.33279 16.4126C8.07788 16.096 7.62766 15.7793 7.45024 15.621H7.39039C7.36158 15.5418 7.06066 15.3834 6.9321 15.3834C6.85895 15.3043 6.79934 15.3043 6.79934 15.3043C6.79934 15.2251 6.85475 15.2251 6.92244 15.3043C7.09146 15.3043 7.77214 15.2252 8.08025 15.146C8.93367 14.9877 9.74117 14.6709 10.5574 14.1959C10.8503 14.0376 11.5153 13.4835 11.7813 13.3251C11.9792 13.0876 12.0425 13.0877 11.9618 13.1668C11.9333 13.246 11.8787 13.3251 11.8391 13.4043C11.8003 13.4834 11.7322 13.5626 11.6887 13.6418C11.0728 14.5918 10.6777 15.7793 10.5708 17.1252C10.5558 17.3627 10.5431 17.6001 10.5431 17.6793V17.9168H12.3893H14.2355L14.1753 17.8377C13.8428 17.3627 13.4303 16.3335 13.2918 15.621C13.1778 15.0668 13.1438 14.196 13.215 13.721C13.4224 12.4543 14.1294 11.3459 15.3438 10.6334C15.4689 10.5543 15.6304 10.4752 15.7024 10.396L15.8346 10.3168V10.0793C15.8346 9.92098 15.8251 9.76262 15.8133 9.76262C15.5251 9.92096 14.8838 10.3168 14.5893 10.4751C14.4318 10.6335 14.4223 10.6335 14.5703 10.4751C14.7825 10.2376 15.1483 9.84179 15.537 9.36679L15.7183 9.2085H15.3216H15.1316Z" fill="#ECF0F1" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2906_7287">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg></span>
                                    <span>Download PDF</span>
                                </a>
                            )}

                        </div>
                    </div>
                    <div class="w-full md:w-1/3"></div>
                </div>
            </div>
        </section >
    )
}

export default FooterBanner;
