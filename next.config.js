
module.exports = {
  reactStrictMode: true,
  future: { webpack5: true },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
  style: {
    postcss: {
      plugins: [
        require('autoprefixer'),
      ],
    },
  },
}
