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
    
            
            <FooterBanner downloadURL="KFS-Individual-eWallet-Account-16.7.25.pdf" title="Personal eWallet Account" />
            <div className='container py-10 lg:py-20 relative'>
                <p>
                    <strong>PERSONAL eWALLET ACCOUNT - KEY FACTS STATEMENT  <br />
                        (V.2.0 – 07 August 2025)</strong> </p>

                <p className='mt-5 mb-10'>This Key Facts Statement (“KFS”) provides you with information on the key features, limits, fees and charges of the the personal eWallet account offered by Monty Finance SAL to commercial companies (“Account”). This KFS does not contain all the terms and conditions governing the Account and it should be read along with the <a className='text-blue-500 hover:underline' href="/legal/customer-agreement">Customer Agreement Terms</a>.</p>

                <div className='table-wrapper'>
                    <h2>1. PRODUCT DESCRIPTION</h2>
                    <table className='mm-table'>
                        <tbody>
                            <tr>
                                <td className='w-1/5'>The Account</td>
                                <td><p>The Account is a payment account for your business payments needs. It is not a deposit nor a savings account and does not entitle you to interest. </p></td>
                            </tr>
                            <tr>
                                <td>Account Currency</td>
                                <td><p>The Account is a dual currency account split into two distinct balances, one designated in Lebanese Pounds (LBP) and the other in United States Dollars (USD).</p></td>
                            </tr>
                            <tr>
                                <td>Transactions Currency</td>
                                <td><p>The transactions are limited to the respective currencies: LBP transactions can only be made using the LBP balance, and USD transactions can only be made using the USD balance.</p></td>
                            </tr>
                            <tr>
                                <td>Eligibility</td>
                                <td><p>To be eligible for an Account you must be a registered commercial company.</p></td>
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
                                <td className='table-heading' colSpan={4}>Opening, Keeping and Closing the Account</td>
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
                                <td className='table-heading' colSpan={4}>B2B (Business-to-Business)</td>
                            </tr>
                            <tr>
                                <td><strong>Send Money (to another Business eWallet Holder)</strong></td>
                                <td>Free of charge</td>
                                <td><strong>Receive Money (from another Business eWallet Holder)</strong></td>
                                <td>Free of charge</td>
                            </tr>
                            <tr>
                                <td className='table-heading' colSpan={4}>B2C (Business-to-Consumer)</td>
                            </tr>
                            <tr>
                                <td><strong>Send Money (to an individual MyMonty eWallet Holder)</strong></td>
                                <td>Free of charge</td>
                                <td><strong>Receive Money (from an individual MyMonty eWallet Holder)</strong></td>
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
                                <td><strong>Add Money to your Account (at MyMonty branch)</strong></td>
                                <td>Cash in USD: Free of charge <br /> Cash in LBP: Free of charge</td>
                                <td><strong>Add Money to your Account (at MyMonty Self-Service Terminal)</strong></td>
                                <td>Cash in USD: Free of charge <br /> Cash in LBP: Free of charge</td>
                            </tr>

                            <tr>
                                <td><strong>Add Money to your Account (at our Appointed Agent locations)</strong></td>
                                <td>Cash in USD: Free of charge <br /> Cash in LBP: Free of charge</td>
                                <td><strong>Withdraw Money from your Account (at MyMonty branch)</strong></td>
                                <td> USD: Free of charge <br /> LBP: Free of charge</td>
                            </tr>

                            <tr>
                                <td><strong>Withdraw Money from your Account (at MyMonty Self-Service Terminal)</strong></td>
                                <td>USD: 0.75% / Minimum USD 1 <br /> LBP: 0.75% / Minimum LBP 100,000</td>
                                <td><strong>Withdraw Money from your Account (at Integrated ATMs)</strong></td>
                                <td>USD: 0.75% / Minimum USD 1 <br /> LBP: 0.75% / Minimum LBP 100,000</td>
                            </tr>
                            

                            <tr>
                                <td className='table-heading' colSpan={4}>Miscellaneous</td>
                            </tr>
                            <tr>
                                <td><strong>Currency Exchange</strong></td>
                                <td colSpan={3}>Free of charge</td>
                            </tr>

                            <tr>
                                <td><strong>Alfa Postpaid</strong></td>
                                <td>Transaction Fee: LBP 50,000 / USD 0.7</td>
                                <td><strong>Touch Postpaid</strong></td>
                                <td>Transaction Fee: LBP 50,000 / USD 0.7</td>
                            </tr>

                            <tr>
                                <td colSpan={4}>All other available e-services are provided with no transaction fees.</td>
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
                                        <li>Your Account balance may not exceed USD 30,000 (or its equivalent in other currencies) at any time</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Maximum Credit Balance per month 
                                </td>
                                <td>
                                    <ul>
                                        <li>The total monthly credit balance on your Account (whether from top-ups or incoming transfers) cannot exceed USD 50,000 (or its equivalent in other currencies).</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>B2B (Business-to-Business)</td>
                            </tr>
                            <tr>
                                <td>
                                    Send Money (to another Business eWallet Holder)
                                </td>
                                <td>
                                    Up to the available balance (as long as the Recipient’s account balance does not exceed the maximum account balance and monthly credit limits).
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Receive Money (from another Business eWallet Holder)
                                </td>
                                <td>
                                    Any amount (as long as the Account balance does not exceed the maximum account balance and monthly credit limits).
                                </td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>B2C (Business-to-Consumer)</td>
                            </tr>
                            <tr>
                                <td>
                                    Send Money (to an individual MyMonty eWallet Holder)
                                </td>
                                <td>
                                    Up to the available balance (as long as the Recipient’s account balance does not exceed the maximum account balance and monthly credit limits).
                                </td>
                            </tr>

                           

                            <tr>
                                <td className='table-heading' colSpan={4}>Payments</td>
                            </tr>
                            <tr>
                                <td>Pay to a Merchant by QR</td>
                                <td colspan="3">Available balance in the Account.</td>
                            </tr>

                            <tr>
                                <td className='table-heading' colSpan={4}>Top-up and Withdrawals (subject to ATM transaction limits)</td>
                            </tr>
                            <tr>
                                <td><strong>Add Money to your Account</strong> (at MyMonty branch)</td>
                                <td colspan="3">Per Transaction: USD 30,000 (or its equivalent in other currencies) / Monthly: USD 50,000 (or its equivalent in other currencies)</td>
                            </tr>
                            <tr>
                                <td><strong>Add Money to your Account</strong> (at Self-Service Terminal)</td>
                                <td>Per Transaction: USD 3,000 / LBP 30,000,000</td>
                                <td>Daily: USD 50,000 (or its equivalent in other currencies)</td>
                                <td>Monthly: USD 50,000 (or its equivalent in other currencies)</td>
                            </tr>

                            <tr>
                                <td><strong>Add Money to your Account</strong> (at our Appointed Agent locations)</td>
                                <td>Per Transaction: USD 3,000 / LBP 15,000,000</td>
                                <td>Daily: USD 9,000 (or its equivalent in other currencies)</td>
                                <td>Monthly: USD 50,000 (or its equivalent in other currencies)</td>
                            </tr>
                           
                            <tr>
                                <td><strong>Withdraw Money from your Account</strong> (at MyMonty branch)</td>
                                <td colspan="3">Per Transaction: USD 30,000 (or its equivalent in other currencies) / Monthly: USD 50,000 (or its equivalent in other currencies)</td>
                            </tr>

                            <tr>
                                <td><strong>Withdraw Money from your Account</strong> (at MyMonty Self-Service Terminal)</td>
                                <td>Per Transaction: USD 3,000 / LBP 30,000,000</td>
                                <td>Daily: USD 50,000 (or its equivalent in other currencies)</td>
                                <td>Monthly: USD 50,000 (or its equivalent in other currencies)</td>
                            </tr>

                            <tr>
                                <td><strong>Withdraw Money from your Account</strong> (at integrated ATMs)</td>
                                <td>Per Transaction: USD 2,000 / LBP 3,000,000</td>
                                <td>Daily: USD 9,000 (or its equivalent in other currencies)</td>
                                <td>Monthly: USD 50,000 (or its equivalent in other currencies)</td>
                            </tr>

                            <tr>
                                <td><strong>E-Services</strong></td>
                                <td>
                                    Up to the available balance in your account.
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
                                    <strong>Appointed Agent</strong>
                                </td>
                                <td>
                                    Our Appointed Agent for adding money with cash to your eWallet Account, is “Online Money Transfer SAL (OMT). You can add money in cash at any OMT location in Lebanon. 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Integrated ATMs</strong>
                                </td>
                                <td>
                                    You can withdraw money from your Account at any Fransabank SAL and BLC Bank SAL ATMs in Lebanon.
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
                                    We may amend this KFS or any part thereof at any time with immediate effect and without prior notice by posting a new KFS on our website <a className='text-blue-500 hover:underline' href="https://mymonty.com.lb" target='_blank'>www.mymonty.com.lb</a>  or App.
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
