import { defineConfig } from 'vite';
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import handlebars from 'vite-plugin-handlebars';
import vitePluginAutoGenerationWebp from './plugins/vite-plugin-auto-generation-webp';
import vitePluginAutoAddComponents from './plugins/vite-plugin-auto-add-components';
import vitePluginHtmlBeautify from './plugins/vite-plugin-html-beautify';
import data from './src/data/main.json';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/softline/' : '/',
  root: path.resolve(process.cwd(), 'src'),
  build: {
    outDir: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'node_modules')
    },
    extensions: ['.js', '.json', '.scss', '.html', '.hbs']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/_config.scss";
          @import "@/styles/_mixins.scss";
        `
      }
    }
  },
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/sprites')],
      symbolId: '[name]',
      inject: 'body-first',
      customDomId: 'sprite-svg'
    }),
    handlebars({
      runtimeOptions: {
        data
      },
      partialDirectory: [
        path.resolve(__dirname, 'src/components'),
        path.resolve(__dirname, 'src/layouts'),
      ],
      helpers: {
        include: (partial) => {
          return `${partial}/${partial}`;
        }
      }
    }),
    vitePluginAutoGenerationWebp({
      src: [
        './src/images/**/*.{png,jpg,jpeg}',
        './public/images/**/*.{png,jpg,jpeg}'
      ]
    }),
    vitePluginAutoAddComponents(),
    vitePluginHtmlBeautify({
      indent_size: 2
    })
  ]
});