import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import StylelintPlugin from 'vite-plugin-stylelint'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    eslint(),
    vueJsx(),
    StylelintPlugin({
      exclude: ['**/*.vue'],
    }),
    Components({
      dts: true,
      types: [
        {
          from: 'vue',
          names: ['component'],
        },
      ],
      dirs: ['src/components', 'src/layouts'],
    }),
    AutoImport({
      eslintrc: {
        enabled: true,
      },
      dts: true,
      imports: ['vue', 'vue-router', 'pinia'],
    }),
  ],
})
