/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/discord",
                destination: "https://discord.gg/CMdnTqeKWD",
                permanent: false,
                basePath: false,
            },
            {
                source: "/privacy",
                destination: "https://techoptimum.notion.site/Tech-Optimum-Privacy-Policy-6bdd940503494d458223e926381175f1?pvs=4",
                permanent: false,
                basePath: false,
            },
            {
                source: "/sponsorship",
                destination: "/documents/sponsorship-prospectus.pdf",
                permanent: false,
                basePath: false,
            },
            {
                source: "/volunteer-benefits",
                destination: "https://techoptimum.notion.site/Volunteer-Benefits-at-Tech-Optimum-18b3263dda344832a8df1687df92a8f4",
                permanent: false,
                basePath: false,
            }
        ];
    },
    async rewrites() {
        return [
            {
                source: "/sitemap.xml",
                destination: "/api/sitemap",
            },
        ]
    },
    swcMinify: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

module.exports = nextConfig;
