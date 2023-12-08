/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiUrl: process.env.NEXT_PUBLIC_NODE_ENV === 'production'
          ? 'https://staging.mymonty.com/api'
          : 'http://127.0.0.1:8000/api',
    },
}

module.exports = nextConfig
