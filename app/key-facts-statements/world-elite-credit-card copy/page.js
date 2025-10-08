import React from 'react';
import { websiteName } from '@/app/config';
import FooterBanner from '@/app/components/FooterBanner';

export const metadata = {
    title: 'World Elite Prepaid Card' + websiteName,
    description: 'Get the key facts & statements for the MyMonty World Elite Credit Card in Lebanon. Understand its features, fees & benefits. Learn more.'
};

const pea = () => {

    return (
        <div>
     
            <FooterBanner downloadURL="/World Elite Prepaid Card KFS.pdf" title="WORLD ELITE PREPAID MASTERCARD" />
            <div className='container py-10 lg:py-20 relative'>
                <p>
                    <strong>WORLD ELITE PREPAID MASTERCARD - KEY FACTS STATEMENT <br />
                        (V.1.1 – 04 June 2025)</strong> </p>

                <p className='mt-5 mb-10'>This Key Facts Statement (“KFS”) provides you with information on the key features, limits, fees and charges of the MyMonty World Elite Prepaid Mastercard offered by Monty Finance SAL (“Card”). This KFS does not contain all the terms and conditions governing the Card and it should be read along with the <a href="/World Elite Prepaid Cards Terms.pdf" target='_blank' class="text-[var(--mm-blue)] underline">World Elite Prepaid MasterCard Terms</a>. </p>

                <div className='table-wrapper'>
                    <h2>1. PRODUCT DESCRIPTION</h2>
                    <p>The Card is a physical, reloadable prepaid MasterCard linked to your MyMonty eWallet Account on the MyMonty App. Funds must be loaded onto the Card before use. You can top up the Card exclusively from your MyMonty eWallet USD balance. The Card allows cash withdrawals at ATMs and purchases wherever Mastercard Prepaid Cards are accepted, provided there is sufficient available balance for the transaction amount. The Card is neither a credit nor a debit card, and the balance on the Card does not accrue any interest.</p>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>
                                        Card Currency
                                    </strong>
                                </td>
                                <td>
                                    Fresh Funds USD
                                </td>
                        
                            </tr>
                            
                            <tr>
                                <td>
                                    <strong>
                                        Validity
                                    </strong>
                                </td>
                                <td>
                                    The Card is valid until the expiry date shown on it (which is 5 years from the issuance date).
                                </td>
                        
                            </tr>

                            <tr>
                                <td>
                                    <strong>
                                        Eligibility
                                    </strong>
                                </td>
                                <td>
                                    To be eligible for the Card you must have and maintain an eWallet Account with MyMonty.
                                </td>
                        
                            </tr>
                            <tr>
                                <td>
                                    <strong>
                                        Reward Program
                                    </strong>
                                </td>
                                <td>
                                    0.5% cashback of the purchase transaction amount spent at a Point of Sale or online.
                                </td>
                        
                            </tr>
                        </tbody>

                    </table>
                </div>


               

                <div className='table-wrapper'>
                    <h2>3. FEES AND CHARGES</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td colSpan={4} className='bg-gray-200'><strong>Card Issuance, Delivery, Replacement and Cancellation</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Primary Card Annual Fee</strong></td>
                                <td>USD 175</td>
                                <td><strong>Card Delivery (Local)</strong></td>
                                <td>Free of Charge</td>
                            </tr>
                            <tr>
                                <td><strong>Supplementary Card Annual Fee</strong></td>
                                <td>USD 175</td>
                                <td><strong>Card Delivery (international)</strong></td>
                                <td>Pass-Through Cost</td>
                            </tr>
                            <tr>
                                <td><strong>Replacement Card Fee (lost, stolen, fraud, or damaged)</strong></td>
                                <td>USD 175</td>
                                <td><strong>Card Termination</strong></td>
                                <td>Free of Charge</td>
                            </tr>

                            <tr>
                                <td colSpan={4} className='bg-gray-200'><strong>Card Top-up</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Adding money to your Card (from your MyMonty eWallet)</strong></td>
                                <td colSpan={3}>Free of Charge</td>
                            </tr>

                            <tr>
                                <td colSpan={4} className='bg-gray-200'><strong>eWallet Top-up</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Adding money to your MyMonty eWallet (from your Card)</strong></td>
                                <td colSpan={3}>Free of Charge</td>
                            </tr>


                            <tr>
                                <td colSpan={4} className='bg-gray-200'><strong>Transactions (Point of Sale [POS] and Online)</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Transaction Fee (when you use your Card for the purchase of goods or services)</strong></td>
                                <td colSpan={3}>Free of Charge</td>
                            </tr>

                            <tr>
                                <td><strong>Foreign currency conversion fee (if the Card is used for purchases in a currency other than USD)</strong></td>
                                <td colSpan={3}>4% of the transaction amount</td>
                            </tr>

                            <tr>
                                <td><strong>Cross border fee (if the Card is used for USD purchases with any merchant located outside Lebanon)</strong></td>
                                <td colSpan={3}>1.5% with a minimum of USD 0.50 per transaction</td>
                            </tr>

                            <tr>
                                <td colSpan={4} className='bg-gray-200'><strong>ATM Withdrawals</strong></td>
                            </tr>
                            <tr>
                                <td><strong>ATM Withdrawal (when using issuer’s ATMs)</strong></td>
                                <td colSpan={3}>1% of the transaction amount, with a minimum of USD 1</td>
                            </tr>

                            <tr>
                                <td><strong>ATM Withdrawal (when using other local ATMs) </strong></td>
                                <td colSpan={3}>1% of the transaction amount, with a minimum of USD 1 (some banks may apply additional fees)</td>
                            </tr>

                            <tr>
                                <td><strong>ATM Withdrawal (when using an ATM outside Lebanon)</strong></td>
                                <td colSpan={3}>USD 3.75 + 2% of the transaction amount (some banks may apply additional fees)</td>
                            </tr>

                            <tr>
                                <td><strong>Foreign currency conversion fee (if the Card is used for withdrawals in any currency other than USD)</strong></td>
                                <td colSpan={3}>4% of the transaction amount</td>
                            </tr>


                            <tr>
                                <td colSpan={4} className='bg-gray-200'><strong>Online Servicing</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Available balance, transaction history</strong></td>
                                <td colSpan={3}>Free of Charge</td>
                            </tr>


                            <tr>
                                <td colSpan={4} className='bg-gray-200'><strong>Miscellaneous</strong></td>
                            </tr>
                            <tr>
                                <td><strong>E-Statement of Account</strong></td>
                                <td colSpan={3}>Free of Charge</td>
                            </tr>

                            <tr>
                                <td><strong>Physical Statement of Account</strong></td>
                                <td colSpan={3}>Local delivery: USD 5 / International delivery: USD 2 + Pass-through Cost</td>
                            </tr>
                            <tr>
                                <td><strong>SMS Notifications</strong></td>
                                <td colSpan={3}>Free of Charge</td>
                            </tr>
                            <tr>
                                <td><strong>Chargeback Fee</strong></td>
                                <td colSpan={3}>USD 10</td>
                            </tr>
                            
                        </tbody>

                    </table>
                </div>


                <div className='table-wrapper'>
                    <h2>4. LIMITS</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td colSpan={4} className='bg-gray-200'><strong>Card Balance</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Maximum Card Balance at any time</strong></td>
                                <td colSpan={3}>USD 9,999</td>
                            </tr>

                            <tr>
                                <td colSpan={4} className='bg-gray-200'><strong>Point of Sale (POS) Usage</strong></td>
                            </tr>

                            <tr>
                                <td><strong>Maximum per Transaction</strong></td>
                                <td>Up to the available balance</td>
                                <td><strong>Maximum Weekly Usage</strong></td>
                                <td>Up to the available balance</td>
                            </tr>

                            <tr>
                                <td><strong>Maximum Daily Usage</strong></td>
                                <td>Up to the available balance</td>
                                <td><strong>Maximum Monthly Usage</strong></td>
                                <td>Up to the available balance</td>
                            </tr>


                            <tr>
                                <td colSpan={4} className='bg-gray-200'><strong>Online Usage</strong></td>
                            </tr>

                            <tr>
                                <td><strong>Maximum per Transaction</strong></td>
                                <td>Up to the available balance</td>
                                <td><strong>Maximum Weekly Usage</strong></td>
                                <td>Up to the available balance</td>
                            </tr>

                            <tr>
                                <td><strong>Maximum Daily Usage</strong></td>
                                <td>Up to the available balance</td>
                                <td><strong>Maximum Monthly Usage</strong></td>
                                <td>Up to the available balance</td>
                            </tr>


                            <tr>
                                <td colSpan={4} className='bg-gray-200'><strong>ATM Withdrawal</strong></td>
                            </tr>

                            <tr>
                                <td><strong>Maximum Daily Withdrawal</strong></td>
                                <td colSpan={3}>USD 1,000 </td> 
                            </tr>

                            <tr>
                                <td><strong>Maximum Weekly Withdrawal</strong></td>
                                <td colSpan={3}>USD 3,000</td> 
                            </tr>

                            <tr>
                                <td><strong>Maximum Monthly Withdrawal</strong></td>
                                <td colSpan={3}>USD 5,000</td> 
                            </tr>
                        </tbody>

                    </table>
                </div>

                <div className='table-wrapper'>
                    <h2>5. USEFUL INFORMATION</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td><strong>ATM Withdrawal in Lebanon</strong></td>
                                <td>
                                    <ul class="list-disc list-inside">
                                        <li>
                                            Issuer’s ATM refers to Fransabank SAL ATMs
                                        </li>
                                        <li>
                                            Withdrawals from other local ATMs are currently only available at BLC Bank SAL ATMs
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                           
                            <tr>
                                <td><strong>Card Balance Reimbursement upon Expiry or Termination</strong></td>
                                <td>If your card is expired or terminated, you can request a reimbursement within 2 months from the expiry or termination date. After 2 months, any remaining balance will be forfeited.</td>
                            </tr>

                            <tr>
                                <td><strong>Amendment</strong></td>
                                <td>We may amend this KFS or any part thereof at any time with immediate effect and without prior notice by posting a new KFS on our website www.mymonty.com.lb or App.</td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>

        </div >
    )
}

export default pea;
