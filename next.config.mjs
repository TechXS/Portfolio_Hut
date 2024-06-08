
const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
};

export default nextConfig;

