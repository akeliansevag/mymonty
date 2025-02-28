'use client';
import React, { useState, useEffect } from 'react';
import { data } from './footerNavData';
import Link from 'next/link';
import Form from './Form';

import { useAppContext } from '../AppContext';

const Footer = () => {
    const [openIndexes, setOpenIndexes] = useState([]);
    const { handleOpenModal, setFormComponent, setLargeWidth } = useAppContext();
    const handleClick = (index) => {
        setOpenIndexes((prevIndexes) => {
            const isOpen = prevIndexes.includes(index);
            if (isOpen) {
                return prevIndexes.filter((i) => i !== index);
            } else {
                return [...prevIndexes, index];
            }
        });
    };

    const handleGetClick = () => {
        setFormComponent(<Form />);
        setLargeWidth(false);
        handleOpenModal();
    }
    return (
        <section className='bg-black text-white'>
            <div className='container text-center pt-10 pb-10 lg:pt-20' id="download-now">
                <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>YOUR WALLET MADE DIGITAL</h2>
                <div className='md:w-1/2 mx-auto'>
                    <p className='leading-8 mt-8'>Download the MyMonty app now for smarter financial management. Available on both iOS and Android.</p>
                    <button onClick={handleGetClick} className='mm-button white mt-8 mx-auto'>Get MyMonty</button>
                </div>
            </div>

            <hr className='h-[1px] w-1/5 mx-auto mb-10 border-[#727272] opacity-50' />

            <div className='flex justify-center gap-8 items-center'>
                <a className='group' href='https://www.facebook.com/MyMontyLB' target='_blank' rel='noopener noreferrer nofollow'>
                    <svg className='group-hover:fill-white fill-[#727272]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1218_43570)">
                            <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1218_43570">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <a className='group' href='https://x.com/mymontyapp?t=ZWKCQexW8TIMHuV8xGM8sQ&s=08' target='_blank' rel='noopener noreferrer nofollow'>
                    <svg className='group-hover:fill-white fill-[#727272]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0955 10.3165L22.2864 1H20.3456L13.2303 9.08768L7.55141 1H1L9.58949 13.2311L1 23H2.94072L10.4501 14.4571L16.4486 23H23L14.0955 10.3165ZM11.4365 13.3385L10.5649 12.1198L3.64059 2.43161H6.62193L12.2117 10.2532L13.0797 11.4719L20.3447 21.6381H17.3634L11.4365 13.3385Z" />
                    </svg>
                </a>
                <a className='group' href='https://www.instagram.com/mymonty_lb/' target='_blank' rel='noopener noreferrer nofollow'>
                    <svg className='group-hover:fill-white fill-[#727272]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1218_43574)">
                            <path d="M23.6718 12.0468C23.6718 13.7249 23.6765 15.4031 23.6718 17.0859C23.6624 19.5234 22.5281 21.3281 20.5031 22.6031C19.3171 23.3437 17.9999 23.6718 16.6031 23.6718C13.5468 23.6718 10.4952 23.6859 7.439 23.6671C5.31556 23.6531 3.48743 22.9031 2.039 21.3281C1.14368 20.3531 0.60931 19.2046 0.454622 17.8781C0.42181 17.5968 0.417122 17.3202 0.417122 17.039C0.417122 13.6968 0.412435 10.3546 0.417122 7.01244C0.431185 4.57025 1.56556 2.76556 3.59056 1.49056C4.78587 0.745248 6.10775 0.421811 7.514 0.421811C10.5609 0.421811 13.6077 0.407748 16.6546 0.426498C18.7874 0.440561 20.6202 1.19525 22.0687 2.77962C22.9546 3.74994 23.4843 4.89837 23.6343 6.21087C23.6952 6.7265 23.6671 7.24212 23.6718 7.75306C23.6765 9.18744 23.6718 10.6171 23.6718 12.0468ZM2.15618 12.0468C2.15618 13.7671 2.1515 15.4827 2.15618 17.2031C2.16087 18.3843 2.59212 19.4015 3.39837 20.2452C4.48118 21.3749 5.83118 21.9234 7.38275 21.9327C10.4624 21.9515 13.5374 21.9374 16.6171 21.9374C17.6109 21.9374 18.5577 21.7218 19.4202 21.2249C21.0327 20.3015 21.9421 18.9421 21.9421 17.039C21.9421 13.6546 21.9421 10.2749 21.9421 6.89056C21.9421 5.71869 21.5156 4.70619 20.714 3.86712C19.6406 2.73275 18.2859 2.17494 16.739 2.16556C13.6265 2.14212 10.5187 2.15619 7.40618 2.15619C6.43587 2.15619 5.51712 2.38587 4.67337 2.864C3.06556 3.79212 2.1515 5.1515 2.15618 7.05462C2.15618 8.71869 2.15618 10.3827 2.15618 12.0468Z" />
                            <path d="M12.0609 17.0156C9.03282 17.0156 6.60469 14.5969 6.60938 11.5781C6.61407 8.63907 9.07501 6.22969 12.0797 6.23438C15.0984 6.23438 17.5359 8.65782 17.5313 11.6484C17.5266 14.6109 15.075 17.0156 12.0609 17.0156ZM12.0609 15.2813C14.1188 15.2813 15.7969 13.6453 15.7969 11.6344C15.7969 9.61407 14.1328 7.96876 12.0797 7.96876C10.0219 7.96876 8.34376 9.60469 8.34376 11.6156C8.34376 13.6359 10.0078 15.2813 12.0609 15.2813Z" />
                            <path d="M17.0156 5.79375C17.0156 5.12812 17.5266 4.59375 18.1641 4.59375C18.8016 4.59375 19.3125 5.13281 19.3125 5.79375C19.3125 6.44531 18.8016 6.97969 18.1734 6.98438C17.5359 6.98906 17.0156 6.45937 17.0156 5.79375Z" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1218_43574">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <a className='group' href='https://www.linkedin.com/company/mymonty-lebanon/about/?viewAsMember=true' target='_blank' rel='noopener noreferrer nofollow'>
                    <svg className='group-hover:fill-white fill-[#727272]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1218_43579)">
                            <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1218_43579">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <a className='group' href='https://www.youtube.com/channel/UCwDW4fXTnegDjn0FA_7c01w' target='_blank' rel='noopener noreferrer nofollow'>
                    <svg className='group-hover:fill-white fill-[#727272]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.4986 6.22346C23.2226 5.1908 22.4094 4.37766 21.3768 4.10166C19.505 3.6001 12 3.6001 12 3.6001C12 3.6001 4.49498 3.6001 2.62317 4.10166C1.5907 4.37766 0.777375 5.1908 0.501422 6.22346C0 8.09508 0 12.0002 0 12.0002C0 12.0002 0 15.9053 0.501422 17.7767C0.777375 18.8094 1.5907 19.6228 2.62317 19.8987C4.49498 20.4001 12 20.4001 12 20.4001C12 20.4001 19.505 20.4001 21.3768 19.8987C22.4094 19.6228 23.2226 18.8094 23.4986 17.7767C24 15.9053 24 12.0002 24 12.0002C24 12.0002 24 8.09508 23.4986 6.22346ZM9.59986 15.6003V8.40014L15.8351 12.0002L9.59986 15.6003Z" />
                    </svg>
                </a>
            </div>

            <div className='container pt-16 pb-10 lg:pb-10'>
                <div className="nav grid grid-cols-1 flex-wrap flex-col md:grid-cols-6 justify-between">
                    {data && data[0].children?.map((item, index) => {
                        const isOpen = openIndexes.includes(index);
                        let toggleClasses = isOpen ? 'max-md:max-h-96' : 'max-md:max-h-0'
                        let toggleArrowClasses = isOpen ? 'rotate-180' : 'rotate-0'
                        return (
                            <div key={index} className='max-lg:basis-1/3 mt-3'>
                                <span className='mb-0 sm:mb-5 block' >
                                    {item?.url && (
                                        <div className='flex justify-between item cursor-pointer' onClick={() => handleClick(index)}>
                                            <Link href={item.url} className='has-children'>
                                                {item?.title}
                                            </Link>
                                            <div className='md:hidden'>
                                                <svg className={`${toggleArrowClasses} transition-all duration-300 ease-in-out`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    )
                                    }
                                    {!item.url && (
                                        <h6 className="flex justify-between item has-children cursor-pointer" onClick={() => handleClick(index)}>
                                            <span>{item.title}</span>
                                            <div className="md:hidden">
                                                <svg className={`${toggleArrowClasses} transition-all duration-300 ease-in-out`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                           
                                        </h6>
                                    )}
                                </span>
                                {item?.children && (
                                    <ul className={`max-md:overflow-hidden item-wrapper transition-all duration-300 ease-in-out ${toggleClasses} md:block`} >
                                        {item.children.map((child, index2) => {
                                            return (
                                                <li key={index2} className='mt-2 text-base opacity-60 hover:opacity-100'>
                                                    {child?.url && (
                                                        <Link href={child.url}>{child.title}</Link>
                                                    )}
                                                    {!child?.url && (
                                                        child.title
                                                    )}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )}

                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='container text-sm'>
                <hr className='h-[1px] border-gray-900 mb-10' />
                <div className='grid grid-cols-1 md:grid-cols-4'>
                    <div className='mb-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="133" height="27" viewBox="0 0 133 27" fill="none">
                            <g clipPath="url(#clip0_2755_7061)">
                                <path d="M77.618 3.56396C82.2664 3.56396 86.3581 6.91212 86.3581 11.8388C86.3581 16.7655 82.2664 20.1469 77.618 20.1469C72.9697 20.1469 68.8779 16.832 68.8779 11.8388C68.8779 6.84566 72.9987 3.56396 77.618 3.56396ZM77.618 16.1798C79.9111 16.1798 81.8635 14.3188 81.8635 11.8388C81.8635 9.35886 79.9111 7.53108 77.618 7.53108C75.325 7.53108 73.3726 9.35886 73.3726 11.8388C73.3726 14.3188 75.3582 16.1798 77.618 16.1798Z" fill="white" />
                                <path d="M87.5713 3.56396H92.1906V6.07301C93.524 4.212 95.1981 3.56396 97.1214 3.56396C101.587 3.56396 102.796 7.12813 102.796 11.1576V19.8063H98.1766V11.2489C98.1766 9.0473 97.3707 7.37322 95.2313 7.37322C93.092 7.37322 92.1947 9.07638 92.1947 11.278V19.8021H87.5754V3.56396H87.5713Z" fill="white" />
                                <path d="M109.504 3.6018H113.908V7.22828H109.504V14.9756C109.504 15.6568 109.783 16.3713 110.684 16.3713C111.586 16.3713 111.893 15.6278 111.893 14.8842C111.893 14.4189 111.768 13.7667 111.677 13.5217H115.337C115.615 14.1115 115.71 14.8551 115.71 15.4117C115.71 17.7671 114.161 20.1557 110.41 20.1557C107.618 20.1557 104.893 19.1628 104.893 14.5435L104.864 0.00439453H109.513V3.60595L109.504 3.6018Z" fill="white" />
                                <path d="M4.6193 3.56396H0V19.8063H4.6193V3.56396Z" fill="white" />
                                <path d="M18.7555 3.56396C17.2351 3.56396 14.9421 3.9046 13.7332 6.23086C12.9273 4.61909 11.2823 3.56396 8.86469 3.56396C7.78048 3.56396 6.93306 3.89629 6.15625 4.44047V7.60169C6.39718 7.48538 6.76274 7.37738 7.25292 7.37738C9.30086 7.37738 9.91981 9.08053 9.91981 11.2531V19.8104H14.5059V11.2863C14.5059 9.147 15.1248 7.38153 17.1395 7.38153C19.1543 7.38153 19.8064 9.08469 19.8064 11.2573V19.8146H24.4257V11.1659C24.4257 7.13644 23.2169 3.57227 18.7513 3.57227L18.7555 3.56396Z" fill="white" />
                                <path d="M48.1994 3.56396H43.5801V19.8063H48.1994V3.56396Z" fill="white" />
                                <path d="M62.3316 3.56396C60.8113 3.56396 58.5182 3.9046 57.3094 6.23086C56.5035 4.61909 54.8585 3.56396 52.4409 3.56396C51.3567 3.56396 50.5092 3.89629 49.7324 4.44047V7.60169C49.9734 7.48538 50.3389 7.37738 50.8291 7.37738C52.877 7.37738 53.496 9.08053 53.496 11.2531V19.8104H58.0821V11.2863C58.0821 9.147 58.701 7.38153 60.7157 7.38153C62.7304 7.38153 63.3826 9.08469 63.3826 11.2573V19.8146H68.0019V11.1659C68.0019 7.13644 66.7931 3.57227 62.3275 3.57227L62.3316 3.56396Z" fill="white" />
                                <path d="M31.712 10.9582L28.4884 3.56396H23.8691L29.3525 16.267L31.712 10.9582Z" fill="white" />
                                <path d="M37.2576 3.56396L26.9639 26.7186H31.5956L41.8893 3.56396H37.2576Z" fill="white" />
                                <path d="M122.822 10.9582L119.599 3.56396H114.979L120.467 16.267L122.822 10.9582Z" fill="white" />
                                <path d="M128.368 3.56396L118.078 26.7186H122.71L132.999 3.56396H128.368Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2755_7061">
                                    <rect width="133" height="26.7188" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div>
                        <ul>
                            <li className='mb-2'><Link className='text-base opacity-60 hover:opacity-100' href="/terms-conditions">Website Terms and Conditions</Link></li>
                            
                            <li className='mb-2'><Link className='text-base opacity-60 hover:opacity-100' href="/key-facts-statements">Key Facts Statements</Link></li>
                            <li className='mb-2'><Link className='text-base opacity-60 hover:opacity-100' href="/fees-and-charges">Fees and Charges</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='mb-2'><Link className='text-base opacity-60 hover:opacity-100' href="/legal">Legal</Link></li>
                            <li className='mb-2'><Link className='text-base opacity-60 hover:opacity-100' href="/data-protection">Data Protection</Link></li>
                            <li className='mb-2'><Link className='text-base opacity-60 hover:opacity-100' href="/limits">Limits</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='mb-2'><Link className='text-base opacity-60 hover:opacity-100' href="/cookie-policy">Cookies Policy</Link></li>
                            <li className='mb-2'><Link className='text-base opacity-60 hover:opacity-100' href="/customer-rights-and-duties">Customer Rights and Duties</Link></li>
                            <li className='mb-2'><Link className='text-base opacity-60 hover:opacity-100' href="/complaints">Complaints</Link></li>
                        </ul>
                    </div>

                </div>


                <p className='opacity-30 text-base pb-20 mt-16'>© {new Date().getFullYear()} Monty Finance SAL <br /><br />

                    mymonty.com.lb provides information about financial and electronic wallet products and services provided by Monty Finance SAL through its mobile application mymonty available on App Store and Google Play.<br /><br />

                    Monty Finance SAL is registered in Lebanon (Beirut Register of Commerce No. 73215), Gefinor Center, Clemenceau St., Hamra, Beirut, Lebanon and is authorized by the Central Bank of Lebanon (“BDL”) to operate as a financial institution (BDL Decision no. 23/6/98 dated 02 February 1998) and e-wallet service provider (BDL Decision no. 30/23/23 dated 21 July 23). Monty Finance SAL is listed on the BDL List of Financial Institutions under no. 23.<br /><br />

                    Information contained on mymonty.com.lb or mymonty app should not be construed as an offer, solicitation, advertisement, or promotion of financial and electronic wallet products and services in any country where such offer, solicitation, advertisement, or promotion is not permitted under applicable local law.</p>

            </div>
        </section >
    )
}

export default Footer;
