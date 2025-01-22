import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'upload.wikimedia.org',
      'avatars.githubusercontent.com',
      'logoeps.com',
      // Add any other domains you need to allow
    ],
    unoptimized : true,
  },
};

export default nextConfig;
