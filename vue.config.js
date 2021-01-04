module.exports = {
  pages: {
    web: {
      entry: 'src/apps/web',
      template: 'public/index.html',
      filename: 'index.html',
    },
    admin: {
      entry: 'src/apps/admin',
      template: 'public/index.html',
      filename: 'admin.html',
    },
  },
};
