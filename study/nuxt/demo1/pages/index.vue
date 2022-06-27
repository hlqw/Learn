<template>
  <div class="container">
    <!-- <div > -->
      <!-- <NuxtLogo /> -->
      <p class="loan"><nuxt-link :to="{name:'loan-order'}" >借款订单页</nuxt-link></p>
      <p class="job"><van-icon name="good-job" size="80" @click="toLoan" /></p>
      <h1 class="title">
        <van-icon name="wap-home" />
     这是主页
      </h1>

    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods:{
    toLoan(){
      this.$router.push({path:'/loan-order'})
    }
  }
}
</script>

<style lang="less" scoped >
 .container{
  // display: flex;
  margin: 0 auto;
  width: 300px;
  height: 300px;
  background-color: gray;
  transform: translateY(200px);
  box-shadow:2px 2px 10px gray ;
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
    transform: translateY(50px);
  }
 }
</style>
