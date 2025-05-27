import React from 'react';
import { websiteName } from '@/app/config';
import SmallBanner from '@/app/components/SmallBanner';
import FooterBanner from '@/app/components/FooterBanner';

export const metadata = {
    title: websiteName + 'World Elite Credit Card',
    description: ''
};

const pea = () => {

    return (
        <div>
            <FooterBanner downloadURL="/world-elite-kfs.pdf" title="World Elite Credit Card" />
            <div className='container py-10 lg:py-20 relative'>
                <p>
                    <strong>MYMONTY MC WORLD ELITE CREDIT CARD - KEY FACTS STATEMENT  <br />
                        (V.1.2 – 23 May 2025)</strong> </p>

                <p className='mt-5 mb-10'>This Key Facts Statement (“KFS”) provides you with information on the key features, limits, fees and charges of the MyMonty Mastercard World Elite Credit Card offered by Monty Finance S.A.L. (“Card”). This KFS does not contain all the terms and conditions governing the Card and it should be read along with the Credit Cards Terms and Conditions and the Credit Card Application Form. </p>

                <div className='table-wrapper'>
                    <h2>1. PRODUCT DESCRIPTION</h2>
                    <p>The Card is a physical Mastercard World Elite Credit Card. </p>
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
                                <td>
                                    <strong>
                                        Card Category
                                    </strong>
                                </td>
                                <td>
                                    Revolving
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Credit Limit</strong>
                                </td>
                                <td colSpan={3}>
                                    Minimum USD 5,000 and Maximum USD 30,000
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Validity</strong>
                                </td>
                                <td colSpan={3}>
                                    The Card is valid until the expiry date shown on it (which is 5 years from the issuance date)
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Grace Period</strong>
                                </td>
                                <td colSpan={3}>
                                    A period of up to 35 days from the transaction date during which the cardholder does not incur interest on the purchases. The grace period does not apply to cash withdrawal transactions.
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Monthly Repayment</strong>
                                </td>
                                <td colSpan={3}>
                                    Minimum 10% of the outstanding balance or USD50, whichever is greater <br />
                                    Maximum: 100% of the outstanding balance

                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Billing Date</strong>
                                </td>
                                <td colSpan={3}>
                                    25th of each month (may change in case of holidays)

                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Method of Repayment</strong>
                                </td>
                                <td colSpan={3}>
                                    In cash (Fresh USD) at MyMonty Locations

                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>


                <div className='table-wrapper'>
                    <h2>2. ELIGIBILITY</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>
                                        Nationality
                                    </strong>
                                </td>
                                <td>
                                    Lebanese
                                </td>
                                <td>
                                    <strong>
                                        Age (years)
                                    </strong>
                                </td>
                                <td>
                                    Between 30 and 65
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Minimum period at current Work</strong>
                                </td>
                                <td>
                                    Employed: 1 year <br />
                                    Self-employed: 3 years in same field

                                </td>
                                <td>
                                    <strong>Minimum monthly income</strong>
                                </td>
                                <td>
                                    Fresh USD 9,000
                                </td>
                            </tr>

                            <tr>
                                <td><strong>MyMonty user</strong></td>
                                <td colSpan={3}>
                                    Applicants must be enrolled in MyMonty app for at least 12 months and apply for a credit card with a specific limit through the app.<br />
                                    The wallet turnover for purchase transactions must reach a minimum of USD 3,000 per month over six consecutive months.

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
                                <td>USD 200</td>
                                <td><strong>Card Delivery (local)</strong></td>
                                <td>Free of Charge</td>
                            </tr>
                            <tr>
                                <td><strong>Supplementary Card Annual Fee</strong></td>
                                <td>USD 200</td>
                                <td><strong>Card Delivery (international)</strong></td>
                                <td>Pass-Through Cost</td>
                            </tr>
                            <tr>
                                <td><strong>Replacement Card Fee (lost, stolen, fraud, or damaged)</strong></td>
                                <td>USD 200</td>
                                <td><strong>Card Cancellation</strong></td>
                                <td>Free of Charge</td>
                            </tr>

                            <tr>
                                <td colSpan={4} className='bg-gray-200'><strong>Late Repayment and Interest Rates</strong></td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Late Payment Fee</strong></td>
                                <td colSpan={2}>USD 10</td>

                            </tr>

                            <tr>
                                <td colSpan={2}><strong>Monthly Interest Rate on outstanding balance</strong></td>
                                <td colSpan={2}>
                                    POS and Online transactions: 1.99% <br />
                                    ATMs transactions*: 2.5% <br />
                                    * Interest Rate is applicable as from the transaction date

                                </td>

                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Annual Percentage Rate (APR)</strong></td>
                                <td colSpan={2}>
                                    26.68% <br />
                                    NB: may vary according to spending behavior

                                </td>

                            </tr>

                            <tr>
                                <td colSpan={2}><strong>Overlimit Fee</strong></td>
                                <td colSpan={2}>
                                    USD 10
                                </td>

                            </tr>

                            <tr>
                                <td colSpan={4} className='bg-gray-200'><strong>Transactions (Point of Sale [POS] and Online)</strong></td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Transaction Fee (when you use your Card for the purchase of goods or services in Lebanon)</strong></td>
                                <td colSpan={2}>Free of Charge</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Foreign currency conversion fee (if the Card is used for purchases in a currency other than USD)</strong></td>
                                <td colSpan={2}>4% of the transaction amount</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Cross border fee (if the Card is used for USD purchases with any merchant located outside Lebanon)</strong></td>
                                <td colSpan={2}>1.5% with a minimum of USD 0.5 per transaction</td>
                            </tr>

                            <tr>
                                <td colSpan={4} className='bg-gray-200'><strong>ATM Withdrawals</strong></td>
                            </tr>

                            <tr>
                                <td colSpan={2}><strong>ATM Withdrawal (when using Integrated ATMs)</strong></td>
                                <td colSpan={2}>USD 7 per transaction</td>
                            </tr>

                            <tr>
                                <td colSpan={2}><strong>ATM Withdrawal (when using other Local ATMs)</strong></td>
                                <td colSpan={2}>USD 10 per transaction</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>ATM Withdrawal (when using an ATM outside Lebanon)</strong></td>
                                <td colSpan={2}>USD 10 per transaction (some banks may apply additional fees)</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Foreign currency conversion fee (if the Card is used for withdrawals in any currency other than USD)</strong></td>
                                <td colSpan={2}>4% of the transaction amount</td>
                            </tr>

                            <tr>
                                <td colSpan={4} className='bg-gray-200'><strong>ATM Online Services</strong></td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Available balance and Transactions History</strong></td>
                                <td colSpan={2}>Free of Charge</td>
                            </tr>

                            <tr>
                                <td colSpan={4} className='bg-gray-200'><strong>Miscellaneous</strong></td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Monthly Maintenance Fee</strong></td>
                                <td colSpan={2}>USD 3</td>
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
                    <h2>4. LIMITS</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td colSpan={2} className='bg-gray-200'><strong>Card Balance based on Credit Limit</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Maximum Card Balance at any time</strong></td>
                                <td>Up to the Credit Limit</td>
                            </tr>

                            <tr>
                                <td colSpan={2} className='bg-gray-200'><strong>Spending Limit</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Point of sale (POS) and online transactions</strong></td>
                                <td>Up to the available Credit Limit</td>
                            </tr>

                            <tr>
                                <td colSpan={2} className='bg-gray-200'><strong>ATM Withdrawal</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Maximum Withdrawal Limit</strong></td>
                                <td>USD 2,000 Monthly</td>
                            </tr>
                            <tr>
                                <td><strong>Withdrawing money in cash from your Card in Lebanon at Integrated ATMs</strong></td>
                                <td>You can withdraw money in cash at any Fransabank SAL s ATM in Lebanon.</td>
                            </tr>
                            <tr>
                                <td><strong>Withdrawing money in cash from your Card in Lebanon at Local ATMs</strong></td>
                                <td>You can withdraw money in cash at any BLC SAL s ATM in Lebanon.</td>
                            </tr>
                            <tr>
                                <td><strong>Reward Program</strong></td>
                                <td>1% Cashback on any amount spent at Points of Sale or Online</td>
                            </tr>
                        </tbody>

                    </table>
                </div>


            </div>

        </div >
    )
}

export default pea;
