import React from 'react';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import SmallBanner from '../components/SmallBanner';

export const metadata = {
    title: websiteName + 'Key Facts Statements',
    description: ''
};

const KeyFactsStatements = () => {

    return (
        <div className={styles.terms}>
            <SmallBanner title="Key Facts Statements" />
            <div className='container py-10 lg:py-20 relative'>
                <div className='flex flex-col gap-4'>
                    <a href='/key-facts-statements/personal-ewallet-account' className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                        KFS Personal eWallet Account
                    </a>
                    <a href='/key-facts-statements/prepaid-card-physical' className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                        KFS Prepaid Card (Physical)
                    </a>
                    <a href='/key-facts-statements/prepaid-card-virtual' className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                        KFS Prepaid Card (Virtual)
                    </a>
                </div>

            </div>
        </div>
    )
}

export default KeyFactsStatements;