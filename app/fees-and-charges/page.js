import React from 'react';
import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import termsImage from '@/public/personal/terms-and-conditions.webp';
import SmallBanner from '../components/SmallBanner';
import FooterBanner from '../components/FooterBanner';

export const metadata = {
    title: websiteName + 'Fees & Charges',
    description: ''
};

const terms = () => {

    return (
        <div className={styles.terms}>
            <FooterBanner downloadURL="/FeesAndCharges.pdf" title="Personal Fees & Charges" />
            <div className='container py-10 lg:py-20 relative'>
                <div className='text-base html-content'>
                    <p>(effective as of 6 Aug 2024)</p><br />
                    <h2>eWallet Account</h2>
                    <br />
                    <p><strong>Opening an Account:&nbsp;</strong><br />Free of charge</p><br />
                    <p><strong>Minimum balance fee:</strong><br />Free of charge</p><br />
                    <p><strong>Account maintenance:&nbsp;</strong><br />Free of charge</p><br />
                    <p><strong>Annual fee:&nbsp;</strong><br />Free of charge</p><br />
                    <p><strong>Dormant Account fee:</strong><br />Free of charge</p><br />
                    <p><strong>Closing the Account:</strong><br />Free of charge</p><br />
                    <p><strong>Sending money (to another MyMonty eWallet Holder):</strong><br />Free of charge</p><br />
                    <p><strong>Receiving money (from another MyMonty eWallet Holder):</strong><br />Free of charge</p><br />
                    <p><strong>Pay to a Merchant by QR:</strong><br />Free of charge</p><br />
                    <p><strong>Add money to your Account (through our Appointed Agent):</strong><br />With Cash in LBP: free of charge / With Cash in USD: 0.5 %</p><br />
                    <p><strong>Add money to your Account (by using any accepted card):</strong><br />LBP Local card: 5 % / Foreign currency local card: 3 % / International card: 3 %</p><br />
                    <p><strong>Withdraw money from your Account (through our Appointed Agent):</strong><br />In Cash LBP: 1 % / In Cash USD: 1 %</p><br />
                    <p><strong>E-statement of Account:</strong><br />Free of Charge</p><br />
                    <p><strong>Paper statement of Account:</strong><br />Local delivery: USD 5 / International delivery: USD 2 + Pass-through Cost</p><br />
                    <p><strong>SMS Notifications:</strong><br />Free of charge</p><br />

                    <h2>MyMonty MC Platinum Physical Prepaid Card (USD)</h2><br />
                    <p><strong>Card issuance fee:&nbsp;</strong><br />USD 12</p><br />
                    <p><strong>Annual fee:</strong><br />Free of Charge</p><br />
                    <p><strong>Replacement Card fee (lost or stolen):</strong><br />USD 15</p><br />
                    <p><strong>Card delivery (local):</strong><br />Free of Charge</p><br />
                    <p><strong>Card delivery (international):</strong><br />Pass-Through Cost</p><br />
                    <p><strong>Card cancellation:</strong><br />Free of Charge</p><br />
                    <p><strong>Adding money to your Card (from your MyMonty eWallet):</strong><br />Free of Charge</p><br />
                    <p><strong>Adding money to your MyMonty eWallet (from your Card):</strong><br />Free of Charge</p><br />
                    <p><strong>Point of Sale (POS) and Online transactions fees:</strong><br />Transaction Fee (when you use your Card for the purchase of goods or services): Free of charge / Foreign currency conversion fee (if the Card is used for purchases or withdrawals in a currency other than USD): 4% of the transaction amount / Cross border fee (if the Card is used for USD purchases with any merchant located outside Lebanon): 1% of the transaction amount + USD 0.5</p><br />
                    <p><strong>ATM withdrawal:</strong><br />By using our Integrated ATMs: 1% of the transaction amount, with a minimum of USD 1 / By using an ATM outside Lebanon: 2% of the transaction amount + USD 3.75 + ATM owner’s Fees / ATM Withdrawal FX conversion fee (if the Card is used for withdrawals in any currency other than USD): 4% of the transaction amount</p><br />
                    <p><strong>Online servicing (available balance, transaction history):</strong><br />Free of Charge</p><br />
                    <p><strong>E-statement of Account:</strong><br />Free of Charge</p><br />
                    <p><strong>Paper statement of Account:</strong><br />Local delivery: USD 5 / International delivery: USD 2 + Pass-through Cost</p><br />
                    <p><strong>SMS notifications:</strong><br />Free of Charge</p><br />
                    <p><strong>Chargeback fee:</strong><br />USD 10</p><br />

                    <h2>MyMonty MC Virtual Prepaid Card (USD)</h2><br />
                    <p><strong>Card issuance fee:&nbsp;</strong><br />USD 5</p><br />
                    <p><strong>Replacement Card fee:</strong><br />USD 5</p><br />
                    <p><strong>Annual fee:</strong><br />Free of Charge</p><br />
                    <p><strong>Card cancellation:&nbsp;&nbsp;&nbsp;&nbsp;</strong><br />Free of Charge</p><br />
                    <p><strong>Adding money to your Card (from your MyMonty eWallet):</strong><br />Free of Charge</p><br />
                    <p><strong>Adding money to your MyMonty eWallet (from your Card):</strong><br />Free of Charge</p><br />
                    <p><strong>Online transactions:</strong><br />Transaction Fee (when you use your Card for the purchase of goods or services): Free of charge / Foreign currency conversion fee (if the Card is used for purchases or withdrawals in a currency other than USD): 4% of the transaction amount / Cross border fee (if the Card is used for USD purchases with any merchant located outside Lebanon): 1% of the transaction amount + USD 0.5</p><br />
                    <p><strong>Online servicing (available balance, transaction history):</strong><br />Free of Charge</p><br />
                    <p><strong>E-statement of Account:</strong><br />Free of Charge</p><br />
                    <p><strong>Paper statement of Account:</strong><br />Local delivery: USD 5 / International delivery: USD 2 + Pass-through Cost</p><br />
                    <p><strong>SMS notifications:</strong><br />Free of Charge</p><br />
                    <p><strong>Chargeback Fee:</strong><br />USD 10<br />&nbsp;</p><br />
                </div>
            </div>

        </div>
    )
}

export default terms;
