/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiUrl: process.env.NEXT_PUBLIC_NODE_ENV === 'production'
            ? 'https://staging.mymonty.com/api'
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
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'staging.mymonty.com',
                pathname: '/**', // Allow all paths
            },
        ],
    },

}

module.exports = nextConfig
