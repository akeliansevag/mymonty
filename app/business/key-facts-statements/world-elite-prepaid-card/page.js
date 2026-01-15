import React from 'react';
import { websiteName } from '@/app/config';
import SmallBanner from '@/app/components/SmallBanner';
import FooterBanner from '@/app/components/FooterBanner';

export const metadata = {
    title: 'MyMonty Business World Elite Prepaid Mastercard' + websiteName,
    description: 'Get the key facts & statements for the MyMonty Business World Elite Prepaid Mastercard in Lebanon. Understand its features, fees & benefits. Learn more.'
};

const pea = () => {

    return (
        <div>
     
            <FooterBanner downloadURL="/KFS-Business-WE-Prepaid-Card.pdf" title="MyMonty Business World Elite Prepaid Mastercard: Key Facts & Disclosures" />
            <div className='container py-10 lg:py-20 relative'>
                <p><strong>BUSINESS WORLD ELITE PREPAID MASTERCARD - KEY FACTS STATEMENT  <br /> (V.1.1 – 04 June 2025)</strong> </p>

                <p className='mt-5 mb-10'>This Key Facts Statement (“KFS”) provides you with information on the key features, limits, fees and charges of the MyMonty Business World Elite Prepaid Mastercard offered by Monty Finance S.A.L. (“Card”). This KFS does not contain all the terms and conditions governing the Card and it should be read along with the <a className='text-blue-500 hover:underline' href="/world-elite-prepaid-cards-terms-(v.1.0-npy).pdf" target="_blank">World Elite Prepaid MasterCard Terms</a>.</p>

                {/* ===================== 1. PRODUCT DESCRIPTION ===================== */}
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
                                        available balance for the transaction amount. The Card is made available to
                                        your team members for business purposes only, and may not be used for
                                        personal, family or household purposes. The Card is neither a credit, a
                                        debit, nor a gift card, and the balance on the Card does not accrue any
                                        interest.
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
                            <tr>
                                <td><strong>Reward Program</strong></td>
                                <td>
                                    0.5% cashback of the purchase transaction amount spent
                                    at a Point of Sale or online.
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
                                    Card Issue, Delivery, Replacement and Cancellation
                                </td>
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
                                <td><strong>Card Delivery (International)</strong></td>
                                <td>Pass-Through Cost</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Replacement Card Fee</strong>
                                    <br />(Lost, stolen, fraud or damaged)
                                </td>
                                <td>USD 175</td>
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
                                    Transactions (Point of Sale [POS] and Online)
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Transaction Fee</strong></td>
                                <td>Free of charge</td>
                                <td><strong>Foreign Currency Conversion Fee</strong></td>
                                <td>4% of the transaction amount</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Cross Border Fee</strong></td>
                                <td colSpan={2}>
                                    1.5% with a minimum of USD 0.50 per transaction
                                </td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>ATM Withdrawals</td>
                            </tr>
                            <tr>
                                <td><strong>Issuer’s ATMs</strong></td>
                                <td>1% (minimum USD 1)</td>
                                <td><strong>Other Local ATMs</strong></td>
                                <td>
                                    1% (minimum USD 1)
                                    <br />(some banks may apply additional fees)
                                </td>
                            </tr>
                            <tr>
                                <td><strong>ATMs Outside Lebanon</strong></td>
                                <td>
                                    USD 3.75 + 2%
                                    <br />(some banks may apply additional fees)
                                </td>
                                <td>
                                    <strong>FX Conversion Fee</strong>
                                    <br />(Withdrawals in non-USD)
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

                {/* ===================== 3. LIMITS (2 × 2) ===================== */}
                <div className='table-wrapper'>
                    <h2>3. LIMITS</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td className='table-heading' colSpan={4}>Card Balance</td>
                            </tr>
                            <tr>
                                <td><strong>Maximum Card Balance</strong></td>
                                <td>USD 9,999</td>
                                <td></td>
                                <td></td>
                            </tr>

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

                {/* ===================== 4. USEFUL INFORMATION ===================== */}
                <div className='table-wrapper'>
                    <h2>4. USEFUL INFORMATION</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td><strong>ATM Withdrawal in Lebanon</strong></td>
                                <td>
                                    • Issuer refers to Fransabank SAL.<br />
                                    • Withdrawals from other local ATMs are currently limited to BLC Bank SAL.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Card Balance Reimbursement upon Expiry</strong></td>
                                <td>
                                    If your card expires, you may request reimbursement within 2 months
                                    from the expiry date. After 2 months, any remaining balance will be forfeited.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Amendment</strong></td>
                                <td>
                                    We may amend this KFS at any time by posting an updated version on
                                    <a
                                        href="https://mymonty.com.lb"
                                        target="_blank"
                                        className="text-blue-500 hover:underline"
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
