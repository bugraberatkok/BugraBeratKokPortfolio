/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 90 keeps text in project screenshots sharp; 75 is the default for everything else.
    qualities: [75, 90],
  },
};

export default nextConfig;
