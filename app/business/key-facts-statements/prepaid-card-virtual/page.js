import React from 'react';
import { websiteName } from '@/app/config';
import SmallBanner from '@/app/components/SmallBanner';
import FooterBanner from '@/app/components/FooterBanner';

export const metadata = {
    title: 'MyMonty Business Virtual Prepaid Mastercard | Key Facts & Terms' + websiteName,
    description: 'Essential details for your MyMonty Business Virtual Prepaid Mastercard in Lebanon. Access key facts & statements for secure online spending. Learn more.'
};

const pea = () => {

    return (
        <div>
           
            <FooterBanner downloadURL="/KFS-Business-Virtual-Prepaid-Card.pdf" title="MyMonty Business Virtual Prepaid Mastercard: Key Facts & Statements" />
            <div className='container py-10 lg:py-20 relative'>
                <p><strong>BUSINESS VIRTUAL PREPAID MASTERCAR - KEY FACTS STATEMENT <br /> (V.1.0 – 28 October 2025)</strong></p>

                <p className='mt-5 mb-10'>This Key Facts Statement (“<strong>KFS</strong>”) provides you with information on the key features, limits, fees and charges of the MyMonty Business Virtual Prepaid Mastercard offered by Monty Finance SAL (“<strong>Card</strong>”). This KFS does not contain all the terms and conditions governing the Card and it should be read along with the <a className='text-blue-500 hover:underline' href="/Virtual Prepaid Card Terms.pdf" target="_blank">Virtual Prepaid Mastercard Terms</a>.</p>

                {/* ===================== 1. PRODUCT DESCRIPTION ===================== */}
                <div className='table-wrapper'>
                    <h2>1. PRODUCT DESCRIPTION</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td><strong>Product Description</strong></td>
                                <td>
                                    <p>
                                        The Card is a virtual (non-physical) reloadable Mastercard prepaid card
                                        linked to your MyMonty eWallet Account and exists digitally in your
                                        MyMonty App. It only allows purchases to be made online. Money must be
                                        loaded to the Card before the Card is used. You can top-up the Card from
                                        your MyMonty eWallet only. The Card is made available to you for business
                                        purposes only, and may not be used for personal, family or household
                                        purposes. The Card is neither a credit, a debit or a gift Card, and the
                                        Card balance does not earn any interest.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Card Currency</strong></td>
                                <td>Fresh Funds USD.</td>
                            </tr>
                            <tr>
                                <td><strong>Validity</strong></td>
                                <td>
                                    The Card is valid until the expiry date shown on it
                                    (5 years from the issuance date).
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Eligibility</strong></td>
                                <td>
                                    To be eligible for the Card you must have and maintain
                                    an eWallet Account with MyMonty.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* ===================== 2. FEES AND CHARGES ===================== */}
                <div className='table-wrapper'>
                    <h2>2. FEES AND CHARGES</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td className='table-heading' colSpan={4}>
                                    Card Issue, Replacement and Cancellation
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Card Issuance Fee</strong></td>
                                <td>Free of Charge</td>
                                <td><strong>Annual Renewal Fee</strong></td>
                                <td>Free of Charge</td>
                            </tr>
                            <tr>
                                <td><strong>Replacement Card Fee</strong></td>
                                <td>Free of Charge</td>
                                <td><strong>Card Cancellation</strong></td>
                                <td>Free of Charge</td>
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
                                    Online Transactions (Online)
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Transaction Fee</strong></td>
                                <td>Free of charge</td>
                                <td><strong>Foreign Currency Conversion Fee</strong></td>
                                <td>2% of the transaction amount</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Cross Border Fee</strong></td>
                                <td colSpan={2}>
                                    1.5% with a minimum of USD 0.50 per transaction
                                </td>
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

                {/* ===================== 3. LIMITS (2 × 2) ===================== */}
                <div className='table-wrapper'>
                    <h2>3. LIMITS</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td className='table-heading' colSpan={4}>
                                    Card Top-up and Balance
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Maximum Card Balance</strong></td>
                                <td>USD 5,000</td>
                                <td></td>
                                <td></td>
                            </tr>

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
                        </tbody>
                    </table>
                </div>

                {/* ===================== 4. USEFUL INFORMATION ===================== */}
                <div className='table-wrapper'>
                    <h2>4. USEFUL INFORMATION</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td><strong>Amendment</strong></td>
                                <td>
                                    We may amend this KFS or any part thereof at any time with immediate
                                    effect and without prior notice by posting a new KFS on our website
                                    <a
                                        href="https://mymonty.com.lb"
                                        target="_blank"
                                        className="text-blue-500 hover:underline"
                                    >
                                        www.mymonty.com.lb
                                    </a>
                                    or App.
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
