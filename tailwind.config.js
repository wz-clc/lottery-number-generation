/** @type {import('tailwindcss').Config} */

export default {
  corePlugins: {
    preflight: true, // 启用 tailwind 默认reset样式表
  },
  content: [
    './index.html',
    './app.vue',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{js,vue,ts}',
    './layout/**/*.vue',
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      maxWidth: {
        viewport: `var(--app-max-viewport)`,
      },
      minWidth: {
        viewport: `var(--app-min-viewport)`,
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: ['retro', 'night'],
    logs: false,
  },
}

