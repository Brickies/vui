module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: ['transform-vue-jsx', '@babel/plugin-transform-runtime',
    ['@babel/plugin-transform-modules-commonjs', {
      'allowTopLevelThis': true
    }] // 用于设置commonjs与es6模块共存
  ],
  env: {
    'test': {
      'presets': ['@vue/app'],
      'plugins': ['transform-vue-jsx', 'istanbul']
    }
  }
}
