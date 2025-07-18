import React from 'react';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import SmallBanner from '../components/SmallBanner';

export const metadata = {
    title: 'Legal & Compliance | Policies & Terms' + websiteName,
    description: 'Gain full clarity on MyMonty\'s digital banking terms & conditions in Lebanon. Understand our policies & legal agreements for confident banking. Explore now!'
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

                    <a href='/legal/prepaid-credit-cards-terms-conditions' className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                        Prepaid Credit Cards Terms and Conditions
                    </a>

                    <a target='_blank' href='/credit-cards-terms-and-conditions.pdf' className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                        Platinum Credit Card Terms And Conditions
                    </a>

                </div>

            </div>
        </div>
    )
}

export default KeyFactsStatements;
