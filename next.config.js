module.exports = {
  images: {
    domains: ['images.prismic.io'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { ref: true },
        },
      ],
    });

    return config;
  }
};