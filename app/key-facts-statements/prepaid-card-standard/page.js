import React from 'react';
import { websiteName } from '@/app/config';
import SmallBanner from '@/app/components/SmallBanner';
import FooterBanner from '@/app/components/FooterBanner';

export const metadata = {
    title: 'Physical Prepaid Card | Key Facts & Terms' + websiteName,
    description: 'Important details for your MyMonty Physical Prepaid Card in Lebanon. Access key facts & essential statements for secure usage. View now.'
};

const pea = () => {

    return (
        <div>
       
            <FooterBanner downloadURL="/Standard-Prepaid-Card-KFS.pdf" title="MyMonty Physical Prepaid Card: Key Facts & Statements" />
            <div className='container py-10 lg:py-20 relative'>
                <p><strong>MYMONTY MC STANDARD PREPAID CARD (PHYSICAL) - KEY FACTS STATEMENT <br /> (V.1.1 – 17 November 2025)</strong></p>

                <p className='mt-5 mb-10'>This Key Facts Statement (“<strong>KFS</strong>”) provides you with information on the key features, limits, fees and charges of the MyMonty Mastercard Platinum Physical Prepaid Card offered by Monty Finance SAL (“<strong>Card</strong>”). This KFS does not contain all the terms and conditions governing the Card and it should be read along with the <a className='text-blue-500 hover:underline' href="/.pdf" target="_blank">Prepaid Cards Terms and Conditions</a>.</p>

                <div className='table-wrapper'>
                    <h2>1. PRODUCT DESCRIPTION</h2>
                    <p>
                        The Card is a physical, reloadable Mastercard prepaid card linked to your MyMonty eWallet Account on the MyMonty App.
                        Funds must be loaded onto the Card before use. You can top up the Card exclusively from your MyMonty eWallet USD balance.
                        The Card allows cash withdrawals at ATMs and purchases wherever Mastercard Prepaid Cards are accepted, provided there is sufficient
                        available balance for the transaction amount. The Card is neither a credit nor a debit card, and the balance on the Card does not accrue any interest.
                    </p>

                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td className='w-1/5'><strong>Card Currency</strong></td>
                                <td>Fresh Funds USD.</td>
                            </tr>
                            <tr>
                                <td><strong>Validity</strong></td>
                                <td>The Card is valid until the expiry date shown on it (which is 5 years from the issuance date).</td>
                            </tr>
                            <tr>
                                <td><strong>Eligibility</strong></td>
                                <td>To be eligible for the Card you must have and maintain an eWallet Account with MyMonty.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='table-wrapper'>
                    <h2>2. FEES AND CHARGES</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td className='table-heading' colSpan={4}>Card Issue, Delivery, Replacement and Termination</td>
                            </tr>
                            <tr>
                                <td><strong>Primary Card Annual Fee</strong></td>
                                <td>USD 5</td>
                                <td><strong>Card Delivery (Local)</strong></td>
                                <td>USD 4</td>
                            </tr>
                            <tr>
                                <td><strong>Supplementary Card Annual Fee</strong></td>
                                <td>USD 5</td>
                                <td><strong>Card Delivery (International)</strong></td>
                                <td>Pass-Through Cost</td>
                            </tr>
                            <tr>
                                <td><strong>Replacement Card Fee</strong> (Lost, stolen, fraud or damaged)</td>
                                <td>USD 5</td>
                                <td><strong>Card Termination</strong></td>
                                <td>Free of Charge</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Card Top-up</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Adding money to your Card</strong> (from your MyMonty eWallet)</td>
                                <td colSpan={2}>Free of Charge</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>eWallet Top-up</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Adding money to your MyMonty eWallet</strong> (from your Card)</td>
                                <td colSpan={2}>Free of Charge</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Transactions (Point of Sale [POS] and Online)</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Transaction Fee</strong> (when you use your Card for the purchase of goods or services)</td>
                                <td colSpan={2}>Free of Charge</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Foreign currency conversion fee</strong> (if the Card is used for purchases in a currency other than USD)</td>
                                <td colSpan={2}>2% of the transaction amount</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Cross border fee</strong> (if the Card is used for USD purchases with any merchant located outside Lebanon)</td>
                                <td colSpan={2}>1.5% with a minimum of USD 0.50 per transaction</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>ATM Withdrawals</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>ATM Withdrawal</strong> (when using issuer’s ATMs)</td>
                                <td colSpan={2}>1% of the transaction amount, with a minimum of USD 1</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>ATM Withdrawal</strong> (when using other local ATMs)</td>
                                <td colSpan={2}>1% of the transaction amount, with a minimum of USD 1 (some banks may apply additional fees)</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>ATM Withdrawal</strong> (when using an ATM outside Lebanon)</td>
                                <td colSpan={2}>USD 3.75 + 2% of the transaction amount (some banks may apply additional fees)</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Foreign currency conversion fee</strong> (if the Card is used for withdrawals in any currency other than USD)</td>
                                <td colSpan={2}>2% of the transaction amount</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Online Servicing</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Available balance, transaction history</strong></td>
                                <td colSpan={2}>Free of Charge</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Miscellaneous</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>E-Statement of Account</strong></td>
                                <td colSpan={2}>Free of Charge</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Physical Statement of Account</strong></td>
                                <td colSpan={2}>Local delivery: USD 5 / International delivery: USD 2 + Pass-through Cost</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>SMS Notifications</strong></td>
                                <td colSpan={2}>Free of Charge</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Chargeback Fee</strong></td>
                                <td colSpan={2}>USD 10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className='table-wrapper'>
                    <h2>3. LIMITS</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td className='table-heading' colSpan={4}>Card Balance</td>
                            </tr>
                            <tr>
                                <td>Maximum Card Balance at any time</td>
                                <td colSpan={3}>USD 9,999</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Point of Sale (POS) Usage</td>
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
                                <td className='table-heading' colSpan={4}>Online Usage</td>
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
                                <td className='table-heading' colSpan={4}>ATM Withdrawal</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Maximum Daily Withdrawal</strong></td>
                                <td colSpan={2}>USD 1,000</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Maximum Weekly Withdrawal</strong></td>
                                <td colSpan={2}>USD 3,000</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Maximum Monthly Withdrawal</strong></td>
                                <td colSpan={2}>USD 5,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='table-wrapper'>
                    <h2>4. USEFUL INFORMATION</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td><strong>ATM Withdrawal in Lebanon</strong></td>
                                <td>
                                    <ul className="list-disc list-inside">
                                        <li>Issuer’s ATM refers to Fransabank SAL ATMs</li>
                                        <li>Withdrawals from other local ATMs are limited to BLC Bank SAL ATMs at this stage.</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td><strong>Card Balance Reimbursement upon Expiry or Termination</strong></td>
                                <td>If your card is expired or terminated, you can request a reimbursement within 2 months from the expiry or termination date. After 2 months, any remaining balance will be forfeited.</td>
                            </tr>

                            <tr>
                                <td><strong>Amendment</strong></td>
                                <td>We may amend this KFS or any part thereof at any time with immediate effect and without prior notice by posting a new KFS on our website <a href="https://www.mymonty.com.lb" className='text-blue-500 hover:underline' target='_blank' rel="noopener noreferrer">www.mymonty.com.lb</a> or App.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default pea;
