import React from 'react';
import { websiteName } from '@/app/config';
import SmallBanner from '@/app/components/SmallBanner';
import FooterBanner from '@/app/components/FooterBanner';

export const metadata = {
    title: 'MyMonty Teen Platinum Prepaid Mastercard' + websiteName,
    description: 'Get the key facts & statements for the MyMonty World Elite Prepaid Card in Lebanon. Understand its features, fees & benefits. Learn more.'
};

const pea = () => {

    return (
        <div>
     
            <FooterBanner downloadURL="/Teen-Platinum-Card-7.1.26.pdf" title="MyMonty Teen Platinum Prepaid Mastercard: Key Facts & Disclosures" />
            <div className='container py-10 lg:py-20 relative'>
                <p><strong>TEEN MC PLATINUM PREPAID CARD (PHYSICAL) - KEY FACTS STATEMENT  <br /> (V.1.0 – 07 January 2026)</strong> </p>

                <p className='mt-5 mb-10'>This Key Facts Statement (“KFS”) provides you with information on the key features, limits, fees and charges of the MyMonty Mastercard World Elite Credit Card offered by Monty Finance S.A.L. (“Card”). This KFS does not contain all the terms and conditions governing the Card and it should be read along with the <a className='text-blue-500 hover:underline' href="/world-elite-prepaid-cards-terms-(v.1.0-npy).pdf" target="_blank">World Elite Prepaid MasterCard Terms</a>.</p>

                <div className='table-wrapper'>
                    <h2>1. PRODUCT DESCRIPTION</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td><strong>Product Description</strong></td>
                                <td>
                                    <p>
                                        The Card is a physical, reloadable Mastercard prepaid card linked to your
                                        MyMonty eWallet Account on the MyMonty App. Funds must be loaded onto the
                                        Card before use. You can top up the Card exclusively from your MyMonty
                                        eWallet USD balance. The Card allows cash withdrawals at ATMs and purchases
                                        wherever Mastercard Prepaid Cards are accepted, provided there is sufficient
                                        available balance for the transaction amount. The Card is neither a credit
                                        nor a debit card, and the balance on the Card does not accrue any interest.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Card Currency</strong></td>
                                <td><p>Fresh Funds USD.</p></td>
                            </tr>
                            <tr>
                                <td><strong>Validity</strong></td>
                                <td>
                                    <p>
                                        The Card is valid until the expiry date shown on it
                                        (which is 5 years from the issuance date).
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Eligibility</strong></td>
                                <td>
                                    <p>
                                        To be eligible for the Card, your mother, father, or legal guardian must
                                        have and maintain an eWallet Account with MyMonty and you must be between
                                        6 and 17 years of age.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Reward Program</strong></td>
                                <td>
                                    <p>
                                        0.5% cashback of the purchase transaction amount spent at a
                                        Point of Sale or online.
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='table-wrapper'>
                    <h2>2. FEES AND CHARGES</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td className='table-heading' colSpan={4}>
                                    Card Issue, Delivery, Replacement and Termination
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Primary Card Annual Fee</strong></td>
                                <td>USD 12</td>
                                <td><strong>Card Delivery (Local)</strong></td>
                                <td>USD 4</td>
                            </tr>
                            <tr>
                                <td><strong>Replacement Card Fee</strong> (Lost, stolen, fraud or damaged)</td>
                                <td>USD 12</td>
                                <td><strong>Card Delivery (International)</strong></td>
                                <td>Pass-Through Cost</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Card Top-up</td>
                            </tr>
                            <tr>
                                <td><strong>Adding money to your Card</strong> (from your MyMonty eWallet)</td>
                                <td colSpan={3}>Free of Charge</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>eWallet Top-up</td>
                            </tr>
                            <tr>
                                <td><strong>Adding money to your MyMonty eWallet</strong> (from your Card)</td>
                                <td colSpan={3}>Free of Charge</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>
                                    Transactions (Point of Sale [POS] and Online)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Transaction Fee</strong>
                                    <br />(purchase of goods or services)
                                </td>
                                <td>Free of charge</td>
                                <td>
                                    <strong>Foreign currency conversion fee</strong>
                                    <br />(currency other than USD)
                                </td>
                                <td>4% of the transaction amount</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <strong>Cross border fee</strong>
                                    <br />(USD purchases outside Lebanon)
                                </td>
                                <td colSpan={2}>
                                    1.5% with a minimum of USD 0.50 per transaction
                                </td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>ATM Withdrawals</td>
                            </tr>
                            <tr>
                                <td><strong>ATM Withdrawal</strong> (issuer’s ATMs)</td>
                                <td>
                                    1% of the transaction amount
                                    <br />Minimum USD 1
                                </td>
                                <td><strong>ATM Withdrawal</strong> (other local ATMs)</td>
                                <td>
                                    1% of the transaction amount
                                    <br />Minimum USD 1
                                    <br />(some banks may apply additional fees)
                                </td>
                            </tr>
                            <tr>
                                <td><strong>ATM Withdrawal</strong> (outside Lebanon)</td>
                                <td>
                                    USD 3.75 + 2% of the transaction amount
                                    <br />(some banks may apply additional fees)
                                </td>
                                <td>
                                    <strong>Foreign currency conversion fee</strong>
                                    <br />(currency other than USD)
                                </td>
                                <td>4% of the transaction amount</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Online Servicing</td>
                            </tr>
                            <tr>
                                <td><strong>Available balance & transaction history</strong></td>
                                <td colSpan={3}>Free of Charge</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Miscellaneous</td>
                            </tr>
                            <tr>
                                <td><strong>E-Statement of Account</strong></td>
                                <td>Free of Charge</td>
                                <td><strong>SMS Notifications</strong></td>
                                <td>Free of Charge</td>
                            </tr>
                            <tr>
                                <td><strong>Physical Statement of Account</strong></td>
                                <td>
                                    Local delivery: USD 5 <br />
                                    International delivery: USD 2 + Pass-through Cost
                                </td>
                                <td><strong>Chargeback Fee</strong></td>
                                <td>USD 10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='table-wrapper'>
                    <h2>3. LIMITS</h2>
                    <table className='mm-table'>
                        <tbody>
                            {/* CARD BALANCE */}
                            <tr>
                                <td className='table-heading' colSpan={4}>Card Balance</td>
                            </tr>
                            <tr>
                                <td><strong>Maximum Card Balance at any time</strong></td>
                                <td>USD 9,999</td>
                                <td></td>
                                <td></td>
                            </tr>

                            {/* POS USAGE */}
                            <tr>
                                <td className='table-heading' colSpan={4}>Point of Sale (POS) Usage</td>
                            </tr>
                            <tr>
                                <td><strong>Maximum per Transaction</strong></td>
                                <td>Up to the available balance</td>
                                <td><strong>Maximum Daily Usage</strong></td>
                                <td>Up to the available balance</td>
                            </tr>
                            <tr>
                                <td><strong>Maximum Weekly Usage</strong></td>
                                <td>Up to the available balance</td>
                                <td><strong>Maximum Monthly Usage</strong></td>
                                <td>Up to the available balance</td>
                            </tr>

                            {/* ONLINE USAGE */}
                            <tr>
                                <td className='table-heading' colSpan={4}>Online Usage</td>
                            </tr>
                            <tr>
                                <td><strong>Maximum per Transaction</strong></td>
                                <td>Up to the available balance</td>
                                <td><strong>Maximum Daily Usage</strong></td>
                                <td>Up to the available balance</td>
                            </tr>
                            <tr>
                                <td><strong>Maximum Weekly Usage</strong></td>
                                <td>Up to the available balance</td>
                                <td><strong>Maximum Monthly Usage</strong></td>
                                <td>Up to the available balance</td>
                            </tr>

                            {/* ATM WITHDRAWAL */}
                            <tr>
                                <td className='table-heading' colSpan={4}>ATM Withdrawal</td>
                            </tr>
                            <tr>
                                <td><strong>Maximum Daily Withdrawal</strong></td>
                                <td>USD 1,000</td>
                                <td><strong>Maximum Weekly Withdrawal</strong></td>
                                <td>USD 3,000</td>
                            </tr>
                            <tr>
                                <td><strong>Maximum Monthly Withdrawal</strong></td>
                                <td>USD 5,000</td>
                                <td></td>
                                <td></td>
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
                                    • Issuer’s ATM refers to Fransabank SAL ATMs <br />
                                    • Withdrawals from other local ATMs are currently limited to
                                    BLC Bank SAL ATMs.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Card Balance Reimbursement upon Expiry or Termination</strong></td>
                                <td>
                                    If your Card is expired or terminated, you can request a reimbursement
                                    within 2 months from the expiry or termination date. After 2 months,
                                    any remaining balance will be forfeited.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Amendment</strong></td>
                                <td>
                                    We may amend this KFS at any time by posting an updated version on
                                    <a
                                        className='text-blue-500 hover:underline'
                                        href="https://mymonty.com.lb"
                                        target='_blank'
                                    >
                                        www.mymonty.com.lb
                                    </a>
                                    or the App.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div >
    )
}

export default pea;
