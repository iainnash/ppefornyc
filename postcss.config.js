const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const postcssPurgecss = require('@fullhuman/postcss-purgecss');

const purgecss = postcssPurgecss({
  content: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
});

module.exports = {
  plugins: [
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : [],
    tailwindcss,
    autoprefixer,
  ],
};
