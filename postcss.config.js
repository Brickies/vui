// https://github.com/michael-ciniawsky/postcss-load-config
const saladConfig = require('./salad.config.json')

// console.log(saladConfig);

module.exports = {
  plugins: {
    'postcss-import': {},
    'saladcss-bem': saladConfig.features.bem,
    'postcss-url': {},
    'postcss-mixins': {},
    'precss': {},
    // to edit target browsers: use "browserslist" field in package.json
    'autoprefixer': {}
  }
}
