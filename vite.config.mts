import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import nodecg from './vite-plugin-nodecg.mjs';
import rollupEsbuild from 'rollup-plugin-esbuild';
import rollupExternals from 'rollup-plugin-node-externals';
import commonjs from '@rollup/plugin-commonjs';
import { resolve } from 'path';

export default defineConfig({
  clearScreen: false,
  plugins: [
    react(),
    nodecg({
      server: {
        host: '192.168.3.34',
        port: 8080,
      },
      bundleName: 'pokemon',
      graphics: './src/graphics/*.tsx',
      dashboard: './src/dashboard/*.tsx',
      extension: {
        input: './src/extension/index.ts',
        plugins: [rollupEsbuild(), rollupExternals(), commonjs()],
      },
    }),
  ],
  assetsInclude: ['**/*.riv'], // rivファイルを適用させるコンフィグ
  build: {
    rollupOptions: {
      external: [
        '@prisma/client', // Prismaクライアントを外部化
        'prisma/generated/pokedex', // 独自生成クライアント
        'prisma/generated/tournament',
      ],
      output: {
        globals: {
          '@prisma/client': 'PrismaClient',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});