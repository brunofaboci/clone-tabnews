/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://zeloo.app.br/",
        permanent: true,
      },
    ];
  },
};
