import React from 'react';
import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import termsImage from '@/public/personal/terms-and-conditions.webp';
import SmallBanner from '../components/SmallBanner';

export const metadata = {
    title: websiteName + 'Fees & Charges',
    description: ''
};

const terms = () => {
    const data = {
        title: 'Fees & Charges',
        subtitle: 'Personal eWallet Account',
        desc: '',
        image: {
            inGrid: true,
            layout: 'half',
            url: termsImage,
        }
    };

    const htmlData = "<p><strong>Opening an Account: </strong><br>Free of charge<p> <p><strong>Minimum balance fee:</strong><br>Free of charge<p> <p><strong>Account maintenance: </strong><br>Free of charge<p> <p><strong>Annual fee: </strong><br>Free of charge<p> <p><strong>Dormant Account fee:</strong><br>Free of charge<p> <p><strong>Closing the Account:</strong><br>Free of charge<p> <p><strong>Sending money (to another MyMonty eWallet Holder):</strong><br>Free of charge<p> <p><strong>Receiving money (from another MyMonty eWallet Holder):</strong><br>Free of charge<p> <p><strong>Pay to a Merchant by QR:</strong><br>Free of charge<p> <p><strong>Add money to your Account (through our Appointed Agent):</strong><br>With Cash in LBP: free of charge / With Cash in USD: 0.5 %<p> <p><strong>Add money to your Account (by using any accepted card):</strong><br>LBP Local card: 5 % / Foreign currency local card: 3 % / International card: 3 %<p> <p><strong>Withdraw money from your Account (through our Appointed Agent):</strong><br>In Cash LBP: 1 % / In Cash USD: 1 %<p> <p><strong>E-statement of Account:</strong><br>Free of Charge<p> <p><strong>Paper statement of Account:</strong><br>Local delivery: USD 5 / International delivery: USD 2 + Pass-through Cost<p> <p><strong>SMS Notifications:</strong><br>Free of charge<br> ";
    return (
        <div className={styles.terms}>
            <SmallBanner title="Fees & Charges" />
            <div className='container py-10 lg:py-20 relative'>
                <div className='text-base html-content' dangerouslySetInnerHTML={{ __html: htmlData }} />
            </div>

        </div>
    )
}

export default terms;
