/** @type {import('next').NextConfig} */
module.exports = {
    async redirects() {
      return [
        {
          source: '/zb_users/:path*',
          destination: '/',
          permanent: true,
        }
      ]
    },
  }
  