import styleguide from '@vercel/style-guide/prettier'
// const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  plugins: ['prettier-plugin-tailwindcss'],
};
