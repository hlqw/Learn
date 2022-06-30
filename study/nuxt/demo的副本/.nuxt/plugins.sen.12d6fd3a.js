/*
 * @Author: daief
 * @LastEditors  : daief
 * @Date: 2019-08-18 15:48:55
 * @LastEditTime : 2020-01-16 13:36:02
 * @Description:
 */
import sen from '@eros/utils/lib/sen';
import Vue from 'vue';

export default function(ctx, inject) {
  ctx.$sen = sen;
  inject('sen', sen);

  ctx.app.router.afterEach(() => {
    // SPA 应用页面浏览量
    // ref: https://www.sensorsdata.cn/manual/js_sdk_spa.html#2-%E5%8D%95%E9%A1%B5%E9%9D%A2%E4%B8%AD%E7%9A%84%E9%A1%B5%E9%9D%A2%E6%B5%8F%E8%A7%88%E4%BA%8B%E4%BB%B6%E9%87%87%E9%9B%86pageview
    Vue.nextTick(() => {
      sen.quick('autoTrackSinglePage');
    });
  });
}
