/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
    return [
      {
        source: '/discord',
		  destination: 'https://discord.gg/xRtP4gf7',
		  permanent: false,
        basePath: false
      },
    ]
  },
	swcMinify: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
}

module.exports = nextConfig
