import React from 'react';
import { websiteName } from '@/app/config';
import SmallBanner from '@/app/components/SmallBanner';
import FooterBanner from '@/app/components/FooterBanner';

export const metadata = {
    title: 'Personal eWallet Account' + websiteName,
    description: 'Key facts & statements for your MyMonty Personal E-wallet Account in Lebanon. Understand features, limits & how to manage your digital funds. View details.'
};

const pea = () => {

    return (
        <div>
            <FooterBanner downloadURL="/KFS-Individual-eWallet-Account-30.10.25.pdf" title="Personal eWallet Account" />
            <div className='container py-10 lg:py-20 relative'>
                <p><strong>PERSONAL eWALLET ACCOUNT - KEY FACTS STATEMENT  <br /> (V.2.0 – 12 September 2025)</strong></p>

                <p className='mt-5 mb-10'>This Key Facts Statement (“<strong>KFS</strong>”) provides you with information on the key features, limits, fees and charges of the personal eWallet account offered by Monty Finance SAL to individual clients (“<strong>eWallet Account</strong>”). This KFS does not contain all the terms and conditions governing the eWallet Account and it should be read along with the  <a className='text-blue-500 hover:underline' href="/legal/customer-agreement">Customer Agreement Terms</a>.</p>

                <div className='table-wrapper'>
                    <h2>1. PRODUCT DESCRIPTION</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td><strong>Payment Account</strong></td>
                                <td>
                                    <p>
                                        The eWallet Account is a payment account for your payments needs.
                                        It is not a deposit nor a savings account and does not entitle you to interest.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Account Currency</strong></td>
                                <td>
                                    <p>
                                        The Account is a multi-currency account split into three distinct balances,
                                        one designated in Lebanese Pounds (LBP), one in United States Dollars (USD),
                                        and one in Euros (EUR).
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Transactions Currency</strong></td>
                                <td>
                                    <p>
                                        The transactions are limited to the respective currencies.
                                        You can only use the LBP balance to make LBP transactions,
                                        the USD balance to make USD transactions and the Euros balance
                                        to make Euro transactions.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Currency Conversion</strong></td>
                                <td>
                                    <p>
                                        You can convert between LBP and USD, and between USD and Euros
                                        to be able to make transactions on your Account. This service
                                        is provided to you through our App by Srour Company for Exchange SARL,
                                        an exchange institution regulated by the CBL.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Eligibility</strong></td>
                                <td>
                                    <p>
                                        To be eligible for an eWallet Account you must be a Lebanese Citizen
                                        or a holder of a valid Lebanese residency permit and be aged 18 years or above.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Minimum Balance</strong></td>
                                <td>
                                    <p>No minimum balance is required to open or maintain the Account.</p>
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
                                    Opening, Keeping and Closing the eWallet Account
                                </td>
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
                                <td><strong>Add Money</strong> (through MyMonty branch)</td>
                                <td>Free of charge</td>
                                <td><strong>Withdraw Money</strong> (through MyMonty branch)</td>
                                <td>Free of charge</td>
                            </tr>
                            <tr>
                                <td><strong>Add Money</strong> (through MyMonty Self-Service Terminal (SST))</td>
                                <td>Free of charge</td>
                                <td><strong>Withdraw Money</strong> (through MyMonty Self-Service Terminal (SST))</td>
                                <td>Free of charge</td>
                            </tr>
                            <tr>
                                <td><strong>Add Money to your Account</strong> (through our Appointed Agent)</td>
                                <td>Cash in USD: Free of charge <br /> Cash in LBP: Free of charge</td>
                                <td><strong>Withdraw Money</strong> (through our Appointed Agent)</td>
                                <td>Cash USD: 1.5% <br /> Cash LBP: 1.5%</td>
                            </tr>
                            <tr>
                                <td><strong>Add Money to your Account</strong> (through our integrated ATMs)</td>
                                <td>Cash in USD: Free of charge <br /> Cash in LBP: Free of charge</td>
                                <td><strong>Withdraw Money</strong> (through our integrated ATMs)</td>
                                <td>Cash USD: 0.75% / Minimum USD 1 <br /> Cash LBP: 0.75% / Minimum LBP 100,000</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <strong>Add Money to your Account</strong> (by using your local or international card)
                                </td>
                                <td colSpan={2}>
                                    LBP card: 3% <br /> Foreign currency card: 3%
                                </td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Miscellaneous</td>
                            </tr>
                            <tr>
                                <td><strong>SMS Notifications</strong></td>
                                <td colSpan={3}>Free of charge</td>
                            </tr>
                            <tr>
                                <td><strong>Touch Postpaid</strong></td>
                                <td>Transaction Fee: LBP 50,000 / USD 0.7</td>
                                <td><strong>Alfa Postpaid</strong></td>
                                <td>Transaction Fee: LBP 50,000 / USD 0.7</td>
                            </tr>
                            <tr>
                                <td><strong>IHJOZ</strong></td>
                                <td>Transaction Fee: 1% of the transaction amount</td>
                                <td colSpan={2}>
                                    <strong>All other available e-services are provided with no transaction fees.</strong>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3}><strong>Currency Exchange</strong></td>
                                <td>Free of charge</td>
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
                                <td><strong>Maximum Balance at any one time</strong></td>
                                <td colSpan={3}>
                                    Your account balance may not exceed USD 3,000 or its equivalent
                                    in other currencies at any time.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Maximum Credit Balance per month</strong></td>
                                <td colSpan={3}>
                                    The total monthly credit balance on your account cannot exceed
                                    USD 9,999 or its equivalent in other currencies.
                                </td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>P2P (Person to Person)</td>
                            </tr>
                            <tr>
                                <td><strong>Send Money</strong> (to another MyMonty eWallet Holder(s))</td>
                                <td colSpan={3}>
                                    Up to the available balance (subject to balance and monthly limits).
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Receive Money</strong> (from another MyMonty eWallet Holder(s))</td>
                                <td colSpan={3}>
                                    Any amount (subject to balance and monthly limits).
                                </td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Payments</td>
                            </tr>
                            <tr>
                                <td><strong>Pay to a Merchant by QR</strong></td>
                                <td colSpan={3}>Available balance in the Account.</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Top-up and Withdrawals</td>
                            </tr>
                            <tr>
                                <td><strong>Add Money to your Account</strong> (through MyMonty branch)</td>
                                <td colSpan={3}>Any amount within limits.</td>
                            </tr>
                            <tr>
                                <td><strong>Add Money to your Account</strong> (through MyMonty SST)</td>
                                <td colSpan={3}>
                                    Any amount within limits. <br />
                                    *Limit of LBP 30,000,000 per top-up transaction.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Add Money to your Account</strong> (through our Appointed Agent)</td>
                                <td colSpan={3}>
                                    Any amount within limits. <br />
                                    *Limit of LBP 15,000,000 per top-up transaction.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Add Money to your Account</strong> (through our integrated ATMs)</td>
                                <td colSpan={3}>
                                    Any amount within limits. <br />
                                    *Subject to ATM transaction limit.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Add Money to your Account</strong> (by using your local or international card)</td>
                                <td colSpan={3}>Any amount within limits.</td>
                            </tr>
                            <tr>
                                <td><strong>Withdraw Money from your Account</strong> (through MyMonty Branch)</td>
                                <td colSpan={3}>Up to the available balance.</td>
                            </tr>
                            <tr>
                                <td><strong>Withdraw Money from your Account</strong> (through MyMonty SST)</td>
                                <td colSpan={3}>
                                    * USD 3,000 max per transaction <br />
                                    * LBP 30,000,000 max per transaction
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Withdraw Money from your Account</strong> (through our Appointed Agent)</td>
                                <td colSpan={3}>
                                    Up to the available balance. <br />
                                    *Limit of LBP 15,000,000 per transaction.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Withdraw Money from your Account</strong> (through our integrated ATMs)</td>
                                <td colSpan={3}>
                                    * USD 2,000 max per transaction <br />
                                    * LBP 3,000,000 max per transaction
                                </td>
                            </tr>
                            <tr>
                                <td><strong>E-Services</strong></td>
                                <td colSpan={3}>Up to the available balance.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='table-wrapper'>
                    <h2>4. USEFUL INFORMATION</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td><strong>Using a card to add money</strong></td>
                                <td>
                                    You can add money using any accepted debit, credit or payment card,
                                    regardless of the card’s currency.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Appointed Agent</strong></td>
                                <td>
                                    Online Money Transfer SAL (OMT) is our Appointed Agent.
                                    You can add and withdraw cash at any OMT location in Lebanon.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Integrated ATMs</strong></td>
                                <td>
                                    You can perform cardless cash withdrawals and deposits at any
                                    Fransabank SAL ATM in Lebanon.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Our fees</strong></td>
                                <td>
                                    All percentages are based on transaction amounts and may include
                                    partner fees collected on their behalf.
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
