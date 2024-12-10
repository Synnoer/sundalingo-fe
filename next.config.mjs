/** @type {import('next').NextConfig} */
const nextConfig = {};

export async function redirects() {
    return [
        {
            source: '/',
            destination: '/',
            permanent: true,
        },
    ];
}

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// module.exports = {
//   images: {
//     domains: ['codepro-api-stg.inversia-team.com'],
//   },
//   async redirects() {
//     return [
//       {
//         source: '/',
//         destination: '/dashboard',
//         permanent: true,
//       },
//     ];
//   },
// };

// export default nextConfig;
