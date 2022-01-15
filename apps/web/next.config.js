module.exports = {
  async redirects() {
    return [
      {
        source: "/studio",
        destination: process.env.SANITY_URL,
        permanent: true,
      },
    ];
  },
};
