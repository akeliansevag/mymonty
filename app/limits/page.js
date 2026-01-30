import React from 'react';
import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import termsImage from '@/public/personal/terms-and-conditions.webp';
import SmallBanner from '../components/SmallBanner';
import FooterBanner from '../components/FooterBanner';

export const metadata = {
    title: 'Limits' + websiteName,
    description: 'Understand the daily & transactional limits for your MyMonty accounts & services in Lebanon. Manage your finances with clarity. Check limits now.'
};

const terms = () => {


    return (
        <div className={styles.terms}>
    
            <FooterBanner downloadURL="/List-of-Limits-27.1.26.pdf" title="Personal Account and Cards Limits" />
            <div className='container py-10 lg:py-20 relative'>
                <div className='text-base html-content'>
                    <p className='mb-10'>(effective as of 12 September 2025)</p><br />

                    <h2>Personal eWallet Account</h2>

                    <h3 className="font-bold underline">Account maximum balance</h3>
                    <p><strong>Maximum Balance at any one time:</strong><br />Your account balance may not exceed USD 3,000 or its equivalent in other currencies at any time.</p><br />
                    <p><strong>Maximum Credit Balance per month:</strong><br />The total monthly credit balance on your account (whether from top-ups or incoming transfers) cannot exceed USD 9,999 or its equivalent in other currencies.</p><br />

                    <h3 className="font-bold underline">Sending money (to another MyMonty eWallet Holder(s))</h3>
                    <p>Up to the available balance (as long as the Recipient’s account balance does not exceed the maximum account balance and monthly credit limits)</p><br />

                    <h3 className="font-bold underline">Receiving money (from another MyMonty eWallet Holder(s))</h3>
                    <p>Any amount (as long as the account balance does not exceed the maximum account balance and monthly credit limits)</p><br />

                    <h3 className="font-bold underline">Paying to a merchant by QR</h3>
                    <p>Up to the available balance in the Account</p><br />

                    <h3 className="font-bold underline">Adding money to your Account</h3>
                    <p><strong>Through MyMonty branch:</strong> Any amount (as long as the account balance does not exceed the maximum account balance and monthly credit limits)</p><br />
                    <p><strong>Through SST (cardless) *Subject to SST transaction limit:</strong> Any amount (as long as the account balance does not exceed the maximum account balance and monthly credit limits)</p><br />
                    <p><strong>Through ATM (cardless)</strong> *Subject to ATM transaction limit:<br />Any amount (as long as the account balance does not exceed the maximum account balance and monthly credit limits)</p><br />
                    <p><strong>Through our Appointed Agent:</strong> Any amount (as long as the account balance does not exceed the maximum account balance and monthly credit limits) <em>*Limit of LBP 15,000,000 per top-up transaction.</em></p><br />

                    <h3 className="font-bold underline">Withdrawing Money from your Account</h3>
                    <p><strong>Through MyMonty Branch:</strong> In USD - up to the available USD balance / In LBP - up to the available LBP balance.</p><br />
                    <p><strong>Through SST (cardless):</strong> In USD- 3,000 per transaction up to the available USD balance / In LBP- 30,000,000 per withdrawal transaction, up to the full available LBP balance</p><br />
                    <p><strong>Through ATM (cardless):</strong> In USD - 2,000 per transaction up to the available USD balance / In LBP - 3,000,000 per withdrawal transaction, up to the full available LBP balance</p><br />
                    <p><strong>Through our Appointed Agent:</strong> In USD - up to the available USD balance / In LBP - 15,000,000 per withdrawal transaction, up to the full available LBP balance</p><br />

                    <h3 className="font-bold underline">Foreign Exchange transactions</h3>
                    <p><strong>Conversion daily limit:</strong> USD 3,000 or its equivalent in LBP (in accordance with the wallet limit)</p><br />
                    <p><strong>Conversion monthly limit:</strong> USD 9,999 or its equivalent in LBP (in accordance with the wallet limit)</p><br />
                    <p><strong>Conversion:</strong> All transactions performed from USD balance to LBP balance, or from LBP balance to USD balance.</p><br />

                    <h3 className="font-bold underline">E-Services</h3>
                    <p>Up to the available balance in your account.</p><br />



                    <br /><br /><br />
                    <h2>Prepaid Physical Card</h2>

                    <h3 className="font-bold underline">Card Balance</h3>
                    <p><strong>Maximum Card Balance at any time:</strong> USD 9,999</p><br />

                    <h3 className="font-bold underline">Point of Sale (POS) Usage*</h3>
                    <p><strong>Maximum per Transaction:</strong> Up to the available balance</p>
                    <p><strong>Maximum Daily Usage:</strong> Up to the available balance</p>
                    <p><strong>Maximum Weekly Usage:</strong> Up to the available balance</p>
                    <p><strong>Maximum Monthly Usage:</strong> Up to the available balance</p><br />

                    <h3 className="font-bold underline">Online Usage*</h3>
                    <p><strong>Maximum per Transaction:</strong> Up to the available balance</p>
                    <p><strong>Maximum Daily Usage:</strong> Up to the available balance</p>
                    <p><strong>Maximum Weekly Usage:</strong> Up to the available balance</p>
                    <p><strong>Maximum Monthly Usage:</strong> Up to the available balance</p><br />

                    <h3 className="font-bold underline">ATM Withdrawal</h3>
                    <p><strong>Maximum Daily Withdrawal:</strong> USD 1,000</p>
                    <p><strong>Maximum Weekly Withdrawal:</strong> USD 3,000</p>
                    <p><strong>Maximum Monthly Withdrawal:</strong> USD 5,000</p><br />
                    <p><em>* For both point-of-sale and online transactions, the amount can be processed up to the available balance on your card, along with the USD balance in your wallet.</em></p><br />




                    <br /><br /><br />
                    <h2>Virtual Prepaid Mastercard</h2>

                    <h3 className="font-bold underline">Card Top-up and Balance</h3>
                    <p><strong>Maximum Card Balance at any one time:</strong> USD 5,000</p><br />

                    <h3 className="font-bold underline">Online Usage</h3>
                    <p><strong>Maximum per Transaction:</strong> Up to the available balance</p>
                    <p><strong>Maximum Daily Usage:</strong> Up to the available balance</p>
                    <p><strong>Maximum Weekly Usage:</strong> Up to the available balance</p>
                    <p><strong>Maximum Monthly Usage:</strong> Up to the available balance</p><br />




                    <br /><br /><br />
                    <h2>Platinum Credit Card</h2>

                    <h3 className="font-bold underline">Card Balance based on Credit Limit</h3>
                    <p><strong>Maximum Card Balance at any one time:</strong> Up to the Credit Limit</p><br />

                    <h3 className="font-bold underline">Spending Limit</h3>
                    <p><strong>Point of sale (POS) and online transactions:</strong> Up to the available Credit Limit</p><br />

                    <h3 className="font-bold underline">ATM Withdrawal (Maximum Withdrawal Limit)</h3>
                    <ul>
                    <li><strong>Credit Limit up to USD 2,000:</strong> USD 500 Monthly</li>
                    <li><strong>Credit Limit: &gt; USD 2,000 ≤ USD 5,000:</strong> USD 1,000 Monthly</li>
                    <li><strong>Credit Limit greater than USD 5,000:</strong> USD 2,000 Monthly</li>
                    </ul><br />




                    <br /><br /><br />
                    <h2>World Elite Credit Card</h2>

                    <h3 className="font-bold underline">Credit limit and Card Balance</h3>
                    <p><strong>Credit Limit:</strong> Minimum USD 5,000 and Maximum USD 30,000</p>
                    <p><strong>Maximum Card Balance at any one time:</strong> Up to the Credit Limit</p><br />

                    <h3 className="font-bold underline">Spending Limit</h3>
                    <p><strong>Point of sale (POS) and online transactions:</strong> Up to the available Credit Limit</p><br />

                    <h3 className="font-bold underline">ATM Withdrawal</h3>
                    <p><strong>Maximum Withdrawal Limit:</strong> USD 2,000 Monthly</p><br />




                    <br /><br /><br />
                    <h2>EURO Platinum Credit Card</h2>

                    <h3 className="font-bold underline">Card Balance based on Credit Limit</h3>
                    <p><strong>Maximum Card Balance at any one time:</strong> Up to the Credit Limit</p><br />

                    <h3 className="font-bold underline">Spending Limit</h3>
                    <p><strong>Point of sale (POS) and online transactions:</strong> Up to the available Credit Limit</p><br />

                    <h3 className="font-bold underline">ATM Withdrawal (Maximum Withdrawal Limit)</h3>
                    <ul>
                    <li><strong>Credit Limit ≥ EUR 500 ≤ EUR 2,000:</strong> EUR 500 Monthly</li>
                    <li><strong>Credit Limit &gt; EUR 2,000 ≤ EUR 5,000:</strong> EUR 1,000 Monthly</li>
                    </ul><br />
                </div>
            </div>

        </div >
    )
}

export default terms;
