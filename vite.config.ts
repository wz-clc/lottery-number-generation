import path from 'path'
import { defineConfig } from 'vite'

// 基本插件
import vue from '@vitejs/plugin-vue'
import { default as eslint } from 'vite-plugin-eslint' //代码校验工具

// 开发插件
import AutoImport from 'unplugin-auto-import/vite' // 按需自动导入 API
import Components from 'unplugin-vue-components/vite' // 按需组件自动导入
import Icons from 'unplugin-icons/vite' // 备注：字体图标网址：https://icones.js.org/
import IconResolver from 'unplugin-icons/resolver' // 解析器模块
// 打包插件
// import viteCompression from 'vite-plugin-compression' // 静态资源进行 Gzip 压缩
import { createHtmlPlugin } from 'vite-plugin-html' // 管理和配置HTML文件

const currentPath = (setPath: string) => {
  return path.join(__dirname, setPath)
}

export default defineConfig({
  root: './', // 本项目index.html的位置在根目录下
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  preview: {
    host: '0.0.0.0',
    port: 4000,
  },
  resolve: {
    alias: {
      '@': currentPath('./src'),
    },
  },
  plugins: [
    vue(),
    eslint({
      cache: false,
      fix: true,
      include: ['src/**/*.@(js|jsx|ts|tsx|vue)'],
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', 'pinia'],
      resolvers: [],
      eslintrc: {
        enabled: true,
        filepath: currentPath('./.eslintrc-auto-import.json'),
        globalsPropValue: true,
      },
      dts: currentPath('./src/types/auto-imports.d.ts'),
    }),
    Components({
      resolvers: [IconResolver()],
      dts: currentPath('./src/types/components.d.ts'),
    }),
    Icons({
      // scale: 1, // 缩放
      compiler: 'vue3',
      autoInstall: true,
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: '彩票号码生成器',
          injectScript: '',
        },
        tags: [
          {
            tag: 'link',
            injectTo: 'head-prepend',
            attrs: {
              rel: 'icon',
              type: 'image/svg+xml',
              href: '/vite.svg',
            },
          },
        ],
      },
    }),
    // {
    //   ...viteCompression({
    //     threshold: 51200, // 对小于50KB的文件不进行gzip压缩
    //     algorithm: 'gzip',
    //     ext: '.gz',
    //   }),
    //   apply: 'build',
    // },
  ],
  // build 配置文档：https://cn.vitejs.dev/config/build-options.html
  build: {
    outDir: 'dist',
    minify: 'terser', //当设置为 'terser' 时必须先安装 Terser。
    rollupOptions: {
      output: {
        // 程序入口文件位置
        entryFileNames: 'entry/index/[name]-[hash].js',
        // 静态资源文件位置
        assetFileNames: 'entry/assets/[ext]/[name]-[hash].[ext]',
        // 分包文件位置
        chunkFileNames: 'entry/pages/[name]-[hash].js',
        // 手动配置chunk
        manualChunks: {
          // vendor-chunk:该分包通常包含第三方库或框架的代码,这些库通常比较大且不经常变化，将它们单独打包成 vendor 分包可以利用浏览器的缓存机制，减少重复加载
          'vendor-chunk': ['vue', 'vue-router'],
          // shared-chunk:该分包用于存放应用程序中多个模块之间共享的代码，如工具函数、共享的组件、样式等。
          'shared-chunk': ['@vueuse/core'],
        },
      },
    },
  },
})
