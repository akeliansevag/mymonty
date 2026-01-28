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
                        title: 'Multi-Currency Wallet',
                        url: '/accounts/multi-currency-wallet'
                    },
                    {
                        title: 'Top Up',
                        url: '/accounts/top-up'
                    },
                    {
                        title: 'Withdraw',
                        url: '/accounts/withdraw'
                    },
                    {
                        title: 'Forex Exchange',
                        url: '/accounts/forex-exchange'
                    },
                ]
            },
            {
                title: 'Prepaid Cards',
                url: '/cards',
                children: [
                    {
                        title: 'Standard Virtual Card',
                        url: '/standard-virtual-card'
                    },
                    {
                        title: 'Standard Prepaid Card',
                        url: '/standard-prepaid-card'
                    },
                    {
                        title: 'Gold Prepaid Card',
                        url: '/gold-prepaid-card'
                    },
                    {
                        title: 'Platinum Prepaid Card',
                        url: '/platinum-prepaid-card'
                    },
                    {
                        title: 'World Elite Prepaid Card',
                        url: '/world-elite-prepaid-card'
                    },
                ]
            },
            {
                title: 'Credit Cards',
                url: '/cards',
                children: [
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
                        title: 'Recurring Transfers',
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
                url: null,
                children: [
                    {
                        title: 'Car Loan',
                        url: '/car-loan',
                        noIndex: true,
                    },
                    {
                        title: 'Salary Advance',
                        url: '/loans/salary-advance',
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
        title: 'Under < 18',
        url: '/teens/cards',
        children: null
    },
    {
        title: 'Business',
        url: '/business',
        children: [
            {
                title: 'Business Wallet',
                url: '/business/business-wallet'
            },
            {
                title: 'Salary Domiciliation',
                url: '/business/salary-domiciliation',
                children: [
                    {
                        title: 'Salary Advance',
                        url: '/business/salary-advance',
                        noIndex: true,
                    },
                ]
            },
        ]
    },
    
    {
        title: 'Company',
        url: null,
        children: [
            {
                title: 'About MyMonty',
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
                        title: 'FAQ',
                        url: '/faq/personal/onboarding'
                    },
                    {
                        title: 'Contact Us',
                        url: '/contact-us'
                    },
                ]
            },
            {
                title: 'Media',
                url: null,
                children: [
                    {
                        title: 'News',
                        url: '/news'
                    },
                    {
                        title: 'Blogs',
                        url: '/blogs'
                    },
                ]
            },
            {
                title: 'Working at MyMonty',
                url: null,
                children: [
                    {
                        title: 'Careers',
                        url: '/careers'
                    },
                    {
                        title: 'Code of Conduct',
                        url: '/code-of-conduct'
                    },
                ]
            },
        ]
    }
];