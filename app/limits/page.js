import React from 'react';
import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import termsImage from '@/public/personal/terms-and-conditions.webp';
import SmallBanner from '../components/SmallBanner';
import FooterBanner from '../components/FooterBanner';

export const metadata = {
    title: websiteName + 'Limits',
    description: ''
};

const terms = () => {


    return (
        <div className={styles.terms}>
            <FooterBanner downloadURL="/Limits.pdf" title="Personal Account and Cards Limits" />
            <div className='container py-10 lg:py-20 relative'>
                <div className='text-base html-content'>
                    <p className='mb-10'>(effective as of 6 Aug 2024)</p>

                    <h2>eWallet Account</h2>
                    <br />
                    <p><strong>Account maximum balance limit at any time:</strong><br />
                        USD balance: USD 3,000 / LBP balance: LBP 150,000,000</p>
                    <br />
                    <p><strong>Sending money (to another MyMonty eWallet Holder(s)):</strong><br />
                        Any amount as long as the balance in the Account of the Recipient does not exceed 3,000 USD and 150,000,000 LBP</p>
                    <br />
                    <p><strong>Receiving money (from another MyMonty eWallet Holder(s)):</strong><br />
                        Any amount as long as the balance in your Account does not exceed 3,000 USD and 150,000,000 LBP</p>
                    <br />
                    <p><strong> Paying to a merchant by QR:</strong><br />
                        Up to the available balance in the Account</p>
                    <br />
                    <p><strong>Adding money to your Account (through our Appointed Agent):</strong><br />
                        In USD- Any amount as long as the balance in the USD balance does not exceed USD 3,000 / In LBP- 15,000,000 per top-up transaction. Any number of top-up transactions as long as your LBP balance does not exceed LBP 150,000,000.</p>
                    <br />
                    <p><strong>Adding money to your Account (by using your card):</strong><br />
                        Any amount as long as the USD and LBP balances do not exceed respectively 3,000 USD and 150,000,000 LBP</p>
                    <br />
                    <p><strong>Withdrawing Money from your Account (through our Appointed Agent):</strong><br />
                        In USD- up to the available USD balance / In LBP- 15,000,000 per withdrawal transaction, up to the full available LBP balance</p>
                    <br /><br />
                    <h2>MyMonty MC Platinum Physical Prepaid Card (USD)</h2><br />
                    <p><strong>Card maximum balance at any time:</strong><br />USD 9,999</p><br />
                    <p><strong>Point of Sale (POS) maximum usage per transaction / per day / per week / per month:</strong><br />Up to the available balance in your Account</p><br />
                    <p><strong>Online maximum usage per transaction / per day / per week / per month:</strong><br />Up to the available balance in your Account</p><br />
                    <p><strong>ATM maximum withdrawal per day / per week / per month:</strong><br />USD 1,000 / USD 3,000 / USD 5,000</p><br /><br />
                    <h2>MyMonty MC Virtual Prepaid Card (USD)</h2><br />
                    <p><strong>Maximum Card balance at any time:</strong><br />USD 5,000</p><br />
                    <p><strong>Online maximum usage per transaction / per day / per week / per month:</strong><br />Up to the available balance in your Account</p>

                </div>
            </div>

        </div >
    )
}

export default terms;
