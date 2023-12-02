'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import styles from './nav.module.css';

const Nav = ({ handleMenuOpen }) => {
    const handleMouseEnter = () => {
        handleMenuOpen(true);
    };

    const handleMouseLeave = () => {
        handleMenuOpen(false);
    };
    return (
        <>
            <nav className={`${styles.nav} text-[1rem] hidden md:block`}>
                <ul className={`flex gap-3`}>
                    <li onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className='has-children'>
                        <span>Personal</span>
                        <div className={`py-10 ${styles.megaMenu}`} >
                            <div className='container flex justify-between'>
                                <div className={styles.column}>
                                    <span>
                                        <Link href="/accounts">Accounts</Link>
                                    </span>
                                    <ul>
                                        <li>
                                            <Link href='/accounts'>
                                                Multicurrency Account
                                            </Link>
                                        </li>
                                        <li>Top up</li>
                                        <li>Cash in</li>
                                        <li>Cash Out</li>
                                    </ul>
                                </div>

                                <div className={styles.column}>
                                    <span>
                                        Cards
                                    </span>
                                    <ul>
                                        <li>Virtual Card</li>
                                        <li>Physical Card</li>
                                        <li>Card Controls</li>
                                        <li>Card Withdrawal</li>
                                        <li>Contactless Payment</li>
                                        <li>Tap to Pay</li>
                                    </ul>
                                </div>

                                <div className={styles.column}>
                                    <span>
                                        Transfers
                                    </span>
                                    <ul>
                                        <li>P2P Remittance</li>
                                        <li>Recurring</li>
                                        <li>Scheduled</li>
                                        <li>Send</li>
                                        <li>Request</li>
                                        <li>Top Up</li>
                                        <li>Cash out</li>
                                    </ul>
                                </div>

                                <div className={styles.column}>
                                    <span>
                                        Payments
                                    </span>
                                    <ul>
                                        <li>POS</li>
                                        <li>QR & Link</li>
                                        <li>Travel eSim</li>
                                        <li>Bill Payment</li>
                                        <li>Online Vouchers</li>
                                        <li>Tuition</li>
                                        <li>Wedding List</li>
                                        <li>Notifications & Alerts</li>
                                    </ul>
                                </div>

                                <div className={styles.column}>
                                    <span>
                                        Loans
                                    </span>
                                    <ul>
                                        <li>Advance on Salary</li>
                                        <li>BNPL</li>
                                        <li>Car Loan</li>
                                        <li>Housing Loan</li>
                                        <li>Plastic Surgery Loan</li>
                                        <li>Travel Loan</li>
                                    </ul>
                                </div>
                                <div className={styles.column}>
                                    <span>
                                        Loayalty
                                    </span>
                                    <ul>
                                        <li>Cashback</li>
                                        <li>Referral</li>
                                        <li>Loyalty program</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <span className='py-5 px-10'>Business</span>
                    </li>
                    <li>
                        <span className='py-5 px-10'>Company</span>
                    </li>
                </ul>
            </nav >
        </>
    )
}

export default Nav;
