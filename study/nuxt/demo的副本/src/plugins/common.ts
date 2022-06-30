/*
 * @Author: zhulijun
 * @LastEditors: zhulijun
 * @Date: 2019-10-25 15:50:43
 * @LastEditTime: 2022-06-24 14:11:30
 * @Descripttion:
 */

import '@/global.less';
import { domain } from '@eros/data';

export default (ctx: any) => {
  ctx.$encrytionRequest.instance.defaults.baseURL = domain.API_JILI_AUTO;
};
