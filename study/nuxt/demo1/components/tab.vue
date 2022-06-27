<template>
    <div class="tab">
      <div class="blank"></div>
    <div class="title">
    <div class="img" @click="back"></div>
    <p v-if="routename === 'loan-order'">借款订单</p>
    <p v-else>订单详情</p>
      </div>
    </div>
</template>

<script>
// import route from 'vue-router'
export default {
  data(){
    return {
      routename:'loan-order'
    }
  },
  methods:{
    back(){
      if(this.$route.name === 'loan-order' ){
        this.$router.push({path:'/'})
      }
     else{
      this.$router.back()
     }
    },
    route(){
      console.log(this.$route.name );
      this.routename = this.$route.name
      return this.routename
    }
  },
  mounted(){
    this.route()
  }
}
</script>

<style lang="less" scoped>
html{
  margin: 0;
  padding: 0;
}
.tab{
  width: 375px;
  height: 88px;
  .blank{
    width: 375px;
    height: 44px;
  }
  .title{
    width:375px;
    height: 44px;
    display: flex;
    // align-items: center;
    .img{
     width: 16px;
     height: 28px;
     background: url(~/assets/icon_back_black_normal@2x.png) no-repeat;
     margin-left: 20px;
     background-size: 60%;
     margin-top: 15px;
   }
    p{
      width: 72px;
      height: 25px;
      font-size: 18px;
      white-space: nowrap;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
      line-height: 25px;   
      margin-left: 116px;
      margin-top: 10px;
  }
  }

}
</style>