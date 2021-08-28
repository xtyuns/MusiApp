import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
const baseConfig= defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});

// development
const devConfig = defineConfig({
  server: {
    host: '0.0.0.0',
    port: 80
  }
});

// production
const proConfig = defineConfig({
  build: {
    outDir: 'gh-pages'
  },
  base: '/MusicApp/'
});

const DEV = 'development'
const PRO = 'production'
export default defineConfig(({ command, mode }) => {
  if(mode === DEV) return {...baseConfig, ...devConfig}
  if(mode === PRO) return {...baseConfig, ...proConfig}
  return { ...baseConfig}
})