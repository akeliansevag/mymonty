import React from 'react';
import { data } from './navData';
import Link from 'next/link';


const Footer = () => {
    return (
        <section className='bg-black text-white'>
            <div className='container text-center pt-10 pb-10 lg:pt-20 lg:pb-20'>
                <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Download the app now</h2>
                <div className='md:w-1/2 mx-auto'>
                    <p className='leading-8 mt-4'>Skip the hustle and bustle and get straight to the money. Request it from anyone across the globe via a link!</p>
                    <Link href="#" className='mm-button white mt-6 mx-auto'>Download app</Link>
                </div>
            </div>
            <div className='h-[1px] bg-white bg-opacity-10' />
            <div className='container pt-10 pb-10 lg:pt-20 lg:pb-20'>
                <div className='grid grid-cols-1 gap-4 text-center sm:text-left sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-between'>
                    {data && data[0].children?.map((item, index) => {
                        return (
                            <div key={index}>
                                <span className='mb-2 sm:mb-5 block' >
                                    {item?.url && (
                                        <Link href={item.url}>{item?.title}</Link>
                                    )
                                    }
                                    {!item.url && (
                                        item.title
                                    )}
                                </span>
                                {item?.children && (
                                    <ul>
                                        {item.children.map((child, index2) => {
                                            return (
                                                <li key={index2} className='mb-2'>
                                                    <span className='text-lg opacity-60 hover:opacity-100'>
                                                        {child?.url && (
                                                            <Link href={child.url}>{child.title}</Link>
                                                        )}
                                                        {!child?.url && (
                                                            child.title
                                                        )}
                                                    </span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )}

                            </div>
                        )
                    })}
                </div>
            </div >
            <div className='container'>
                <div className='h-[1px] bg-white bg-opacity-30'></div>
                <div className='py-10 text-center md:text-left md:flex md:items-center justify-between'>
                    <p className='opacity-60 text-lg'>
                        Copyright © 2023, All Rights Reserved MyMonty™
                    </p>
                    <div className='justify-center md:justify-end flex gap-7 text-lg underline'>
                        <Link className='opacity-60 hover:opacity-100' href="/">Terms & Conditions</Link>
                        <Link className='opacity-60 hover:opacity-100' href="/">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Footer;
