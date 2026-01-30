import React from 'react';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import SmallBanner from '../components/SmallBanner';

export const metadata = {
    title: 'Key Facts Statements | Transparent Banking' + websiteName,
    description: 'Access MyMonty\'s essential key facts statements. Find transparent information about our digital banking products & services in Lebanon. View details.'
};

const KeyFactsStatements = () => {
    return (
        <>
            <div className={styles.terms}>
                <SmallBanner title="Key Facts Statements" />
                <div className='container py-10 lg:py-20 relative'>
                    <div className='flex flex-col gap-4'>
                        <a href='/kfs/Individual-eWallet-Account-27.1.26-KFS.pdf' target="_blank" className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
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
                </div>
            </div>
        </>
    )
}

export default KeyFactsStatements;
