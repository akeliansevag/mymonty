import React from 'react';
import { websiteName } from '@/app/config';
import SmallBanner from '@/app/components/SmallBanner';
import FooterBanner from '@/app/components/FooterBanner';

export const metadata = {
    title: 'Business eWallet Account' + websiteName,
    description: 'Key facts & statements for your MyMonty Personal E-wallet Account in Lebanon. Understand features, limits & how to manage your digital funds. View details.'
};

const pea = () => {

    return (
        <div>
            <FooterBanner downloadURL="/KFS-Business-Wallet-Account.pdf" title="Business eWallet Account" />
            <div className='container py-10 lg:py-20 relative'>
                <p><strong>BUSINESS eWALLET ACCOUNT - KEY FACTS STATEMENT  <br /> (V.2.0 – 31 October 2025)</strong></p>

                <p className='mt-5 mb-10'>This Key Facts Statement (“<strong>KFS</strong>”) provides you with information on the key features, limits, fees and charges of the Business eWallet account offered by Monty Finance SAL to individual clients (“<strong>eWallet Account</strong>”). This KFS does not contain all the terms and conditions governing the eWallet Account and it should be read along with the  <a className='text-blue-500 hover:underline' href="/legal/customer-agreement">Business Agreement Terms</a>.</p>

                {/* ===================== 1. PRODUCT DESCRIPTION ===================== */}
                <div className='table-wrapper'>
                    <h2>1. PRODUCT DESCRIPTION</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td><strong>The Account</strong></td>
                                <td>
                                    The Account is a payment account for your business payments needs.
                                    It is not a deposit nor a savings account and does not entitle you to interest.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Account Currency</strong></td>
                                <td>
                                    The Account is a dual currency account split into two distinct balances,
                                    one in Lebanese Pounds (LBP) and one in United States Dollars (USD).
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Transactions Currency</strong></td>
                                <td>
                                    Transactions are limited to their respective currencies:
                                    LBP transactions use the LBP balance and USD transactions use the USD balance.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Eligibility</strong></td>
                                <td>
                                    To be eligible for an Account you must be a registered commercial company.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Minimum Balance</strong></td>
                                <td>
                                    No minimum balance is required to open or maintain the Account.
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
                                    Opening, Keeping and Closing the Account
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
                                <td>Free of Charge</td>
                            </tr>
                            <tr>
                                <td><strong>Dormant Account Fee</strong></td>
                                <td>Not applicable</td>
                                <td><strong>Closing the Account</strong></td>
                                <td>Free of charge</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>B2B (Business-to-Business)</td>
                            </tr>
                            <tr>
                                <td><strong>Send Money</strong> (to another Business eWallet Holder)</td>
                                <td>Free of charge</td>
                                <td><strong>Receive Money</strong> (from another Business eWallet Holder)</td>
                                <td>Free of charge</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>B2C (Business-to-Consumer)</td>
                            </tr>
                            <tr>
                                <td><strong>Send Money</strong> (to an individual MyMonty eWallet Holder)</td>
                                <td>Free of charge</td>
                                <td><strong>Receive Money</strong> (from an individual MyMonty eWallet Holder)</td>
                                <td>Not applicable</td>
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
                                <td><strong>Add Money</strong> (at MyMonty branch)</td>
                                <td>
                                    Cash USD: Free of charge<br />
                                    Cash LBP: Free of charge
                                </td>
                                <td><strong>Add Money</strong> (at MyMonty SST)</td>
                                <td>
                                    Cash USD: Free of charge<br />
                                    Cash LBP: Free of charge
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Add Money</strong> (at Appointed Agent)</td>
                                <td>
                                    Cash USD: Free of charge<br />
                                    Cash LBP: Free of charge
                                </td>
                                <td><strong>Withdraw Money</strong> (at MyMonty branch)</td>
                                <td>
                                    USD: 0.75% / Min USD 1<br />
                                    LBP: 0.75% / Min LBP 100,000
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Withdraw Money</strong> (at MyMonty SST)</td>
                                <td>
                                    USD: Free of charge<br />
                                    LBP: Free of charge
                                </td>
                                <td><strong>Withdraw Money</strong> (at Integrated ATMs)</td>
                                <td>
                                    USD: 0.75% / Min USD 1<br />
                                    LBP: 0.75% / Min LBP 100,000
                                </td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Miscellaneous</td>
                            </tr>
                            <tr>
                                <td><strong>Currency Exchange</strong></td>
                                <td>Free of charge</td>
                                <td><strong>Alfa Postpaid</strong></td>
                                <td>LBP 50,000 / USD 0.7</td>
                            </tr>
                            <tr>
                                <td><strong>Touch Postpaid</strong></td>
                                <td>LBP 50,000 / USD 0.7</td>
                                <td colSpan={2}>
                                    <strong>All other available e-services are provided with no transaction fees.</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* ===================== 3. LIMITS ===================== */}
                <div className='table-wrapper'>
                    <h2>3. LIMITS</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td className='table-heading' colSpan={4}>Account Balance</td>
                            </tr>
                            <tr>
                                <td><strong>Account Maximum Balance</strong></td>
                                <td>USD 30,000 (or equivalent)</td>
                                <td><strong>Maximum Credit Balance / Month</strong></td>
                                <td>USD 50,000 (or equivalent)</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>B2B (Business-to-Business)</td>
                            </tr>
                            <tr>
                                <td><strong>Send Money</strong></td>
                                <td colSpan={3}>
                                    Up to available balance (subject to recipient limits).
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Receive Money</strong></td>
                                <td colSpan={3}>
                                    Any amount (subject to balance and monthly limits).
                                </td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>B2C (Business-to-Consumer)</td>
                            </tr>
                            <tr>
                                <td><strong>Send Money</strong></td>
                                <td colSpan={3}>
                                    Up to available balance (subject to recipient limits).
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
                                <td className='table-heading' colSpan={4}>
                                    Top-up and Withdrawals (subject to ATM limits)
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Add Money</strong> (MyMonty branch)</td>
                                <td colSpan={3}>
                                    Per transaction: USD 30,000 / Monthly: USD 50,000
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Add Money</strong> (MyMonty SST)</td>
                                <td colSpan={3}>
                                    Per transaction: USD 3,000 / LBP 30,000,000<br />
                                    Daily: USD 50,000 / Monthly: USD 50,000
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Add Money</strong> (Appointed Agent)</td>
                                <td colSpan={3}>
                                    Per transaction: USD 3,000 / LBP 15,000,000<br />
                                    Daily: USD 9,000 / Monthly: USD 50,000
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Withdraw Money</strong> (MyMonty branch)</td>
                                <td colSpan={3}>
                                    Per transaction: USD 30,000 / Monthly: USD 50,000
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Withdraw Money</strong> (MyMonty SST)</td>
                                <td colSpan={3}>
                                    Per transaction: USD 3,000 / LBP 30,000,000<br />
                                    Daily: USD 50,000 / Monthly: USD 50,000
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Withdraw Money</strong> (Integrated ATMs)</td>
                                <td colSpan={3}>
                                    Per transaction: USD 2,000 / LBP 3,000,000<br />
                                    Daily: USD 9,000 / Monthly: USD 50,000
                                </td>
                            </tr>
                            <tr>
                                <td><strong>E-Services</strong></td>
                                <td colSpan={3}>Up to the available balance.</td>
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
                                <td><strong>Appointed Agent</strong></td>
                                <td>
                                    Online Money Transfer SAL (OMT) is our Appointed Agent for adding cash.
                                    Cash top-ups are available at any OMT location in Lebanon.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Integrated ATMs</strong></td>
                                <td>
                                    You can withdraw money from your Account at Fransabank SAL
                                    and BLC Bank SAL ATMs in Lebanon.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Our Fees</strong></td>
                                <td>
                                    All percentages stated are based on transaction amounts and may include
                                    partner fees collected on their behalf.
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
