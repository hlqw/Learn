/*
 * @Author: daief
 * @LastEditors  : lijun.zhu@huijie-inc.com
 * @Date: 2019-08-15 15:14:11
 * @Description:
 */
import { EncrytionRequest, getProp } from '@eros/utils';
import toast from '@axew/toast';
import '@axew/toast/dist/index.css';
import Logger from '@eros/logger';
import { domain } from '@eros/data';

function warning(options = {}) {
  if (/huizhifintech\.com/gi.test(options.url || '')) {
    // tslint:disable-next-line: no-console
    console.error(
      `
[ Eros/OSS ] 警告：请勿再使用 [huizhifintech.com] 的相关配置，请进行替换！
后续本模块内默认 API 地址将更新至铭迈。

`,
    );
  }
}

/**
 * 通过 `loadingToast`、`msgToast` 分别控制 loading 和 message toast，
 * 符合如下类型描述 `boolean | IOptions`
 * ```ts
 * import { IOptions } from '@axew/toast'
 * type I = boolean | IOptions  // 参数类型
 * ```
 * 默认行为：
 * http status 非成功码时（如 40x、50x），提示 404 & `哎呀，服务器繁忙..`
 * http status 成功（如 20x）：
 *    业务 code 非成功时，提示接口 message or `系统繁忙，请稍后重试`
 *    业务 code 成功时，不提示
 * @param {*} ctx
 * @param {*} inject
 */
export default function(ctx, inject) {
  const request = new EncrytionRequest();

  // 内置微服务域名的配置
  // 如有扩展在项目复写如下配置
  request.instance.defaults.baseURL = domain.API_JILI_AUTO;

  const handleConfigStart = config => {
    const { loadingToast = true } = config;
    if (loadingToast) {
      config.loadingToast = toast({
        loading: true,
        timeout: true,
        ...loadingToast,
      });
      config.loadingToast.promise.catch(() => void 0);
    }
    return config;
  };

  const handleConfigEnd = (config, response) => {
    const { loadingToast, msgToast = true } = config || {};
    if (loadingToast && loadingToast.cancel) {
      loadingToast.cancel();
    }

    if (!response) {
      return;
    }

    const { code, message } = getProp(() => response.data, {});
    const succCode = ['1', '000000'];
    if (succCode.includes(code)) {
      return Promise.resolve(response);
    }

    if (msgToast) {
      toast({
        text: message || '系统繁忙，请稍后重试',
        ...msgToast,
      });
    }
    return Promise.reject(response);
  };

  request.instance.interceptors.request.use(
    config => {
      warning(config);
      return handleConfigStart(config);
    },
    error => {
      Logger.Error('Error at Request', error);
      handleConfigEnd(error.config);
      return Promise.reject(error);
    },
  );

  request.instance.interceptors.response.use(
    response => {
      return handleConfigEnd(response.config, response);
    },
    error => {
      Logger.Error('Error at Response', error);
      // 此处不处理 response
      handleConfigEnd(error.config);
      const status = getProp(() => error.response.status);
      if (status === 404) {
        toast('您请求的地址不存在');
      } else {
        toast(`哎呀，服务器繁忙(${status || 0})，请稍后再试~`);
      }
      return Promise.reject(error);
    },
  );

  ctx.$encrytionRequest = request;
  inject('encrytionRequest', request);
}
