'use client';
import React from 'react';
import styles from './page.module.css';
import { usePathname } from 'next/navigation';

const KFS = () => {

    const pathname = usePathname();

    const isNotBusiness =
        pathname !== '/business' &&
        !pathname.startsWith('/business/');


    const isBusiness =
        pathname === '/business' ||
        pathname.startsWith('/business/');

    return (
        <>
            <div className='container py-10 lg:py-20 relative'>
                { isNotBusiness && (
                    <div className='flex flex-col gap-4'>
                        <a href='/kfs/Individual-eWallet-Account-KFS.pdf' target="_blank" className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS Personal eWallet Account
                        </a>
                        <a href='/kfs/Standard-Prepaid-Card-KFS.pdf' target="_blank" className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS Standard Prepaid Card
                        </a>
                        <a href='/kfs/Gold-Prepaid-Card-KFS.pdf' target="_blank" className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS Gold Prepaid Card
                        </a>
                        <a href='/kfs/Platinum-Prepaid-Card-KFS.pdf' target="_blank" className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS Platinum Prepaid Card
                        </a>
                        <a href='/kfs/Virtual-Prepaid-Card-KFS.pdf' target="_blank" className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS Virtual Prepaid Card
                        </a>
                        <a href='/kfs/Platinum-Credit-Card-KFS-Offline.pdf' target="_blank" className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS Platinum Credit Card
                        </a>
                        <a href='/kfs/World-Elite-Credit-Card-KFS-Offline.pdf' target="_blank" className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS World Elite Credit Card
                        </a>
                        <a href='/kfs/World-Elite-Prepaid-Card-KFS.pdf' target="_blank" className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS World Elite Prepaid Card
                        </a>
                        <a href='/kfs/Euro-Credit-Card-KFS-Offline.pdf' target="_blank" className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS Euro Platinum Credit Card
                        </a>
                        <a href='/kfs/Euro-Platinum-Prepaid-Card-KFS.pdf' target="_blank" className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS Euro Platinum Prepaid Card
                        </a>
                        <a href='/kfs/Under-18-Standard-Card.pdf' target="_blank" className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS Teens Standard Prepaid Card
                        </a>
                        <a href='/kfs/Under-18-Platinum-Card.pdf' target="_blank" className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS Teens Platinum Prepaid Card
                        </a>
                    </div>
                ) }

                { isBusiness && (
                    <div className='flex flex-col gap-4'>
                        <a href='/kfs/BUSINESS-eWALLET-05.12.25-KFS.pdf' className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS Business eWallet Account
                        </a>
                        <a href='/kfs/Business-Platinum-Prepaid-Card-KFS.pdf' className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS Platinum Prepaid Card
                        </a>
                        <a href='/kfs/Business-Virtual-Prepaid-Card-KFS.pdf' className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS Virtual Prepaid Card
                        </a>
                        <a href='/kfs/.pdf' className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS World Elite Prepaid Card
                        </a>
                    </div>
                ) }
            </div>
        </>
    )
}

export default KFS;
