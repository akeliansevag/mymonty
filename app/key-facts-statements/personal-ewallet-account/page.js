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
            <FooterBanner downloadURL="/KFSPersonaleWalletAccount.pdf" title="Personal eWallet Account" />
            <div className='container py-10 lg:py-20 relative'>
                <p>
                    <strong>PERSONAL MYMONTY eWALLET ACCOUNT - KEY FACTS STATEMENT <br />
                        (V.1.1 – 6 Aug 2024)</strong> </p>

                <p className='mt-5 mb-10'>This Key Facts Statement (“KFS”) provides you with information on the key features, limits, fees and charges of the personal MyMonty eWallet Account offered by Monty Finance SAL to individual clients (“eWallet Account”). This KFS does not contain all the terms and conditions governing the eWallet Account and it should be read along with the Customer Agreement of which it forms an integral part.</p>

                <div className='table-wrapper'>
                    <h2>1. PRODUCT DESCRIPTION</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td className='w-1/5'>Payment Account</td>
                                <td><p>The eWallet Account is a payment account for your payments needs. It is not a deposit nor a savings account and does not entitle you to interest. </p></td>
                            </tr>
                            <tr>
                                <td>Account Currency</td>
                                <td><p>The eWallet Account is a dual currency account split into two separate balances, one designated in Lebanese Pounds (LBP) and the other in United States Dollars (USD).</p></td>
                            </tr>
                            <tr>
                                <td>No Currency Exchange</td>
                                <td><p>The eWallet Account does not support currency exchange. Currency exchange between the LBP balance and USD balance is not available. You cannot use your USD balance to make payments in LBP, or vice versa. Transactions are limited to the respective currencies. You can only use the LBP balance to make LBP transactions and the USD balance to make USD transactions.</p></td>
                            </tr>
                            <tr>
                                <td>Eligibility</td>
                                <td><p>To be eligible for an eWallet Account you must be a Lebanese Citizen of 18 years and above.</p></td>
                            </tr>
                            <tr>
                                <td>Minimum Balance</td>
                                <td><p>No minimum balance is required to open or maintain the Account.</p></td>
                            </tr>
                        </tbody>

                    </table>
                </div>

                <div className='table-wrapper'>
                    <h2>2. FEES AND CHARGES</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td className='table-heading' colSpan={4}>Opening, Keeping and Closing the eWallet Account</td>
                            </tr>
                            <tr>
                                <td><strong>Account Opening</strong></td>
                                <td>Free of charge</td>
                                <td><strong>Minimum Balance Fee</strong></td>
                                <td>Not applicable</td>
                            </tr>
                            <tr>
                                <td><strong>Account Maintenance</strong></td>
                                <td>Free of charge</td>
                                <td><strong>Annual Fee</strong></td>
                                <td>Free of charge</td>
                            </tr>
                            <tr>
                                <td><strong>Dormant Account Fee</strong></td>
                                <td>Not applicable</td>
                                <td><strong>Closing the Account</strong></td>
                                <td>Free of charge</td>
                            </tr>
                            <tr>
                                <td className='table-heading' colSpan={4}>P2P (Person to Person)</td>
                            </tr>
                            <tr>
                                <td><strong>Send Money (to another MyMonty eWallet Holder)</strong></td>
                                <td>Free of charge</td>
                                <td><strong>Receive Money (from another MyMonty eWallet Holder)</strong></td>
                                <td>Free of charge</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Payments</td>
                            </tr>
                            <tr>
                                <td><strong>Pay to a Merchant by QR</strong></td>
                                <td colSpan={3}>Free of charge</td>

                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Top-up and Withdrawals</td>
                            </tr>
                            <tr>
                                <td><strong>Add Money to your Account
                                    (through our Appointed Agent)
                                </strong></td>
                                <td>Cash USD: Free of charge <br />
                                    Cash LBP: Free of charge
                                </td>
                                <td>
                                    <strong>Withdraw Money
                                        from your Account
                                        (through our Appointed Agent)
                                    </strong>
                                </td>
                                <td>Cash USD: 1 % <br />
                                    Cash LBP: 1 %
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Add Money to your Account
                                    (by using any accepted card)
                                </strong></td>
                                <td>LBP card: 5 % <br />
                                    Foreign currency card: 3 %
                                </td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Miscellaneous</td>
                            </tr>
                            <tr>
                                <td><strong>E-Statement of Account</strong></td>
                                <td colSpan={3}>Free of charge</td>
                            </tr>
                            <tr>
                                <td><strong>Physical Statement of Account</strong></td>
                                <td colSpan={3}>Local delivery: USD 5 / International delivery: USD 2 + Pass-through Cost</td>
                            </tr>
                            <tr>
                                <td><strong>SMS Notifications</strong></td>
                                <td colSpan={3}>Free of charge</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className='table-wrapper'>
                    <h2>3. LIMITS</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td className='table-heading' colSpan={4}>Account Balance</td>
                            </tr>
                            <tr>
                                <td>
                                    Account Maximum Balance
                                </td>
                                <td>
                                    <ul>
                                        <li>Your USD balance in the Account should not exceed at any time USD 3,000.</li>
                                        <li>Your LBP balance in the Account should not exceed at any time LBP 150,000,000.</li>
                                    </ul>

                                </td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>P2P (Person to Person)</td>
                            </tr>
                            <tr>
                                <td>
                                    Send Money (to another MyMonty eWallet Holder(s))
                                </td>
                                <td>
                                    Any amount as long as the balance in the Account of the Recipient does not exceed USD 3,000 and LBP 150,000,000.
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Receive Money (from another MyMonty eWallet Holder(s))
                                </td>
                                <td>
                                    Any amount as long as the balance in your Account does not exceed USD 3,000 and LBP 150,000,000.
                                </td>
                            </tr>
                            <tr>
                                <td className='table-heading' colSpan={4}>Payments</td>
                            </tr>
                            <tr>
                                <td>Pay to a Merchant by QR</td>
                                <td>Available balance in the Account.</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Top-up and Withdrawals</td>
                            </tr>
                            <tr>
                                <td><strong>Add Money to your Account (through our Appointed Agent)</strong></td>
                                <td>
                                    <ul>
                                        <li>USD- Any amount as long as your USD balance in the Account does not exceed USD 3,000.
                                        </li>
                                        <li>LBP- 15,000,000 per top-up transaction. You can make any number of top-up transactions as long as your LBP balance in the Account does not exceed LBP 150,000,000.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Add Money to your Account
                                        (by using your card)
                                    </strong>
                                </td>
                                <td>Any amount as long as the USD and LBP balances in the Account do not exceed USD 3,000 and LBP 150,000,000, respectively.</td>
                            </tr>
                            <tr>
                                <td><strong>Withdraw Money from your Account (through our Appointed Agent)</strong></td>
                                <td>
                                    <ul>
                                        <li>
                                            USD- Up to the available USD balance.
                                        </li>
                                        <li>LBP- 15,000,000 per withdrawal transaction, up to the available LBP balance.</li>
                                    </ul>
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
                                    <strong>Using a card to add money</strong>
                                </td>
                                <td>
                                    You can add money to your eWallet Account by using any accepted credit, debit or payment card regardless of the card’s currency (whether in Euro, GBP or otherwise).
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Adding money with cash / Withdrawing money in cash</strong>
                                </td>
                                <td>
                                    Our Appointed Agent for adding money with cash to your eWallet Account and withdrawing money in cash from your eWallet Account, is “Online Money Transfer SAL (OMT)”. You can add and withdraw money in cash at any OMT location in Lebanon.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Our fees</strong>
                                </td>
                                <td>
                                    All the percentages (%) stated in Section 2 above are based on transaction amount. If you come across any fees, commissions, or charges in this list that go over 0.5% for a particular transaction, just know they include the fees of our partners that we are collecting on their behalf.
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
