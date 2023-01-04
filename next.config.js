module.exports = {
  // basePath:'',
  reactStrictMode: false,
  distDir: 'build',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/themusical': { page: '/themusical' },
      './songs' : {page: '/songs'}
    }
   }
  // , webpack(config) {
  //   delete config.resolve.alias.url;
  //   return config;
  // }
}