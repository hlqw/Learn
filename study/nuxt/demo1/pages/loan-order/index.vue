<template>
  <div class="loan">
    <div class="header">
      <tabVue></tabVue>
      <div class="porcess">
        <p class="text t1" :class="{active1: index == 1}" @click="changeLine1">审批进度</p>
        <p class="text t2" :class="{active2: index == 2}" @click="changeLine2">申请记录</p>
      </div>
    </div>
    <div class="container"  v-if="index ==1">
          <div class="items" v-for="(item) in loanDetail" :key="item.id">
              <div class="left">
                <p class="money">申请金额：{{item.money}}</p>
                <p class="time" >{{item.time}}</p>
              </div>
              <div class="right" :class="item.type.length ===3? 'type1':'type2'" @click="toDetails(item.type)">
                <span class="ing" >{{item.type}}</span>
                <span class="img"></span>
              </div>
          </div>
    </div>
      <div class="footer"></div>
  </div>
</template>

<script >
import axios from 'axios'
import tabVue from '~/components/tab.vue'
// import {mounted} from 'vue'
export default {
  components:{
    tabVue
  },
  data(){
    return {
      index:1,
      loanDetail:[]
    }
  },
  methods:{
    changeLine1(){
       this.index = 1
    },
     changeLine2(){
       this.index = 2
    },
    toDetails(type){
      // console.log(type,'ssssss');
      this.$router.push({name:'order-details',
      params:{
        type:type
      }})
    }
  },
  mounted(){
    // this.test()
  },
  async asyncData(){
    const res=await axios.get('https://www.fastmock.site/mock/1778ce9775b3b41808bf82c39c9ece0c/axios/loan')
    // console.log(res.data.data)
    return {loanDetail:res.data.data}
  },

}
</script>

<style lang="less" scoped>
.loan{
  width: 375px;
  height: 812px;
  background: #FFFFFF;
  position: relative;
  .header{
    width: 100%;
    height: 132px;
    .porcess{
      display: flex;
      width: 100%;
      height: 44px;
      position: relative;
      .text{
        width: 60px;
        height: 18px;
        font-size: 15px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #2364F6;
        margin-top: 13px;
      }
      .active1::before{
        content: '';
        position: absolute;
        width: 20px;
        height: 2px;
        left: 108px;
        top: 36px;
        background: #2364F6;
        border-radius: 1px;
      }
      .active2::before{
        content: '';
        position: absolute;
        width: 20px;
        height: 2px;
        left: 248px;
        top: 36px;
        background: #2364F6;
        border-radius: 1px;
      }
        .t1{
          margin-left: 88px;
        }
        .t2{
          margin-left: 80px;
        }
    }
  }
  .container{
    width: 100%;
    height: 680px;
    background-color: #EFEFEF;
    .items{
      width: 345px;
      height: 84px;
      background: #FFFFFF;
      border-radius: 5px;
      margin-left: 15px;
      // margin-top: 10px;
      transform: translateY(10px);
      display: flex;
      .left{
        padding-left: 20px;
        .money{
          width: 120px;
          height: 19px;
          font-size: 15px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #333333;
          line-height: 19px;
          padding-top: 20px;
          white-space: nowrap;
        }
        .time{
          width: 124px;
          height: 14px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 14px;
          padding-top: 10px;
          white-space: nowrap;
        }
      }
      .type1{
        display: flex;
        width: 68px;
        height: 24px;
        margin-top: 27px;
        margin-left: 125px;
        .ing{
          width: 39px;
          height: 18px;
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #2364F6;
          line-height: 18px;
          white-space: nowrap;
        }
        .img{
          background: url(~/assets/icon_me_go_normal@2x.png) no-repeat;
          width: 24px;
          height: 24px;
          background-size: 50%;
          transform: translate(5px,3px);
        }
      }
      .type2{
        display: flex;
        width: 68px;
        height: 24px;
        margin-top: 27px;
         margin-left: 112px;
        .ing{
          width: 39px;
          height: 18px;
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666 ;
          line-height: 18px;
          white-space: nowrap;
          .type1{

          }
        }
        .img{
          background: url(~/assets/icon_me_go_normal@2x.png) no-repeat;
          width: 24px;
          height: 24px;
          background-size: 50%;
           transform: translate(19px,3px);
        }
      }
    } 

  }
  .footer{
      position: absolute;
      margin-bottom: 0;
      width: 134px;
      height: 5px;
      background: #000000;
      border-radius: 100px;
      margin-left: 121px;
      transform: translateY(-8px);
      bottom: 0;
    }
}
</style>