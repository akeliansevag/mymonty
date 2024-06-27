import React from 'react';
import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import termsImage from '@/public/personal/terms-and-conditions.webp';
import SmallBanner from '../components/SmallBanner';

export const metadata = {
    title: websiteName + 'Limits',
    description: ''
};

const terms = () => {
    const data = {
        title: 'Limits',
        subtitle: 'Personal eWallet Account',
        desc: '',
        image: {
            inGrid: true,
            layout: 'half',
            url: termsImage,
        }
    };

    const htmlData = "<p><strong>Account maximum balance limit at any time:</strong><br>USD balance: USD 3,000 / LBP balance: LBP 150,000,000<p> <p><strong>Sending money (to another MyMonty eWallet Holder(s)):</strong><br>Any amount as long as the balance in the Account of the Recipient does not exceed 3,000 USD and 150,000,000 LBP<p> <p><strong>Receiving money (from another MyMonty eWallet Holder(s)):</strong><br>Any amount as long as the balance in your Account does not exceed 3,000 USD and 150,000,000 LBP<p> <p><strong>Paying to a merchant by QR:</strong><br>Up to the available balance in the Account<p> <p><strong>Adding money to your Account (through our Appointed Agent):</strong><br>In USD- Any amount as long as the balance in the USD balance does not exceed USD 3,000 / In LBP- 15,000,000 per top-up transaction. Any number of top-up transactions as long as your LBP balance does not exceed LBP 150,000,000.<p> <p><strong>Adding money to your Account (by using your card):</strong><br>Any amount as long as the USD and LBP balances do not exceed respectively 3,000 USD and 150,000,000 LBP<p> <p><strong>Withdrawing Money from your Account (through our Appointed Agent):</strong><br>In USD- up to the available USD balance / In LBP- 15,000,000 per withdrawal transaction, up to the full available LBP balance";

    return (
        <div className={styles.terms}>
            <SmallBanner title="Limits" />
            <div className='container py-10 lg:py-20 relative'>
                <div className='text-base html-content' dangerouslySetInnerHTML={{ __html: htmlData }} />
            </div>

        </div>
    )
}

export default terms;
