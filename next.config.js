/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiUrl: process.env.NEXT_PUBLIC_NODE_ENV === 'production'
            ? 'https://leb-backend.mymonty.com/api'
            : 'http://mymonty.localhost/api',
    },
    reactStrictMode: false,
    async redirects() {
        return [
            {
                source: '/faq',
                destination: '/faq/personal/onboarding',
                permanent: true, // Set to `false` if it's a temporary redirect
            },
            {
                source: '/faq/personal',
                destination: '/faq/personal/onboarding',
                permanent: true, // Set to `false` if it's a temporary redirect
            },
            {
                source: '/virtual-mastercard',
                destination: '/standard-virtual-card',
                permanent: true, // Set to `false` if it's a temporary redirect
            },
            {
                source: '/physical-platinum-mastercard',
                destination: '/platinum-prepaid-card',
                permanent: true, // Set to `false` if it's a temporary redirect
            },
            {
                source: '/key-facts-statements/blogs',
                destination: '/blogs',
                permanent: true, // Set to `false` if it's a temporary redirect
            },
            {
                source: '/legal/blogs',
                destination: '/blogs',
                permanent: true, // Set to `false` if it's a temporary redirect
            },
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'leb-backend.mymonty.com',
                pathname: '/**', // Allow all paths
            },
        ],
    },

}

module.exports = nextConfig
