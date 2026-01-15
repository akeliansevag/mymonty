import React from 'react';
import { websiteName } from '@/app/config';
import SmallBanner from '@/app/components/SmallBanner';
import FooterBanner from '@/app/components/FooterBanner';

export const metadata = {
    title: 'Platinum Credit Card | Key Facts & Features' + websiteName,
    description: 'Key facts & statements for the MyMonty Platinum Credit Card in Lebanon. Find essential details about benefits, fees & terms. Get informed.'
};

const pea = () => {

    return (
        <div>
         
            <FooterBanner downloadURL="/Credit-Card-KFS-(Offline)-12-9-25.pdf" title="MyMonty Platinum Credit Card: Key Facts & Disclosures" />
            <div className='container py-10 lg:py-20 relative'>
                <p>
                    <strong>MYMONTY MC PLATINUM CREDIT CARD - KEY FACTS STATEMENT  <br />
                        (V.1.8 – 12 September 2025)</strong> </p>

                <p className='mt-5 mb-10'>This Key Facts Statement (“KFS”) provides you with information on the key features, limits, fees and charges of the MyMonty Mastercard Platinum Credit Card offered by Monty Finance S.A.L. (“Card”). This KFS does not contain all the terms and conditions governing the Card and it should be read along with the Credit Cards Terms and Conditions and the Credit Card Application Form of which it forms an integral part. </p>

                <div className='table-wrapper'>
                    <h2>1. PRODUCT DESCRIPTION</h2>
                    <p>The Card is a physical Mastercard Platinum Credit Card.  </p>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td className='w-1/5'><strong>Card Currency</strong></td>
                                <td><p>Fresh Funds USD.</p></td>
                                <td className='w-1/5'><strong>Card Category</strong></td>
                                <td><p>Revolving</p></td>
                            </tr>
                            <tr>
                                <td><strong>Validity</strong></td>
                                <td colSpan={3}><p>The Card is valid until the expiry date shown on it (which is 5 years from the issuance date)</p></td>
                            </tr>
                            <tr>
                                <td><strong>Grace Period </strong></td>
                                <td colSpan={3}><p>A period of up to 35 days from the transaction date during which the cardholder does not incur interest on the purchases.
                                    The grace period does not apply to cash withdrawal transactions.</p></td>
                            </tr>

                            <tr>
                                <td><strong>Monthly Repayment </strong></td>
                                <td colSpan={3}><p>Minimum 10% of the outstanding balance or USD50, whichever is greater <br />
                                    Maximum: 100% of the outstanding balance</p></td>
                            </tr>

                            <tr>
                                <td><strong>Billing Date </strong></td>
                                <td colSpan={3}><p>25<sup>th</sup> of each month (may change in case of holidays)</p></td>
                            </tr>
                            <tr>
                                <td><strong>Method of Repayment</strong></td>
                                <td colSpan={3}><p>In cash (Fresh USD) at MyMonty Locations</p></td>
                            </tr>
                        </tbody>

                    </table>
                </div>

                <div className='table-wrapper'>
                    <h2>2. ELIGIBILITY</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td><strong>Nationality</strong></td>
                                <td><p>Lebanese</p></td>
                                <td><strong>Age (years)</strong></td>
                                <td><p>Between 21 and 64</p></td>
                            </tr>
                            <tr>
                                <td><strong>Minimum period at current
                                    Work</strong></td>
                                <td>
                                    <ul>
                                        <li>Employee: 1 year </li>
                                        <li>Self-employed: 3 years in same field</li>
                                    </ul>
                                </td>
                                <td><strong>Minimum monthly income</strong></td>
                                <td><p>Fresh USD 1,000</p></td>
                            </tr>
                            <tr>
                                <td><strong>MyMonty user</strong></td>
                                <td colSpan={3}>
                                    <ul>
                                        <li>
                                            Applicants must be enrolled in MyMonty app for at least 6 months and apply for a credit card with a specific limit through
                                            the app.
                                        </li>
                                        <li>
                                            The wallet turnover for purchase transactions must reach a minimum of USD 750 per month over six consecutive months.
                                        </li>
                                    </ul>
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
                                <td colSpan={4} className='table-heading'>Card Issuance, Delivery, Replacement and Cancellation</td>
                            </tr>
                            <tr>
                                <td><strong>Primary Card Annual Fee</strong></td>
                                <td>USD 75</td>
                                <td><strong>Card Delivery (local)</strong></td>
                                <td>Free of Charge</td>
                            </tr>

                            <tr>
                                <td><strong>Supplementary Card Annual Fee</strong></td>
                                <td>USD 50</td>
                                <td><strong>Card Delivery (international)</strong></td>
                                <td>Pass-Through Cost</td>
                            </tr>

                            <tr>
                                <td><strong>Replacement Card Fee (lost, stolen, fraud, or damaged)</strong></td>
                                <td>USD 20</td>
                                <td><strong>Card Cancellation</strong></td>
                                <td>Free of Charge</td>
                            </tr>

                            <tr>
                                <td colSpan={4} className='table-heading'>Late Repayment and Interest Rates</td>
                            </tr>
                            <tr>
                                <td><strong>Late Payment Fee </strong></td>
                                <td colSpan={3}>USD 10</td>
                            </tr>
                            <tr>
                                <td><strong>Monthly Interest Rate on outstanding balance </strong></td>
                                <td colSpan={2}>
                                    POS and Online transactions: 1.99%
                                </td>
                                <td colSpan={2}>
                                    ATMs transactions*: 2.5%
                                    <p className='text-sm'>* Interest Rate is applicable as from the transaction date</p>
                                </td>
                            </tr>

                            <tr>
                                <td><strong>Annual Percentage Rate (APR) </strong></td>
                                <td colSpan={3}>
                                    <p>26.68% </p>
                                    <p className='italic'>NB: may vary according to spending behavior</p>
                                </td>
                            </tr>

                            <tr>
                                <td><strong>Overlimit Fee</strong></td>
                                <td colSpan={3}>
                                    USD 10
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={4} className='table-heading'>Transactions (Point of Sale [POS] and Online)</td>
                            </tr>
                            <tr>
                                <td><strong>Transaction Fee</strong> (when you use your Card for the purchase of goods or services in Lebanon)</td>
                                <td colSpan={3}>Free of Charge</td>
                            </tr>

                            <tr>
                                <td><strong>Foreign currency conversion fee</strong> (if the Card is used for purchases in a currency other than USD)</td>
                                <td colSpan={3}>2% of the transaction amount</td>
                            </tr>

                            <tr>
                                <td><strong>Cross border fee</strong> (if the Card is used for USD purchases with any merchant located outside Lebanon)</td>
                                <td colSpan={3}>1.5% with a minimum of USD 0.5 per transaction</td>
                            </tr>

                            <tr>
                                <td colSpan={4} className='table-heading'>ATM Withdrawals</td>
                            </tr>
                            <tr>
                                <td><strong>ATM Withdrawal</strong> (when using Integrated ATMs)</td>
                                <td colSpan={3}>USD 7 per transaction</td>
                            </tr>
                            <tr>
                                <td><strong>ATM Withdrawal</strong> (when using other Local ATMs)</td>
                                <td colSpan={3}>USD 10 per transaction (some banks may apply additional fees)</td>
                            </tr>
                            <tr>
                                <td><strong>ATM Withdrawal</strong> (when using an ATM outside Lebanon)</td>
                                <td colSpan={3}>USD 10 per transaction (some banks may apply additional fees)</td>
                            </tr>
                            <tr>
                                <td><strong>Foreign currency conversion fee</strong> (if the Card is used for withdrawals in any currency other than USD)</td>
                                <td colSpan={3}>2% of the transaction amount</td>
                            </tr>

                            <tr>
                                <td colSpan={4} className='table-heading'>ATM Online Services</td>
                            </tr>
                            <tr>
                                <td><strong>Available balance and Transactions History</strong></td>
                                <td colSpan={3}>Free of Charge</td>
                            </tr>

                            <tr>
                                <td colSpan={4} className='table-heading'>Miscellaneous</td>
                            </tr>
                            <tr>
                                <td><strong>Monthly Maintenance Fee </strong></td>
                                <td colSpan={3}>USD 3</td>
                            </tr>
                            <tr>
                                <td><strong>E-Statement of Account</strong></td>
                                <td colSpan={3}>Free of Charge</td>
                            </tr>

                            <tr>
                                <td><strong>Physical Statement of Account</strong></td>
                                <td colSpan={3}>Local delivery: USD 5 / International delivery: USD 2 + Pass-through
                                    Cost</td>
                            </tr>

                            <tr>
                                <td><strong>SMS Notifications </strong></td>
                                <td colSpan={3}>Free of Charge</td>
                            </tr>

                            <tr>
                                <td><strong>Chargeback Fee </strong></td>
                                <td colSpan={3}>USD 10</td>
                            </tr>

                        </tbody>

                    </table>
                </div>

                <div className='table-wrapper'>
                    <h2>1. LIMITS</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td className='table-heading' colSpan={4}>
                                    Card Balance based on Credit Limit
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Maximum Card Balance at any time</strong></td>
                                <td colSpan={3}>Up to the Credit Limit</td>
                            </tr>
                            <tr>
                                <td className='table-heading' colSpan={4}>
                                    Spending Limit
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Point of sale (POS) and online transactions </strong></td>
                                <td colSpan={3}>Up to the available Credit Limit</td>
                            </tr>
                            <tr>
                                <td className='table-heading' colSpan={4}>
                                    ATM Withdrawal
                                </td>
                            </tr>

                            <tr>
                                <td><strong>Maximum Withdrawal Limit</strong></td>
                                <td>
                                    <ul>
                                        <li>Credit Limit up to USD 2,000</li>
                                        <li>USD 500 Monthly </li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Credit Limit: {'>'} USD 2,000 ≤ USD 5,000</li>
                                        <li>USD 1,000 Monthly </li>
                                    </ul>
                                </td>

                                <td>
                                    <ul>
                                        <li>Credit Limit greater than USD 5,000</li>
                                        <li>USD 2,000 Monthly</li>
                                    </ul>
                                </td>
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
                                <td colSpan={3}>
                                    <ul className="list-disc list-inside">
                                        <li>Issuer’s ATM refers to Fransabank SAL ATMs</li>
                                        <li>Withdrawals from other local ATMs are limited to BLC Bank SAL ATMs at this stage.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Reward Program</strong></td>
                                <td colSpan={3}>1% Cashback on any amount spent at Points of Sale or Online</td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>

        </div >
    )
}

export default pea;
