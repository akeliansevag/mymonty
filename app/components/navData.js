export const data = [
    {
        title: 'Personal',
        url: '/',
        children: [
            {
                title: 'Accounts',
                url: '/accounts',
                children: [
                    {
                        title: 'Dual Currency Wallet',
                        url: '/accounts?s=dual-currency-wallet',
                        noIndex: true,
                    },
                    {
                        title: 'Top Up',
                        url: '/accounts?s=top-up',
                        noIndex: true,
                    },
                    {
                        title: 'Request Top Up',
                        url: '/accounts?s=top-up',
                        noIndex: true,
                    },
                    {
                        title: 'Cash Out',
                        url: '/accounts?s=top-up',
                        noIndex: true,
                    },
                    {
                        title: 'Cash Out Via ATM/BANK',
                        url: '/accounts?s=top-up',
                        noIndex: true,
                    },
                    {
                        title: 'Forex',
                        url: '/accounts?s=forex',
                        noIndex: true,
                    },

                ]
            },
            {
                title: 'Cards',
                url: '/cards',
                children: [
                    {
                        title: 'Standard Virtual Card',
                        // url: '/virtual-mastercard'
                        url: '/standard-virtual-card'
                    },
                    {
                        title: 'Platinum Prepaid Card',
                        // url: '/physical-platinum-mastercard'
                        url: '/platinum-prepaid-card'
                    },
                    {
                        title: 'Platinum Credit Card',
                        url: '/platinum-credit-card'
                    },
                    {
                        title: 'World Elite Credit Card',
                        url: '/world-elite-credit-card'
                    },
                ]
            },
            {
                title: 'Transfers',
                url: '/transfers',
                children: [
                    {
                        title: 'Borderless Transfers',
                        url: '/transfers?s=borderless-transfers',
                        noIndex: true,
                    },

                    {
                        title: 'Send',
                        url: '/transfers?s=send',
                        noIndex: true,
                    },
                    {
                        title: 'Receive',
                        url: '/transfers?s=send',
                        noIndex: true,
                    },
                    {
                        title: 'Request',
                        url: '/transfers?s=send',
                        noIndex: true,
                    },
                    {
                        title: 'Recurring transfers',
                        url: '/transfers?s=recurring-transfers',
                        noIndex: true,
                    },
                    {
                        title: 'Streamline Transfers',
                        url: '/transfers?s=streamline-transfers',
                        noIndex: true,
                    },
                ]
            },
            {
                title: 'Payments',
                url: '/payments',
                children: [
                    {
                        title: 'Payments',
                        url: '/payments'
                    },
                    {
                        title: 'Donations',
                        url: '/donations'
                    },
                    {
                        title: 'eVouchers',
                        url: '/evouchers'
                    }, 
                    {
                        title: 'Touch - Alfa',
                        url: '/touch-alfa'
                    },
                    {
                        title: 'ihjoz',
                        url: '/ihjoz'
                    },

                ]
            },
            {
                title: 'Loans',
                url: '/loans',
                children: [
                    {
                        title: 'Car Loan',
                        url: '/car-loan',
                        noIndex: true,
                    },
                    // {
                    //     title: 'Advance on Salary',
                    //     url: '/loans?s=advance-on-salary',
                    //     noIndex: true,
                    // },
                    // {
                    //     title: 'BNPL',
                    //     url: '/loans?s=bnpl',
                    //     noIndex: true,
                    // },

                ]
            },
            // {
            //     title: 'Loyalty',
            //     url: '/loyalty',
            //     children: [
            //         {
            //             title: 'Cashback',
            //             url: '/loyalty?s=cashback',
            //         },
            //         {
            //             title: 'Referral',
            //             url: '/loyalty?s=referral',
            //         },
            //         {
            //             title: 'Loyalty Program',
            //             url: '/loyalty?s=loyalty-program',
            //         }
            //     ]
            // }
        ]
    },
    {
        title: 'Business',
        url: '/business',
        children: null
    },
    {
        title: 'Company',
        url: null,
        children: [

            {
                title: 'Who we are',
                url: '/who-we-are'
            },
            {
                title: 'Why MyMonty',
                url: '/why-mymonty'
            },
            {
                title: 'Careers',
                url: '/careers'
            },
            {
                title: 'Code of Conduct',
                url: '/code-of-conduct'
            },
            {
                title: 'News',
                url: '/news'
            },
            {
                title: 'Blogs',
                url: '/blogs'
            },
            {
                title: 'Contact us',
                url: '/contact-us'
            },
            {
                title: 'FAQ',
                url: '/faq/personal/onboarding'
            }

        ]
    }
];