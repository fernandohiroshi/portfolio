import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'imgix.cosmicjs.com' }],
  },
}

export default nextConfig
