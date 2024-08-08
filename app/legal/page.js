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
            <SmallBanner title="Legal" />
            <div className='container py-10 lg:py-20 relative'>
                <div className='flex flex-col gap-4'>
                    <a href='/legal/customer-agreement' className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                        Customer Agreement
                    </a>

                    <a href='/legal/prepaid-cards-terms-conditions' className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                        Prepaid Cards Terms And Conditions
                    </a>

                </div>

            </div>
        </div>
    )
}

export default KeyFactsStatements;
