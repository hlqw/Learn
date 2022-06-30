/*
 * @Author: daief
 * @LastEditors: zhulijun
 * @Date: 2019-07-26 09:42:01
 * @Description:
 */
import NuxtConfiguration from '@nuxt/config';

const config: NuxtConfiguration = {
  srcDir: './src',
  /*
   * Headers of the page
   * @ref: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: '\u200E', // 因为有马甲包，默认 title 就置空好了
    meta: [
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no, viewport-fit=cover',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/global.less',
    '~/static/reset.css',
    '~/static/base.less',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/common.ts',
],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@eros/nuxt-config',
      {
        projectName: 'eros-puyu',
      },
    ],
  ],
  server: {
    host: '0.0.0.0',
  },
  /*
   * Build configuration
   * 被 @eros/nuxt-config 覆盖，请使用 erosBuild
   */
  build: {
    // loaders:[
    //  {
    //   test:/\.(png|jge?g|gif|svg)$/,
    //   loader:"url-loader",
    //   query:{
    //     limit:10000,
    //     name:'img/[name].[hash]'
    //   }
    // },

    // ]
  },
  /**
   * 与 build 选项相同
   */
  erosBuild: {
    postcss: {
      plugins: {
        'postcss-pxtorem': {
          selectorBlackList: ['van-', 'axew-toast-', 'eros-', 'ignore-p2rem'],
        },
      },
    },
  },
};

export default config;
