module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-preset-env')({
      // 自动添加浏览器前缀
      autoprefixer: {
        grid: 'autoplace',
        overrideBrowserslist: ['> 0.1%', 'last 2 versions', 'not dead'],
      },
      //提案 [0-4]
      stage: 3,
      // 启用 PostCSS 的嵌套规则
      features: {
        'nesting-rules': true,
      },
    }),
    // // CSS 压缩和优化
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: { removeAll: true },
          discardUnused: true,
        },
      ],
    }),
  ],
}
