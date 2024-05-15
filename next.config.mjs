
const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        assetPrefix: isGitHubPages ? 'https://<Account-name>/<Repository-name>' : '',
        output: "export",
        reactStrictMode: true,
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;

