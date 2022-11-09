import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import checker from 'vite-plugin-checker'
import { VitePWA } from 'vite-plugin-pwa'
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
    checker({ vueTsc: true }),
    VitePWA({ registerType: 'autoUpdate' }),
    StylelintPlugin({
      exclude: ['**/*.vue'],
    }),
    Components({
      dts: true,
      extensions: ['vue', 'tsx'],
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
      dirs: ['src/stores', 'src/utils'],
      imports: ['vue', 'vue-router', 'pinia'],
    }),
  ],
})
