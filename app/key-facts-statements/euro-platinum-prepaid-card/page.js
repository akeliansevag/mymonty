import React from 'react';
import { websiteName } from '@/app/config';
import SmallBanner from '@/app/components/SmallBanner';
import FooterBanner from '@/app/components/FooterBanner';

export const metadata = {
    title: 'Euro Platinum Prepaid Card' + websiteName,
    description: ''
};

const pea = () => {
    return (
        <div>
       
            <FooterBanner downloadURL="/euro-platinum-prepaid-card-kfs.pdf" title="Euro PLATINUM Prepaid Card" />
            <div className='container py-10 lg:py-20 relative'>
                <p><strong>MYMONTY MC EURO PLATINUM CREDIT CARD - KEY FACTS STATEMENT <br /> (V.1.0 – 29 September 2025)</strong></p>

                <p className='mt-5 mb-10'>This Key Facts Statement (“KFS”) provides you with information on the key features, limits, fees and charges of the MyMonty Euro Platinum Prepaid MasterCard offered by Monty Finance SAL (“Card”). This KFS does not contain all the terms and conditions governing the Card and it should be read along with the Prepaid MasterCard Terms.</p>

                <div className='table-wrapper'>
                    <h2>1. PRODUCT DESCRIPTION</h2>
                    <p>
                        The Card is a physical, reloadable prepaid Mastercard linked to your MyMonty
                        eWallet Account on the MyMonty App. Funds must be loaded onto the Card before
                        use. You can top up the Card exclusively from your MyMonty eWallet EUR
                        balance. The Card allows cash withdrawals at ATMs (abroad only) and purchases
                        wherever Mastercard Prepaid Cards are accepted, provided there is sufficient
                        available balance for the transaction amount. The Card is neither a credit
                        nor a debit card, and the balance on the Card does not accrue any interest.
                    </p>

                    <table className='mm-table'>
                        <tbody>
                        <tr>
                            <td className='w-1/5'><strong>Card Currency</strong></td>
                            <td><p>Fresh Funds Euro.</p></td>
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
                                To be eligible for the Card you must have and maintain
                                an eWallet Account with MyMonty.
                            </p>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Reward Program</strong></td>
                            <td>
                            <p>
                                0.5% cashback of the purchase transaction amount spent
                                at a Point of Sale or online.
                            </p>
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
                            <td className='table-heading' colSpan={4}>
                                Card Issue, Delivery, Replacement and Termination
                            </td>
                            </tr>
                            <tr>
                            <td><strong>Primary Card Annual Fee</strong></td>
                            <td>EUR 12</td>
                            <td><strong>Card Delivery (Local)</strong></td>
                            <td>Free of Charge</td>
                            </tr>
                            <tr>
                            <td><strong>Supplementary Card Annual Fee</strong></td>
                            <td>EUR 12</td>
                            <td><strong>Card Delivery (International)</strong></td>
                            <td>Pass-Through Cost</td>
                            </tr>
                            <tr>
                            <td>
                                <strong>Replacement Card Fee</strong> (Lost, stolen, fraud or damaged)
                            </td>
                            <td>EUR 9</td>
                            <td><strong>Card Termination</strong></td>
                            <td>Free of Charge</td>
                            </tr>

                            <tr>
                            <td className='table-heading' colSpan={4}>Card Top-up</td>
                            </tr>
                            <tr>
                            <td colSpan={2}>
                                <strong>Adding money to your Card</strong> (from your MyMonty eWallet)
                            </td>
                            <td colSpan={2}>Free of Charge</td>
                            </tr>

                            <tr>
                            <td className='table-heading' colSpan={4}>eWallet Top-up</td>
                            </tr>
                            <tr>
                            <td colSpan={2}>
                                <strong>Adding money to your MyMonty eWallet</strong> (from your Card)
                            </td>
                            <td colSpan={2}>Free of Charge</td>
                            </tr>

                            <tr>
                            <td className='table-heading' colSpan={4}>
                                Transactions (Point of Sale [POS] and Online)
                            </td>
                            </tr>
                            <tr>
                            <td colSpan={2}>
                                <strong>Transaction Fee</strong> (when you use your Card for the purchase of goods or services)
                            </td>
                            <td colSpan={2}>Free of Charge</td>
                            </tr>
                            <tr>
                            <td colSpan={2}>
                                <strong>Foreign currency conversion fee</strong> (if the Card is used for purchases in a currency other than EUR)
                            </td>
                            <td colSpan={2}>4.8% of the transaction amount</td>
                            </tr>
                            <tr>
                            <td colSpan={2}>
                                <strong>Cross border fee</strong> (if the Card is used for EUR purchases with any merchant located outside Lebanon)
                            </td>
                            <td colSpan={2}>
                                1.5% with a minimum of EUR 0.50 per transaction
                            </td>
                            </tr>

                            <tr>
                            <td className='table-heading' colSpan={4}>
                                ATM Withdrawals (Not available in Lebanon)
                            </td>
                            </tr>
                            <tr>
                            <td colSpan={2}>
                                <strong>ATM Withdrawal</strong> (when using an ATM outside Lebanon)
                            </td>
                            <td colSpan={2}>
                                EUR 3.75 + 2% of the transaction amount (some banks may apply additional fees)
                            </td>
                            </tr>
                            <tr>
                            <td colSpan={2}>
                                <strong>Foreign currency conversion fee</strong> (if the Card is used for withdrawals in any currency other than EUR)
                            </td>
                            <td colSpan={2}>4.8% of the transaction amount</td>
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
                            <td colSpan={2}>
                                Local delivery: EUR 5 / International delivery: EUR 2 + Pass-through Cost
                            </td>
                            </tr>
                            <tr>
                            <td colSpan={2}><strong>SMS Notifications</strong></td>
                            <td colSpan={2}>Free of Charge</td>
                            </tr>
                            <tr>
                            <td colSpan={2}><strong>Chargeback Fee</strong></td>
                            <td colSpan={2}>EUR 10</td>
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
                                <td>EUR 75</td>
                                <td><strong>Card Delivery (local)</strong></td>
                                <td>Free of Charge</td>
                            </tr>

                            <tr>
                                <td><strong>Supplementary Card Annual Fee</strong></td>
                                <td>EUR 50</td>
                                <td><strong>Card Delivery (international)</strong></td>
                                <td>Pass-Through Cost</td>
                            </tr>

                            <tr>
                                <td><strong>Replacement Card Fee (lost, stolen, fraud, or damaged)</strong></td>
                                <td>EUR 20</td>
                                <td><strong>Card Cancellation</strong></td>
                                <td>Free of Charge</td>
                            </tr>

                            <tr>
                                <td colSpan={4} className='table-heading'>Late Repayment and Interest Rates</td>
                            </tr>
                            <tr>
                                <td><strong>Late Payment Fee </strong></td>
                                <td colSpan={3}>EUR 10</td>
                            </tr>
                            <tr>
                                <td><strong>Monthly Interest Rate on outstanding balance </strong></td>
                                <td colSpan={3}>
                                    <ul>
                                        <li>POS and Online transactions: 1.99%</li>
                                        <li>
                                            ATMs transactions*: 2.5%
                                            <p className='text-sm'>* Interest Rate is applicable as from the transaction date</p>
                                        </li>

                                    </ul>
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
                                    EUR 10
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={4} className='table-heading'>Transactions (Point of Sale [POS] and Online)</td>
                            </tr>
                            <tr>
                                <td><strong>Transaction Fee (when you use your Card for the purchase of goods or services in Lebanon)</strong></td>
                                <td colSpan={3}>Free of Charge</td>
                            </tr>

                            <tr>
                                <td><strong>Foreign currency conversion fee (if the Card is used for purchases in a currency other than EUR)</strong></td>
                                <td colSpan={3}>4.8% of the transaction amount</td>
                            </tr>

                            <tr>
                                <td><strong>Cross border fee (if the Card is used for EUR purchases with any merchant located outside Lebanon)</strong></td>
                                <td colSpan={3}>1.5% with a minimum of EUR 0.5 per transaction</td>
                            </tr>

                            <tr>
                                <td colSpan={4} className='table-heading'>ATM Withdrawals</td>
                            </tr>
                            <tr>
                                <td><strong>ATM Withdrawal (when using an ATM inside Lebanon)</strong></td>
                                <td colSpan={3}>N/A (The card doesn't support ATM cash withdrawals in Lebanon)</td>
                            </tr>
                            <tr>
                                <td><strong>ATM Withdrawal (when using an ATM outside Lebanon)</strong></td>
                                <td colSpan={3}>EUR 10 per transaction (some banks may apply additional fees)</td>
                            </tr>
                            <tr>
                                <td><strong>Foreign currency conversion fee (if the Card is used for withdrawals in any currency other than EUR)</strong></td>
                                <td colSpan={3}>4.8% of the transaction amount</td>
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
                                <td colSpan={3}>EUR 3</td>
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
                                <td><strong>SMS Notifications </strong></td>
                                <td colSpan={3}>Free of Charge</td>
                            </tr>

                            <tr>
                                <td><strong>Chargeback Fee </strong></td>
                                <td colSpan={3}>EUR 10</td>
                            </tr>

                        </tbody>

                    </table>
                </div>

                <div className='table-wrapper'>
                    <h2>1. LIMITS</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                            <td className='table-heading' colSpan={4}>Card Balance</td>
                            </tr>
                            <tr>
                            <td colSpan={2}><strong>Maximum Card Balance at any time</strong></td>
                            <td colSpan={2}>EUR 9,999</td>
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
                            <td><strong>Maximum Daily Withdrawal</strong></td>
                            <td>EUR 1,000</td>
                            <td><strong>Maximum Weekly Withdrawal</strong></td>
                            <td>EUR 3,000</td>
                            </tr>
                            <tr>
                            <td colSpan={2}><strong>Maximum Monthly Withdrawal</strong></td>
                            <td colSpan={2}>EUR 5,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='table-wrapper'>
                    <h2>5. USEFUL INFORMATION</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                            <td className='table-heading' colSpan={4}>
                                Card Balance Reimbursement upon Expiry or Termination
                            </td>
                            </tr>
                            <tr>
                            <td colSpan={4}>
                                If your card expires or is terminated, you can request a reimbursement within 2 months from the expiry or termination date. After 2 months, any remaining balance will be forfeited.
                            </td>
                            </tr>

                            <tr>
                            <td className='table-heading' colSpan={4}>Amendment</td>
                            </tr>
                            <tr>
                            <td colSpan={4}>
                                We may amend this KFS or any part thereof at any time with immediate effect and without prior notice by posting a new KFS on our website www.mymonty.com.lb or App.
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
