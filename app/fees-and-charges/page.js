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
            <FooterBanner downloadURL="/List-of-Fees-and-Charges-29.7.25.pdf" title="Personal Fees & Charges" />
            <div className='container py-10 lg:py-20 relative'>
                <div className='text-base html-content'>
                    <p>(effective as of 29 July 2025)</p><br />
                    
                    <h2>Personal eWallet Account</h2>
                    <br />
                    <p><strong>Opening an Account:</strong><br />Free of charge</p><br />
                    <p><strong>Account maintenance:</strong><br />Free of charge</p><br />
                    <p><strong>Annual fee:</strong><br />Free of charge</p><br />
                    <p><strong>Dormant Account fee:</strong><br />Free of charge</p><br />
                    <p><strong>Closing the Account:</strong><br />Free of charge</p><br />

                    <p><strong>Pay to a Merchant by QR:</strong><br />Free of charge</p><br />
                    <p><strong>E-statement of Account:</strong><br />Free of charge</p><br />
                    <p><strong>SMS Notifications:</strong><br />Free of charge</p><br />
                    <p><strong>Sending money (to another MyMonty eWallet holder):</strong><br />Free of charge</p><br />
                    <p><strong>Receiving money (from another MyMonty eWallet holder):</strong><br />Free of charge</p><br />
                    <p><strong>Paper statement of Account:</strong><br />Local delivery: USD 5 / International delivery: USD 2 + Pass-through Cost</p><br />

                    <h3 className="font-bold underline">Add money to your Account through:</h3>
                    <p><strong>MyMonty branch:</strong><br />Free of charge</p><br />
                    <p><strong>MyMonty SST (Self-Service Terminal):</strong><br />Free of charge</p><br />
                    <p><strong>Our Appointed Agent:</strong><br />Free of charge</p><br />

                    <h3 className="font-bold underline">Withdraw money from your Account trough:</h3>
                    <p><strong>MyMonty Branch:</strong><br />Free of charge</p><br />
                    <p><strong>MyMonty SST (Self-Service Terminal):</strong><br />LBP: 0.75% *minimum of LBP 100,000 / USD: 0.75% *minimum of USD 1</p><br />
                    <p><strong>ATM (cardless):</strong><br />LBP: 0.75% *minimum of LBP 100,000 / USD: 0.75% *minimum of USD 1</p><br />

                    <h3 className="font-bold underline">Foreign Exchange Transactions:</h3>
                    <p><strong>Conversion Fee:</strong><br />Free of charge</p><br />

                    <h3 className="font-bold underline">E-Services:</h3>
                    <p><strong>Touch Postpaid:</strong><br />Transaction Fee: LBP 50,000 / USD 0.7</p><br />
                    <p><strong>Alfa Postpaid:</strong><br />Transaction Fee: LBP 50,000 / USD 0.7</p><br />
                    <p><strong>All other available e-services are provided with no transaction fees.</strong></p><br />






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
                    <p><strong>Adding money to your Card (from your MyMonty eWallet):</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">eWallet Top-up</h3>
                    <p><strong>Adding money to your MyMonty eWallet (from your Card):</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Transactions (Point of Sale [POS] and Online)</h3>
                    <p><strong>Transaction Fee (Local purchase transactions in USD):</strong><br />Free of charge</p><br />
                    <p><strong>Foreign currency conversion fee (purchase transactions in a currency other than USD):</strong><br />4% of the transaction amount</p><br />
                    <p><strong>Cross border fee (if the Card is used for USD purchases with any merchant located outside Lebanon):</strong><br />1.5% *minimum of 0.5 USD</p><br />

                    <h3 className="font-bold underline">ATM Withdrawals</h3>
                    <p><strong>ATM Withdrawal (when using issuer’s ATMs):</strong><br />1% of the transaction amount, with a minimum of USD 1</p><br />
                    <p><strong>ATM Withdrawal (when using other local ATMs):</strong><br />1% of the transaction amount, with a minimum of USD 1<br />(some banks may apply additional fees)</p><br />
                    <p><strong>ATM Withdrawal (when using an ATM outside Lebanon):</strong><br />USD 3.75 + 2% of the transaction amount<br />(some banks may apply additional fees)</p><br />
                    <p><strong>Foreign currency conversion fee (if the Card is used for withdrawals in any currency other than USD):</strong><br />4% of the transaction amount</p><br />

                    <h3 className="font-bold underline">Online Servicing</h3>
                    <p><strong>Available balance, transaction history:</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Miscellaneous</h3>
                    <p><strong>E-Statement of Account:</strong><br />Free of Charge</p><br />
                    <p><strong>Physical Statement of Account:</strong><br />Local delivery: USD 5 / International delivery: USD 2 + Pass-through Cost</p><br />
                    <p><strong>SMS Notifications:</strong><br />Free of Charge</p><br />
                    <p><strong>Chargeback Fee:</strong><br />USD 10</p><br />




                    <br />
                    <br />
                    <br />

                    <h2>Prepaid Virtual Card</h2>
                    <br />
                    <h3 className="font-bold underline">Card Issue, Replacement and Cancellation</h3>
                    <p><strong>Card Annual Fee:</strong><br />Free of charge</p><br />
                    <p><strong>Replacement Card Fee:</strong><br />Free of charge</p><br />
                    <p><strong>Annual Fee:</strong><br />Free of Charge</p><br />
                    <p><strong>Card Cancellation:</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Card Top-up</h3>
                    <p><strong>Adding money to your Card (from your MyMonty eWallet):</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">eWallet Top-up</h3>
                    <p><strong>Adding money to your MyMonty eWallet (from your Card):</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Online Transactions</h3>
                    <p><strong>Transaction Fee (for local online purchase transaction in USD):</strong><br />Free of charge</p><br />
                    <p><strong>Foreign currency conversion fee (if the Card is used for purchases in a currency other than USD):</strong><br />4% of the transaction amount</p><br />
                    <p><strong>Cross border fee (if the Card is used for USD purchases with any merchant located outside Lebanon):</strong><br />1.5% *minimum of 0.5 USD</p><br />

                    <h3 className="font-bold underline">Online Servicing</h3>
                    <p><strong>Available balance, transaction history:</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Miscellaneous</h3>
                    <p><strong>E-Statement of Account:</strong><br />Free of Charge</p><br />
                    <p><strong>Physical Statement of Account:</strong><br />Local delivery: USD 5<br />International delivery: USD 2 + Pass-through Cost</p><br />
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
                    <p><strong>Monthly Interest Rate on outstanding balance:</strong><br />POS and Online transactions: 1.99%<br />ATMs transactions*: 2.5%<br />* Interest Rate is applicable as from the transaction date</p><br />
                    <p><strong>Annual Percentage Rate (APR):</strong><br />26.68% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NB: may vary according to spending behavior</p><br />
                    <p><strong>Overlimit Fee:</strong><br />USD 10</p><br />

                    <h3 className="font-bold underline">Transactions (Point of Sale [POS] and Online)</h3>
                    <p><strong>Transaction Fee (when you use your Card for the purchase of goods or services in Lebanon):</strong><br />Free of Charge</p><br />
                    <p><strong>Foreign currency conversion fee (if the Card is used for purchases in a currency other than USD):</strong><br />4% of the transaction amount</p><br />
                    <p><strong>Cross border fee (if the Card is used for USD purchases with any merchant located outside Lebanon):</strong><br />1.5% with a minimum of USD 0.5 per transaction</p><br />

                    <h3 className="font-bold underline">ATM Transactions</h3>
                    <p><strong>ATM Withdrawal (when using issuer’s ATMs):</strong><br />USD 7 per transaction</p><br />
                    <p><strong>ATM Withdrawal (when using other Local ATMs):</strong><br />USD 10 per transaction (some banks may apply additional fees)</p><br />
                    <p><strong>ATM Withdrawal (when using an ATM outside Lebanon):</strong><br />USD 10 per transaction (some banks may apply additional fees)</p><br />
                    <p><strong>ATM Withdrawal (in any currency other than USD):</strong><br />4% of the transaction amount</p><br />
                    <p><strong>ATM Online Services (available balance and transactions history):</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Miscellaneous</h3>
                    <p><strong>Monthly Maintenance Fee:</strong><br />USD 3</p><br />
                    <p><strong>E-Statement of Account:</strong><br />Free of Charge</p><br />
                    <p><strong>Physical Statement of Account:</strong><br />Local delivery: USD 5 / International delivery: USD 2 + Pass-through Cost</p><br />
                    <p><strong>SMS Notifications:</strong><br />Free of Charge</p><br />
                    <p><strong>Chargeback Fee:</strong><br />USD 10</p><br />
                    
                    <br />
                    <br />
                    <br />


                    <h2>World Elite Credit Card</h2>
                    <br />
                    <h3 className="font-bold underline">Card Issue, Delivery, Replacement and Cancellation</h3>
                    <p><strong>Primary Card Annual Fee:</strong><br />USD 175</p><br />
                    <p><strong>Supplementary Card Annual Fee:</strong><br />USD 175</p><br />
                    <p><strong>Replacement Card Fee:</strong><br />USD 175</p><br />
                    <p><strong>Card Delivery (local):</strong><br />Free of Charge</p><br />
                    <p><strong>Card Delivery (international):</strong><br />Pass-Through Cost</p><br />
                    <p><strong>Card Cancellation:</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Card Top-up</h3>
                    <p><strong>Adding money to your Card (from your MyMonty eWallet):</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">eWallet Top-up</h3>
                    <p><strong>Adding money to your MyMonty eWallet (from your Card):</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Transactions (Point of Sale [POS] and Online)</h3>
                    <p><strong>Transaction Fee (Local purchase transactions in USD):</strong><br />Free of charge</p><br />
                    <p><strong>Foreign currency conversion fee (purchase transactions in a currency other than USD):</strong><br />4% of the transaction amount</p><br />
                    <p><strong>Cross border fee (if the Card is used for USD purchases with any merchant located outside Lebanon):</strong><br />1.5% *minimum of 0.5 USD</p><br />

                    <h3 className="font-bold underline">ATM Withdrawals</h3>
                    <p><strong>ATM Withdrawal (when using issuer’s ATMs):</strong><br />1% of the transaction amount, with a minimum of USD 1</p><br />
                    <p><strong>ATM Withdrawal (when using other local ATMs):</strong><br />1% of the transaction amount, with a minimum of USD 1<br />(some banks may apply additional fees)</p><br />
                    <p><strong>ATM Withdrawal (when using an ATM outside Lebanon):</strong><br />USD 3.75 + 2% of the transaction amount<br />(some banks may apply additional fees)</p><br />
                    <p><strong>Foreign currency conversion fee (if the Card is used for withdrawals in any currency other than USD):</strong><br />4% of the transaction amount</p><br />

                    <h3 className="font-bold underline">Online Servicing</h3>
                    <p><strong>Available balance, transaction history:</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Miscellaneous</h3>
                    <p><strong>E-Statement of Account:</strong><br />Free of Charge</p><br />
                    <p><strong>Physical Statement of Account:</strong><br />Local delivery: USD 5 / International delivery: USD 2 + Pass-through Cost</p><br />
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
                    <p><strong>Monthly Interest Rate on outstanding balance:</strong><br />POS and Online transactions: 1.99%<br />ATMs transactions*: 2.5%<br />* Interest Rate is applicable as from the transaction date</p><br />
                    <p><strong>Annual Percentage Rate (APR):</strong><br />26.68% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NB: may vary according to spending behavior</p><br />
                    <p><strong>Overlimit Fee:</strong><br />EUR 10</p><br />

                    <h3 className="font-bold underline">Transactions (Point of Sale [POS] and Online)</h3>
                    <p><strong>Transaction Fee (when you use your Card for the purchase of goods or services in Lebanon):</strong><br />Free of Charge</p><br />
                    <p><strong>Foreign currency conversion fee (if the Card is used for purchases in a currency other than EUR):</strong><br />4.8% of the transaction amount</p><br />
                    <p><strong>Cross border fee (if the Card is used for EUR purchases with any merchant located outside Lebanon):</strong><br />1.5% with a minimum of EUR 0.5 per transaction</p><br />

                    <h3 className="font-bold underline">ATM Transactions</h3>
                    <p><strong>ATM Withdrawal (when using an ATM outside Lebanon):</strong><br />EUR 10 per transaction (some banks may apply additional fees)</p><br />
                    <p><strong>ATM Withdrawal (in any currency other than EUR):</strong><br />4.8% of the transaction amount</p><br />
                    <p><strong>ATM Online Services (available balance and transactions history):</strong><br />Free of Charge</p><br />

                    <h3 className="font-bold underline">Miscellaneous</h3>
                    <p><strong>Monthly Maintenance Fee:</strong><br />EUR 3</p><br />
                    <p><strong>E-Statement of Account:</strong><br />Free of Charge</p><br />
                    <p><strong>Physical Statement of Account:</strong><br />Local delivery: USD 5 / International delivery: USD 2 + Pass-through Cost</p><br />
                    <p><strong>SMS Notifications:</strong><br />Free of Charge</p><br />
                    <p><strong>Chargeback Fee:</strong><br />EUR 10</p><br />

                </div>
            </div>

        </div>
    )
}

export default terms;
