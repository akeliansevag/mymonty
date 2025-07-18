import React from 'react';
import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import termsImage from '@/public/personal/terms-and-conditions.webp';
import SmallBanner from '../components/SmallBanner';
import FooterBanner from '../components/FooterBanner';

export const metadata = {
    title: 'Fees & Charges' + websiteName,
    description: ' Understand MyMonty\'s transparent fees & charges for digital banking services in Lebanon. No hidden costs, just clear pricing. View details.'
};

const terms = () => {

    return (
        <div className={styles.terms}>
            <FooterBanner downloadURL="/List of Fees and Charges 2.7.25.pdf" title="Personal Fees & Charges" />
            <div className='container py-10 lg:py-20 relative'>
                <div className='text-base html-content'>
                    <p>(effective as of 02 July 2025)</p><br />
                    
                    <h2>Personal eWallet Account</h2>
                    <br />

                    <h3 className="font-bold underline">Account Fees</h3>
                    <p><strong>Opening an Account:</strong><br />Free of charge</p><br />
                    <p><strong>Account Maintenance:</strong><br />Free of charge</p><br />
                    <p><strong>Annual Fee:</strong><br />Free of charge</p><br />
                    <p><strong>Dormant Account Fee:</strong><br />Free of charge</p><br />
                    <p><strong>Closing the Account:</strong><br />Free of charge</p><br />

                    <h3 className="font-bold underline">Transactions</h3>
                    <p><strong>Pay to a Merchant by QR:</strong><br />Free of charge</p><br />
                    <p><strong>Sending Money (to another MyMonty eWallet holder):</strong><br />Free of charge</p><br />
                    <p><strong>Receiving Money (from another MyMonty eWallet holder):</strong><br />Free of charge</p><br />

                    <h3 className="font-bold underline">Statements & Notifications</h3>
                    <p><strong>E-Statement of Account:</strong><br />Free of charge</p><br />
                    <p><strong>SMS Notifications:</strong><br />Free of charge</p><br />
                    <p><strong>Paper Statement of Account:</strong><br />
                    Local delivery: USD 5 / International delivery: USD 2 + Pass-through Cost
                    </p><br />

                    <h3 className="font-bold underline">Add Money to Your Account Through</h3>
                    <p><strong>MyMonty Branch:</strong><br />Free of charge</p><br />
                    <p><strong>ATM (Cardless):</strong><br />Free of charge</p><br />
                    <p><strong>Our Appointed Agent:</strong><br />Free of charge</p><br />
                    <p><strong>By Using Any Accepted Card:</strong><br />
                    LBP Local Card: 3%<br />
                    Foreign Currency Local or International Card: 3%
                    </p><br />

                    <h3 className="font-bold underline">Withdraw Money from Your Account Through</h3>
                    <p><strong>MyMonty Branch:</strong><br />Free of charge</p><br />
                    <p><strong>ATM (Cardless):</strong><br />
                    LBP: 0.75% <em>(minimum of LBP 100,000)</em><br />
                    USD: 0.75% <em>(minimum of USD 1)</em>
                    </p><br />
                    <p><strong>Our Appointed Agent:</strong><br />1.5%</p><br />

                    <h3 className="font-bold underline">Foreign Exchange Transactions</h3>
                    <p><strong>Conversion Fee:</strong><br />Free of charge</p><br />

                    <h3 className="font-bold underline">E-Services</h3>
                    <p><strong>Touch Postpaid:</strong><br />Transaction Fee: LBP 50,000 / USD 0.7</p><br />
                    <p><strong>Alfa Postpaid:</strong><br />Transaction Fee: LBP 50,000</p><br />
                    <p><strong>IHJOZ:</strong><br />Transaction Fee: 1% of the transaction amount</p><br />
                    <p><strong>All other available e-services:</strong><br />Provided with no transaction fees</p><br />


                    <br />
                    <br />
                    <br />

                    <h2>Prepaid Physical Card</h2>
                    <br />

                    <h3 className="font-bold underline">Card Issue, Delivery, Replacement and Cancellation</h3>
                    <p><strong>Primary Card Annual Fee:</strong><br />USD 12</p><br />
                    <p><strong>Supplementary Card Annual Fee:</strong><br />USD 12</p><br />
                    <p><strong>Replacement Card Fee:</strong><br />USD 9</p><br />
                    <p><strong>Card Delivery (local):</strong><br />Free of Charge</p><br />
                    <p><strong>Card Delivery (international):</strong><br />Pass-Through Cost</p><br />
                    <p><strong>Card Cancellation:</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Card Top-up</h3>
                    <p><strong>Adding Money to Your Card (from your MyMonty eWallet):</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">eWallet Top-up</h3>
                    <p><strong>Adding Money to Your MyMonty eWallet (from your Card):</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Transactions (Point of Sale [POS] and Online)</h3>
                    <p><strong>Transaction Fee (Local purchase transactions in USD):</strong><br />Free of Charge</p><br />
                    <p><strong>Foreign Currency Conversion Fee:</strong><br />4% of the transaction amount</p><br />
                    <p><strong>Cross Border Fee:</strong><br />1.5% <em>(minimum of USD 0.5)</em></p><br />

                    <h3 className="font-bold underline">ATM Withdrawals</h3>
                    <p><strong>ATM Withdrawal (issuer’s ATMs):</strong><br />1% of the transaction amount <em>(minimum of USD 1)</em></p><br />
                    <p><strong>ATM Withdrawal (other local ATMs):</strong><br />1% of the transaction amount <em>(minimum of USD 1, some banks may apply additional fees)</em></p><br />
                    <p><strong>ATM Withdrawal (outside Lebanon):</strong><br />USD 3.75 + 2% of the transaction amount <em>(some banks may apply additional fees)</em></p><br />
                    <p><strong>Foreign Currency Conversion Fee (for withdrawals in non-USD):</strong><br />4% of the transaction amount</p><br />

                    <h3 className="font-bold underline">Online Servicing</h3>
                    <p><strong>Available Balance, Transaction History:</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Miscellaneous</h3>
                    <p><strong>E-Statement of Account:</strong><br />Free of Charge</p><br />
                    <p><strong>Physical Statement of Account:</strong><br />
                    Local delivery: USD 5 / International delivery: USD 2 + Pass-Through Cost
                    </p><br />
                    <p><strong>SMS Notifications:</strong><br />Free of Charge</p><br />
                    <p><strong>Chargeback Fee:</strong><br />USD 10</p><br />



                    <br />
                    <br />
                    <br />

                    <h2>Prepaid Virtual Card</h2>
                    <br />

                    <h3 className="font-bold underline">Card Issue, Replacement and Cancellation</h3>
                    <p><strong>Card Annual Fee:</strong><br />Free of Charge</p><br />
                    <p><strong>Replacement Card Fee:</strong><br />Free of Charge</p><br />
                    <p><strong>Annual Fee:</strong><br />Free of Charge</p><br />
                    <p><strong>Card Cancellation:</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Card Top-up</h3>
                    <p><strong>Adding Money to Your Card (from your MyMonty eWallet):</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">eWallet Top-up</h3>
                    <p><strong>Adding Money to Your MyMonty eWallet (from your Card):</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Online Transactions</h3>
                    <p><strong>Transaction Fee (for local online purchase transaction in USD):</strong><br />Free of Charge</p><br />
                    <p><strong>Foreign Currency Conversion Fee:</strong><br />4% of the transaction amount</p><br />
                    <p><strong>Cross Border Fee:</strong><br />1.5% <em>(minimum of USD 0.5)</em></p><br />

                    <h3 className="font-bold underline">Online Servicing</h3>
                    <p><strong>Available Balance, Transaction History:</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Miscellaneous</h3>
                    <p><strong>E-Statement of Account:</strong><br />Free of Charge</p><br />
                    <p><strong>Physical Statement of Account:</strong><br />
                    Local delivery: USD 5 / International delivery: USD 2 + Pass-Through Cost
                    </p><br />
                    <p><strong>SMS Notifications:</strong><br />Free of Charge</p><br />
                    <p><strong>Chargeback Fee:</strong><br />USD 10</p><br />


                    <br />
                    <br />
                    <br />


                    <h2>Platinum Credit Card</h2>
                    <br />

                    <h3 className="font-bold underline">Card Issue, Replacement and Cancellation</h3>
                    <p><strong>Primary Card Annual Fee:</strong><br />USD 75</p><br />
                    <p><strong>Supplementary Card Annual Fee:</strong><br />USD 50</p><br />
                    <p><strong>Replacement Card Fee:</strong><br />USD 20</p><br />
                    <p><strong>Card Delivery (local):</strong><br />Free of Charge</p><br />
                    <p><strong>Card Delivery (international):</strong><br />Pass-Through Cost</p><br />
                    <p><strong>Card Cancellation:</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Late Repayment and Interest Rates</h3>
                    <p><strong>Late Payment Fee:</strong><br />USD 10</p><br />
                    <p><strong>Monthly Interest Rate on Outstanding Balance:</strong><br />
                    POS and Online transactions: 1.99%<br />
                    ATMs transactions*: 2.5%<br />
                    <em>* Interest Rate is applicable as from the transaction date</em>
                    </p><br />
                    <p><strong>Annual Percentage Rate (APR):</strong><br />
                    26.68% <em>(may vary according to spending behavior)</em>
                    </p><br />
                    <p><strong>Overlimit Fee:</strong><br />USD 10</p><br />

                    <h3 className="font-bold underline">Transactions (Point of Sale [POS] and Online)</h3>
                    <p><strong>Transaction Fee (Local purchases in Lebanon):</strong><br />Free of Charge</p><br />
                    <p><strong>Foreign Currency Conversion Fee:</strong><br />4% of the transaction amount</p><br />
                    <p><strong>Cross Border Fee:</strong><br />1.5% <em>(minimum of USD 0.5 per transaction)</em></p><br />

                    <h3 className="font-bold underline">ATM Transactions</h3>
                    <p><strong>ATM Withdrawal (issuer’s ATMs):</strong><br />USD 7 per transaction</p><br />
                    <p><strong>ATM Withdrawal (other local ATMs):</strong><br />
                    USD 10 per transaction <em>(some banks may apply additional fees)</em>
                    </p><br />
                    <p><strong>ATM Withdrawal (outside Lebanon):</strong><br />
                    USD 10 per transaction <em>(some banks may apply additional fees)</em>
                    </p><br />
                    <p><strong>ATM Withdrawal (in non-USD currencies):</strong><br />4% of the transaction amount</p><br />
                    <p><strong>ATM Online Services (available balance and transaction history):</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Miscellaneous</h3>
                    <p><strong>Monthly Maintenance Fee:</strong><br />USD 3</p><br />
                    <p><strong>E-Statement of Account:</strong><br />Free of Charge</p><br />
                    <p><strong>Physical Statement of Account:</strong><br />
                    Local delivery: USD 5 / International delivery: USD 2 + Pass-Through Cost
                    </p><br />
                    <p><strong>SMS Notifications:</strong><br />Free of Charge</p><br />
                    <p><strong>Chargeback Fee:</strong><br />USD 10</p><br />

                    
                    <br />
                    <br />
                    <br />


                    <h2>World Elite Credit Card</h2>
                    <br />

                    <h3 className="font-bold underline">Card Issue, Replacement and Cancellation</h3>
                    <p><strong>Primary Card Annual Fee:</strong><br />USD 250</p><br />
                    <p><strong>Supplementary Card Annual Fee:</strong><br />USD 200</p><br />
                    <p><strong>Replacement Card Fee:</strong><br />USD 200</p><br />
                    <p><strong>Card Delivery (local):</strong><br />Free of Charge</p><br />
                    <p><strong>Card Delivery (international):</strong><br />Pass-Through Cost</p><br />
                    <p><strong>Card Cancellation:</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Late Repayment and Interest Rates</h3>
                    <p><strong>Late Payment Fee:</strong><br />USD 10</p><br />
                    <p><strong>Monthly Interest Rate on Outstanding Balance:</strong><br />
                    POS and Online transactions: 1.99%<br />
                    ATMs transactions*: 2.5%<br />
                    <em>* Interest Rate is applicable as from the transaction date</em>
                    </p><br />
                    <p><strong>Annual Percentage Rate (APR):</strong><br />
                    26.68% <em>(may vary according to spending behavior)</em>
                    </p><br />
                    <p><strong>Overlimit Fee:</strong><br />USD 10</p><br />

                    <h3 className="font-bold underline">Transactions (Point of Sale [POS] and Online)</h3>
                    <p><strong>Transaction Fee (Local purchases in Lebanon):</strong><br />Free of Charge</p><br />
                    <p><strong>Foreign Currency Conversion Fee:</strong><br />4% of the transaction amount</p><br />
                    <p><strong>Cross Border Fee:</strong><br />1.5% <em>(minimum of USD 0.5 per transaction)</em></p><br />

                    <h3 className="font-bold underline">ATM Transactions</h3>
                    <p><strong>ATM Withdrawal (issuer’s ATMs):</strong><br />USD 7 per transaction</p><br />
                    <p><strong>ATM Withdrawal (other local ATMs):</strong><br />
                    USD 10 per transaction <em>(some banks may apply additional fees)</em>
                    </p><br />
                    <p><strong>ATM Withdrawal (outside Lebanon):</strong><br />
                    USD 10 per transaction <em>(some banks may apply additional fees)</em>
                    </p><br />
                    <p><strong>ATM Withdrawal (in non-USD currencies):</strong><br />4% of the transaction amount</p><br />
                    <p><strong>ATM Online Services (available balance and transaction history):</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Miscellaneous</h3>
                    <p><strong>Monthly Maintenance Fee:</strong><br />USD 3</p><br />
                    <p><strong>E-Statement of Account:</strong><br />Free of Charge</p><br />
                    <p><strong>Physical Statement of Account:</strong><br />
                    Local delivery: USD 5 / International delivery: USD 2 + Pass-Through Cost
                    </p><br />
                    <p><strong>SMS Notifications:</strong><br />Free of Charge</p><br />
                    <p><strong>Chargeback Fee:</strong><br />USD 10</p><br />


                    <br />
                    <br />
                    <br />

                    <h2>Euro Platinum Credit Card</h2>
                    <br />

                    <h3 className="font-bold underline">Card Issue, Replacement and Cancellation</h3>
                    <p><strong>Primary Card Annual Fee:</strong><br />EUR 75</p><br />
                    <p><strong>Supplementary Card Annual Fee:</strong><br />EUR 50</p><br />
                    <p><strong>Replacement Card Fee:</strong><br />EUR 20</p><br />
                    <p><strong>Card Delivery (local):</strong><br />Free of Charge</p><br />
                    <p><strong>Card Delivery (international):</strong><br />Pass-Through Cost</p><br />
                    <p><strong>Card Cancellation:</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Late Repayment and Interest Rates</h3>
                    <p><strong>Late Payment Fee:</strong><br />EUR 10</p><br />
                    <p><strong>Monthly Interest Rate on Outstanding Balance:</strong><br />
                    POS and Online transactions: 1.99%<br />
                    ATMs transactions*: 2.5%<br />
                    <em>* Interest Rate is applicable as from the transaction date</em>
                    </p><br />
                    <p><strong>Annual Percentage Rate (APR):</strong><br />
                    26.68% <em>(may vary according to spending behavior)</em>
                    </p><br />
                    <p><strong>Overlimit Fee:</strong><br />EUR 10</p><br />

                    <h3 className="font-bold underline">Transactions (Point of Sale [POS] and Online)</h3>
                    <p><strong>Transaction Fee (Local purchases in Lebanon):</strong><br />Free of Charge</p><br />
                    <p><strong>Foreign Currency Conversion Fee:</strong><br />4.8% of the transaction amount</p><br />
                    <p><strong>Cross Border Fee:</strong><br />1.5% <em>(minimum of EUR 0.5 per transaction)</em></p><br />

                    <h3 className="font-bold underline">ATM Transactions</h3>
                    <p><strong>ATM Withdrawal (outside Lebanon):</strong><br />
                    EUR 10 per transaction <em>(some banks may apply additional fees)</em>
                    </p><br />
                    <p><strong>ATM Withdrawal (in non-EUR currencies):</strong><br />4.8% of the transaction amount</p><br />
                    <p><strong>ATM Online Services (available balance and transaction history):</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Miscellaneous</h3>
                    <p><strong>Monthly Maintenance Fee:</strong><br />EUR 3</p><br />
                    <p><strong>E-Statement of Account:</strong><br />Free of Charge</p><br />
                    <p><strong>Physical Statement of Account:</strong><br />
                    Local delivery: USD 5 / International delivery: USD 2 + Pass-Through Cost
                    </p><br />
                    <p><strong>SMS Notifications:</strong><br />Free of Charge</p><br />
                    <p><strong>Chargeback Fee:</strong><br />EUR 10</p><br />

                </div>
            </div>

        </div>
    )
}

export default terms;
