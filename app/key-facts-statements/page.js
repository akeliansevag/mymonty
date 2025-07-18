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
                        <a href='/key-facts-statements/personal-ewallet-account' className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS Individual eWallet Account
                        </a>
                        <a href='/key-facts-statements/prepaid-card-physical' className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS Prepaid Card (Physical)
                        </a>
                        <a href='/key-facts-statements/prepaid-card-virtual' className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS Prepaid Card (Virtual)
                        </a>

                        <a href='/key-facts-statements/platinum-credit-card' className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS Platinum Credit Card
                        </a>

                        <a href='/key-facts-statements/world-elite-credit-card' className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            KFS World Elite Credit Card
                        </a>

                        <a href='/key-facts-statements/euro-platinum-credit-card' className='p-7 bg-gray-100 rounded-xl w-full block text-xl'>
                            Euro Platinum Credit Card
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default KeyFactsStatements;
