
module.exports = {
  reactStrictMode: true,
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  future: {
    webpack5: false,
    },
}
