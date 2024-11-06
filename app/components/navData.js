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
                    },
                    {
                        title: 'Top Up',
                        url: '/accounts?s=top-up',
                    },
                    {
                        title: 'Request Top Up',
                        url: '/accounts?s=top-up',
                    },
                    {
                        title: 'Cash Out',
                        url: '/accounts?s=top-up',
                    },
                    {
                        title: 'Cash Out Via ATM/BANK',
                        url: '/accounts?s=top-up',
                    },

                ]
            },
            {
                title: 'Cards',
                url: null,
                children: [
                    {
                        title: 'Physical Platinum Mastercard',
                        url: '/physical-platinum-mastercard'
                    },
                    {
                        title: 'Virtual Mastercard',
                        url: '/virtual-mastercard'
                    },
                    
                ]
            },
            {
                title: 'Transfers',
                url: '/transfers',
                children: [
                    {
                        title: 'Borderless Transfers',
                        url: '/transfers?s=borderless-transfers'
                    },

                    {
                        title: 'Send',
                        url: '/transfers?s=send'
                    },
                    {
                        title: 'Receive',
                        url: '/transfers?s=send'
                    },
                    {
                        title: 'Request',
                        url: '/transfers?s=send'
                    },
                    {
                        title: 'Recurring transfers',
                        url: '/transfers?s=recurring-transfers'
                    },
                    {
                        title: 'Streamline Transfers',
                        url: '/transfers?s=streamline-transfers'
                    },
                ]
            },
            {
                title: 'Payments',
                url: '/payments',
                children: [
                    {
                        title: 'POS',
                        url: '/payments?s=pos'
                    },
                    {
                        title: 'QR & Link',
                        url: '/payments?s=qr-and-link'
                    },
                    {
                        title: 'Online Vouchers',
                        url: '/payments?s=online-vouchers'
                    },
                    {
                        title: 'Notifications & Alerts',
                        url: '/payments?s=notifications-and-alerts'
                    },
                    {
                        title: 'Travel eSim',
                        url: '/payments?s=travel-esim'
                    },

                ]
            },
            {
                title: 'Loans',
                url: '/loans',
                children: [
                    {
                        title: 'Advance on Salary',
                        url: '/loans?s=advance-on-salary',
                    },
                    {
                        title: 'BNPL',
                        url: '/loans?s=bnpl',
                    },

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
            // {
            //     title: 'Leadership team',
            //     url: null
            // },
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