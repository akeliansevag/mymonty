import React from 'react';
import { websiteName } from '@/app/config';
import SmallBanner from '@/app/components/SmallBanner';
import FooterBanner from '@/app/components/FooterBanner';

export const metadata = {
    title: websiteName + 'Personal eWallet Account',
    description: ''
};

const pea = () => {

    return (
        <div>
            <FooterBanner downloadURL="/KFSPrepaidCardPhysical.pdf" title="Prepaid Card (Physical)" />
            <div className='container py-10 lg:py-20 relative'>
                <p>
                    <strong>MYMONTY MC PLATINUM PREPAID CARD (PHYSICAL) - KEY FACTS STATEMENT  <br />
                        (V.1.1 – 6 Aug 2024)</strong> </p>

                <p className='mt-5 mb-10'>This Key Facts Statement (“KFS”) provides you with information on the key features, limits, fees and charges of the MyMonty Mastercard Platinum Physical Prepaid Card offered by Monty Finance SAL (“Card”). This KFS does not contain all the terms and conditions governing the Card and it should be read along with the Prepaid Cards Terms and Conditions of which it forms an integral part.</p>

                <div className='table-wrapper'>
                    <h2>1. PRODUCT DESCRIPTION</h2>
                    <p>The Card is a physical reloadable Mastercard prepaid card linked to your MyMonty eWallet Account on the MyMonty App. Money must be loaded to the Card before the Card is used. You can top-up the Card from your MyMonty eWallet only. The Card allows cash withdrawals at ATM’s and purchases to be made wherever Mastercard Prepaid Cards are accepted if a sufficient available balance exists for the amount of the transaction. The Card is not a credit or a debit Card, and the Card balance does not earn any interest.</p>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td className='w-1/5'><strong>Card Currency</strong></td>
                                <td><p>Fresh Funds USD.</p></td>
                            </tr>
                            <tr>
                                <td><strong>Validity</strong></td>
                                <td><p>The Card is valid until the expiry date shown on it (which is 1 year from the issuance date).</p></td>
                            </tr>
                            <tr>
                                <td><strong>Eligibility</strong></td>
                                <td><p>To be eligible for the Card you must have and maintain an eWallet Account with MyMonty.</p></td>
                            </tr>

                        </tbody>

                    </table>
                </div>

                <div className='table-wrapper'>
                    <h2>2. FEES AND CHARGES</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td className='table-heading' colSpan={4}>Card Issue, Delivery, Replacement and Cancellation</td>
                            </tr>
                            <tr>
                                <td><strong>Card Issuance Fee</strong></td>
                                <td>USD 12</td>
                                <td><strong>Card Delivery (local)</strong></td>
                                <td>Free of Charge</td>
                            </tr>
                            <tr>
                                <td><strong>Annual Fee</strong></td>
                                <td>Free of charge</td>
                                <td><strong>Card Delivery (international)</strong></td>
                                <td>Pass-Through Cost</td>
                            </tr>
                            <tr>
                                <td><strong>Replacement Card Fee (lost or stolen)</strong></td>
                                <td>USD 15</td>
                                <td><strong>Card Cancellation</strong></td>
                                <td>Free of charge</td>
                            </tr>
                            <tr>
                                <td className='table-heading' colSpan={4}>Card Top-up</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Adding money to your Card (from your MyMonty eWallet)</strong></td>
                                <td colSpan={2}>Free of charge</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>eWallet Top-up</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Adding money to your MyMonty eWallet (from your Card)</strong></td>
                                <td colSpan={2}>Free of charge</td>

                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Transactions (Point of Sale [POS] and Online)</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Transaction Fee (when you use your Card for the purchase of goods or services)
                                </strong></td>
                                <td colSpan={2}>Free of charge
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Foreign currency conversion fee (if the Card is used for purchases or withdrawals in a currency other than USD)
                                </strong></td>
                                <td colSpan={2}>4% of the transaction amount
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Cross border fee (if the Card is used for USD purchases with any merchant located outside Lebanon)
                                </strong></td>
                                <td colSpan={2}>1% + USD 0.5
                                </td>
                            </tr>


                            <tr>
                                <td className='table-heading' colSpan={4}>ATM Withdrawals</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>ATM Withdrawal (when using Integrated ATMs)</strong></td>
                                <td colSpan={2}>1% of the transaction amount, with a minimum of USD 1</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>ATM Withdrawal (when using an ATM outside Lebanon)</strong></td>
                                <td colSpan={2}>USD 3.75 + 2% of the transaction amount (some banks may apply additional fees)</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Foreign currency conversion fee (if the Card is used for withdrawals in any currency other than USD)</strong></td>
                                <td colSpan={2}>4% of the transaction amount</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Online Servicing </td>
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
                                <td>
                                    Maximum Card Balance at any time
                                </td>
                                <td>
                                    USD 9,999

                                </td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Point of Sale (POS) Usage</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Maximum per Transaction</strong>
                                </td>
                                <td>
                                    Up to the available balance
                                </td>
                                <td>
                                    <strong>Maximum Weekly Usage</strong>
                                </td>
                                <td>
                                    Up to the available balance
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Maximum Daily Usage</strong>
                                </td>
                                <td>
                                    Up to the available balance
                                </td>
                                <td>
                                    <strong>Maximum Monthly Usage </strong>
                                </td>
                                <td>
                                    Up to the available balance
                                </td>
                            </tr>


                            <tr>
                                <td className='table-heading' colSpan={4}>Online Usage</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Maximum per Transaction</strong>
                                </td>
                                <td>
                                    Up to the available balance
                                </td>
                                <td>
                                    <strong>Maximum Weekly Usage</strong>
                                </td>
                                <td>
                                    Up to the available balance
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Maximum Daily Usage</strong>
                                </td>
                                <td>
                                    Up to the available balance
                                </td>
                                <td>
                                    <strong>Maximum Monthly Usage </strong>
                                </td>
                                <td>
                                    Up to the available balance
                                </td>
                            </tr>


                            <tr>
                                <td className='table-heading' colSpan={4}>ATM Withdrawal</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <strong>Maximum Daily Withdrawal</strong>
                                </td>
                                <td colSpan={2}>
                                    USD 1,000
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <strong>Maximum Weekly Withdrawal</strong>
                                </td>
                                <td colSpan={2}>
                                    USD 3,000
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <strong>Maximum Monthly Withdrawal</strong>
                                </td>
                                <td colSpan={2}>
                                    USD 5,000
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='table-wrapper'>
                    <h2>4. USEFUL INFORMATION</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Withdrawing money in cash from your Card in Lebanon at Integrated ATMs</strong>
                                </td>
                                <td>
                                    You can withdraw money in cash at any Fransabank SAL or BLC Bank SAL’s ATM in Lebanon.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Amendment</strong>
                                </td>
                                <td>
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
