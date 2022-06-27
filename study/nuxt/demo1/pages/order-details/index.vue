<template>
  <div class="details">
    <div class="header">
      <tabVue></tabVue>
    </div>
    <div class="container">
      <div class="top">
        <p class="p1">订单号：1231042434535</p>
        <p class="p2">订单状态：{{type}}</p>
      </div>
      <div class="middle">
        <p class="text1">剩余本金</p>
        <p class="text2">￥48189.9</p>
        <div class="info">
          <div class="apr">
            <p class="name1">年利率(单利)</p>
            <p class="num1">14.4%</p>
          </div>
          <div class="totalLoan">
            <p class="name2">贷款总额</p>
            <div class="num2">50,000.00</div>
          </div>
          <div class="totalperiods">
            <p class="name3">总期数</p>
            <p class="num3">24期</p>
          </div>
        </div>
        <div class="text3">
          <p class="render">出借方</p>
          <p class="detail1">重庆农村商业银行股份有限公司云阳支行</p>
        </div>
        <div class="text4">
          <p class="card">收款卡</p>
          <div class="detail2">招商银行储蓄卡（4768）</div>
        </div>
      </div>
      <div class="button" v-if="type == '放款成功'">
        <div class="title">
          <div class="line"></div>
          <div class="jilu">还款记录</div>
        </div>
        <div class="undetline"></div>
        <div :class="item.type==='已结清'?'infos':'infos1'" v-for="item in infosArr" :key="item.id">
          <div class="left" >
            <div :class="item.first.length<4? 'first':'second'" >{{item.first}}</div>
            <div class="time">{{item.time}}</div>
          </div>
          <div class="stepBar" v-if="item.id !== infosArr.length-1"></div>
          <div class="stepBar1" v-else></div>
          <div class="right">
            <div class="dollar" :class="item.type == '已结清' ?'':'color'">
              <p class="money">{{item.money}}</p>
              <p class="type">{{item.type}}</p>
            </div>
            <div class="things">{{item.info}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import tabVue from "~/components/tab.vue";
import Vue from 'vue';
export default {
  components: {
    tabVue,
  },
  data() {
    return {
      infosArr:[],
      type:'放款成功',
    } 
  },
  methods:{
    fn(){
    this.type = this.$route.params.type == undefined ? this.type:this.$route.params.type
    }
  },
  async asyncData(){
    const res = await axios.get('https://www.fastmock.site/mock/1778ce9775b3b41808bf82c39c9ece0c/axios/details')
    return {infosArr:res.data.data}
  },
  mounted(){ 
    this.fn()
  } 
};
</script>

<style lang="less" scoped>
.container {
  overflow-x: hidden;
  width: 375px;
  height: 950px;
  .top {
    width: 100%;
    height: 234px;
    background: linear-gradient(360deg, #ffffff 0%, #2364f6 16%, #2364f6 100%);
    .p1 {
      width: 137px;
      height: 14px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      white-space: nowrap;
      transform: translate(15px, 22px);
    }
    .p2 {
      width: 162px;
      height: 22px;
      font-size: 18px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      transform: translate(15px, 30px);
    }
  }
  .middle {
    position: relative;
    width: 100%;
    height: 283px;
    border: 1px dashed rgb(106, 96, 96);
    transform: translateY(-155px);
    background: url(~/assets/bg_hkjl_card_noaml@2x.png) no-repeat;
    // display: flex;
    // justify-content: center;
    // text-align: center;
    background-size: contain;
    background-position: center;
    .text1 {
      width: 52px;
      height: 18px;
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      line-height: 18px;
      transform: translate(158px, 27px);
    }
    .text2 {
      width: 157px;
      height: 35px;
      font-size: 35px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 35px;
      transform: translate(109px, 28px);
    }
    .info {
      display: flex;
      // justify-content: space-around;
      position: relative;
      .apr {
        position: absolute;
        // transform: translate(32px,60px);
        left: 32px;
        top: 60px;
        .name1 {
          width: 74px;
          height: 16px;
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 16px;
          white-space: nowrap;
        }
        .num1 {
          width: 49px;
          height: 22px;
          font-size: 18px;
          font-family: DIN-Medium, DIN;
          font-weight: 500;
          color: #333333;
          line-height: 22px;
          white-space: nowrap;
          transform: translate(13px, 5px);
        }
      }
      .totalLoan {
        // transform: translate(0,60px);
        position: absolute;
        left: 162px;
        top: 60px;
        .name2 {
          width: 52px;
          height: 16px;
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 16px;
          white-space: nowrap;
        }
        .num2 {
          width: 96px;
          height: 22px;
          font-size: 18px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
          line-height: 22px;
          white-space: nowrap;
          transform: translate(-22px, 5px);
        }
      }
      .totalperiods {
        // transform: translate(0,60px);
        position: absolute;
        left: 287px;
        top: 60px;
        .name3 {
          width: 39px;
          height: 16px;
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 16px;
          white-space: nowrap;
        }
        .num3 {
          width: 38px;
          height: 22px;
          font-size: 18px;
          font-family: DIN-Medium, DIN;
          font-weight: 500;
          color: #333333;
          line-height: 22px;
          white-space: nowrap;
          transform: translate(1px, 5px);
        }
      }
    }
    .text3 {
      display: flex;
      position: absolute;
      left: 30px;
      top: 203px;
      .render {
        width: 39px;
        height: 16px;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 16px;
      }
      .detail1 {
        transform: translateX(15px);
        width: 234px;
        height: 16px;
        font-size: 13px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 16px;
      }
    }
    .text4 {
      display: flex;
      position: absolute;
      left: 30px;
      top: 229px;
      .card {
        width: 39px;
        height: 16px;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 16px;
      }
      .detail2 {
        transform: translateX(15px);
        width: 148px;
        height: 16px;
        font-size: 13px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 16px;
      }
    }
  }
  .button {
    width: 375px;
    height: 592px;
    transform: translateY(-155px);
    // display: flex;
    position: relative;
    .line {
      position: absolute;
      left: 15px;
      top: 17px;
      width: 4px;
      height: 15px;
      background: #2364f6;
      border-radius: 2px;
    }
    .jilu {
      position: absolute;
      left: 24px;
      top: 15px;
      width: 60px;
      height: 19px;
      font-size: 15px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
      line-height: 19px;
    }
    .undetline {
      width: 345px;
      height: 1px;
      border: 1px solid #f0f0f0;
      position: absolute;
      left: 15px;
      top: 49px;
    }
    .infos {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      // position: absolute;
      // left: 38px;
      // top: 70px;
      transform: translate(38px,70px);
       margin-bottom: 37px;
      .left{
        .first{
          text-align: right;
          margin-bottom: 2px;
          width: 53px;
          height: 19px;
          font-size: 15px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #999999;
          line-height: 19px;  
          white-space: nowrap;
        }
        .time{
          width: 53px;
          height: 19px;
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 19px;
        }
      }
      .stepBar{
        transform: translate(10px,5px);
        width: 10px;
        height: 10px;
        border: 2px solid #D8D8D8;
        border-radius: 50%;
        position: relative;
      }
      .stepBar1{
        transform: translate(10px,5px);
        width: 10px;
        height: 10px;
        border: 2px solid #D8D8D8;
        border-radius: 50%;
        position: relative;
      }
      .stepBar::before{
        position: absolute;
        left: 5px;
        top: 16px;
        content: '';
        width: 1px;
        height: 56px;
        background: #D8D8D8;
        border-radius: 1px;
      }
      .right{
        transform: translateX(20px);
        
        .dollar{
          display: flex;
          .money{
            width: 58px;
            height: 19px;
            font-size: 15px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
            line-height: 19px;
          }
          .type{
            margin-left: 5px;
            width: 39px;
            height: 19px;
            font-size: 13px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
            line-height: 19px;
          }
        }
        .things{
          width: 162px;
          height: 19px;
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 19px;
          white-space: nowrap;
        }
      }
    }
     .infos1 {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      transform: translate(38px,70px);
       margin-bottom: 37px;
      .left{
        .first{
          text-align: right;
          margin-bottom: 2px;
          width: 53px;
          height: 19px;
          font-size: 15px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #333333;
          line-height: 19px;  
          white-space: nowrap;
        }
        .second{
          text-align: right;
          margin-bottom: 2px;
          width: 53px;
          height: 19px;
          font-size: 15px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #333333;
          line-height: 19px;  
          white-space: nowrap;
          transform: translateX(-18px);
        }
        .time{
          width: 53px;
          height: 19px;
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 19px;
        }
      }
      .stepBar{
        transform: translate(10px,5px);
        width: 10px;
        height: 10px;
        border: 2px solid #333333;
        border-radius: 50%;
        position: relative;
      }
      .stepBar1{
        transform: translate(10px,5px);
        width: 10px;
        height: 10px;
        border: 2px solid #333333;
        border-radius: 50%;
        position: relative;
      }
      .stepBar::before{
        position: absolute;
        left: 5px;
        top: 16px;
        content: '';
        width: 1px;
        height: 56px;
        background: #D8D8D8;
        border-radius: 1px;
      }
      .right{
        transform: translateX(20px);
        
        .dollar{
          display: flex;
          .money{
            width: 58px;
            height: 19px;
            font-size: 15px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            line-height: 19px;
          }
          .type{
            margin-left: 5px;
            width: 39px;
            height: 19px;
            font-size: 13px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            line-height: 19px;
          }
        }
        .things{
          width: 162px;
          height: 19px;
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 19px;
          white-space: nowrap;
        }
      }
    }
     .infos:last-child {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      transform: translate(38px,70px);
       margin-bottom: 37px;
      .left{
        .first{
          text-align: right;
          margin-bottom: 2px;
          width: 48px;
          height: 19px;
          font-size: 15px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #333333;
          line-height: 19px;  
          white-space: nowrap;
          transform: translateX(-18px);
        }
        .time{
          width: 53px;
          height: 19px;
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 19px;
        }
      }
      .stepBar{
        transform: translate(10px,5px);
        width: 10px;
        height: 10px;
        border: 2px solid #D8D8D8;
        border-radius: 50%;
        position: relative;
      }
      .stepBar1{
        transform: translate(10px,5px);
        width: 10px;
        height: 10px;
        border: 2px solid #D8D8D8;
        border-radius: 50%;
        position: relative;
      }
      .stepBar::before{
        position: absolute;
        left: 5px;
        top: 16px;
        content: '';
        width: 1px;
        height: 56px;
        background: #D8D8D8;
        border-radius: 1px;
      }
      .right{
        transform: translateX(20px);
        
        .dollar{
          display: flex;
          .money{
            width: 58px;
            height: 19px;
            font-size: 15px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            line-height: 19px;
          }
          .type{
            margin-left: 5px;
            width: 39px;
            height: 19px;
            font-size: 13px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            line-height: 19px;
          }
        }
        .things{
          width: 162px;
          height: 19px;
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 19px;
          white-space: nowrap;
        }
      }
    }

  }
}
</style>