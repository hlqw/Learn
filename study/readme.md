# Vuex中的 mudule
1. 当一个项目规模变大之后，单独一个store对象会变得庞大臃肿，通过模块方式分开来便于维护
2. 按之前规则单独编译子模块，然后在主文件中通过mudules选项组织起来 const store = createcreateStore({
    modules:{A:moduleA,B:moduleB}
})
3. 模块的方式可以拆分代码，但是缺点也很明显，使用起来比较繁琐，容易出错，而且类型系统支持很差，不能给我们带来帮助，pinia 显然在这方面有了很大进步

# Pinia


# 怎么实现路由懒加载？
1. 路由按需引入 
将 import details from './Details' 换成 const details = ()=> import ('./Details')

必要性：当打包构建应用时，JavaScript包会变得非常大，影响页面加载。利用路由懒加载能把不同路由对的的组件分割成不同模块，当路由被访问时再加载，更加高效。 路由中不能使用异步组件。

# ref 和 reactive 的异同
1. 概念：ref接收内部值返回Ref对象，reactive返回响应式代理对象
2. 使用场景； ref处理单值的响应式，reactive处理对象类型的的数值响应式
3. 异同：两者都是构造响应式数据，但是ref主要处理原始值问题
4. ref在js中使用要加上.value 才能访问，但是在试图中就自动脱ref，不用加.value访问。
5. 原理：reactive内部使用Proxy代理传入对象并拦截该对象各种操作，从而实现响应式。ref内部封装了一个RefImpl类，并设置get value/set value，拦截用户对数值的访问，从而实现响应式。

# watch 和 watchEffect 异同
1. watchEffect立即执行一个函数，然后被动的追踪它的依赖，这些以来改变时重新执行该函数。
2. watch侦测一个或多个响应式数据源并在数据源变化时调用一个回调函数
3. 使用场景，我们不关心 响应式数据前后变化的值，只需拿这些数据做一些事，我们就可以使用watchEffect。
watch可以控制的更精确，还可以获取数据变化前后的值，同时可以指定getter函数。
4. watchEffect在使用时会立即执行一次，watch默认情况下不会执行，除非设置immediate。
watchEffect(fn)相当于 watch(fn,fn,{immediate:true})

# SPA 、SSR 的区别？
1. SPA即单页应用。一般也称为客户端渲染，简称CSR。SSR即服务端渲染。
2. SPA应用只会首次请求html文件，后续只需请求Json数据即可，因此用户体验更好，节约流量，服务端压力比较小，但是首屏加载的时间会变长，而且SEO也不好。为了解决以上问题，就有了SSR方案。由于HTML在服务器一次性生成出来，首屏加载快。搜索引擎可以很方便的抓取页面信息。但同时SSR方法也会有性能，开发受限等问题。
3. 但并不是只有这一种方案，比如对一些不常变化的页面，SSR反而浪费资源，我们可以考虑预渲染方案和nuxt/js


# vue-loader
1. vue-loader是处理单文件（SFC）的webpack loader
2. 因为有了vue-loader，我们就可以在项目中编写SFC格式的Vue组件，我们可以把代码分割成<template>、<script>
、<style>。代码会异常清晰，

# 自定义指令

# v-once
1. 仅渲染元素和组件一次，并且跳过未来更新。
2. 使用场景：如果我们有一些元素或组件在初始化渲染之后就不需要改变，这种情况就需要 v-once。哪怕数据发生变化，vue也会跳过更新，是一种性能优化手段。
3. vue3.2之后，又增加了v-memo指令，可以有条件的缓存部分模版并控制它们的更新，可以说控制力更强。
4. 编译器发现元素上有v-once时，就将首次计算结果存入缓存对象，组件在此渲染时从缓存对象中获取。

# 你是怎么处理vue项目中的报错的？
1. 区分错误类型，错误类型分为 ”接口异常“ 和 “代码逻辑异常” 
2. 根据不同的类型错误做响应的处理。 “接口异常“是我们前端请求后端接口时发生的错误，可能是请求失败，也可能是请求获取了服务器响应，但是返回的是错误状态。以Axios为例，这类异常我们可以对Axios进行封装，在拦截器中统一处理整个应用中请求的错误。“代码逻辑错误”是我们前端代码中存在逻辑中的错误造成的异常，我们可以使用全局错误处理函数app.config.app.config.errorHandler收集错误。
3. 收集到错误之后，需要统一处理这些异常。如果是请求错误：需要上报接口信息，参数，状态码等；如果是前端逻辑错误，获取错误名称和详情即可。



# npm run xxx 这过程中发生了什么？
1. 先去package.json 中寻找 script 的xxx命令，然后执行 xxx命令. 
例如： npm run serve === vue-cli-service serve 
2. 为什么不用 vue-cli-service serve 执行？
- 一是 为了方便，简短
- 二是 因为不存在 vue-cli-service 这个命令，会报错。
3. 为什么 npm run xxx 不会报错呢？
- 在安装依赖时，例如 npm i @vue/cli service 时，就会在 node_modules/.bin 目录创建好vue-vli-servive为名的几个可执行文件了。
- npm run xxx 时 npm会去./node_modules/.bin 找到几个vue-vli-service文件来执行。 相当于执行了 
./node_modules/.bin/vue-cli-service server(最后的serve作为参数传入)
4. .bin目录下的文件表示软连接，那么bin下面这些软连接文件是哪里来的呢？它又怎么知道软连接执行哪里的呢？
- 我们可以在新建的项目中搜索vue-cli-service ，可以在package-lock.json 中看到:
  "vue-cli-service":"bin/vue-cli-service.js".当我们在npm i 整个新建的项目时，npm 将
  "bin/vue-cli-service.js" 作为 bin的 声明了。
- 所以在 npm install 时，npm读到该配置了，就将该文件软连接到 node_modules/.bin下。而且npm还会自动将
   node_modules/.bin 加入 $PATH,这样就可以直接作为命令运行程序了。


# moment 时间格式化
    import moment from 'moment';
    let m1 =moment()
    console.log(moment(m1).format('YYYY.MM.DD HH:mm:ss')); //2022.07.14 10:51:36

# HTML语义化
1. 让人更容易读懂
2. 