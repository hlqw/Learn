<!--
 * @Author: daief
 * @LastEditors: zhulijun
 * @Date: 2019-08-15 14:20:52
 * @Description:
 -->
<template>
  <div class="container">
    <!-- <NuxtLogo /> -->
    <p class="loan">
      <nuxt-link :to="{name:'loan-order'}" @click="toLoan">
        借款订单页
      </nuxt-link>
    </p>
    <h1 class="title">
      这是主页
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {
// 路由跳转
  toLoan() {
    this.$router.push({ path: '/loan-order' });
  }
}
</script>
<style lang="less" scoped >
 .container{
  // display: flex;
  margin: 0 auto;
  width: 300px;
  height: 300px;
  background-color: rgb(125, 214, 231);
  transform: translateY(200px);
  box-shadow:2px 2px 10px rgb(4, 130, 155) ;
  .loan{
    transform: translateX(75px);
    font-size: 30px;
    color: blue;
  }
  .job{
     transform: translateX(100px);
  }
  .title{
    font-size: 50px;
     transform: translateY(75px);
    text-align: center;
  }
 }
</style>
