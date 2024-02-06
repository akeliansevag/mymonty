/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiUrl: process.env.NEXT_PUBLIC_NODE_ENV === 'production'
            ? 'https://staging.mymonty.com/api'
            : 'http://127.0.0.1:8000/api',
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
}

module.exports = nextConfig
