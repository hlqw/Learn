<template>
  <div class="details">
    <tabVue></tabVue>
    <div class="top">
      <p class="p1">
        订单号：1231042434535
      </p>
      <p class="p2">
        订单状态：{{ type }}
      </p>
    </div>
    <div class="middle">
      <p class="text1">
        剩余本金
      </p>
      <p class="text2">
        ￥{{ lastprincipals }}
      </p>
      <div class="info">
        <div class="apr">
          <p class="name1">
            年利率(单利)
          </p>
          <p class="num1">
            {{ news.rate }}%
          </p>
        </div>
        <div class="totalLoan">
          <p class="name2">
            贷款总额
          </p>
          <div class="num2">
            ¥{{ format(news.amount.toString()) }}
          </div>
        </div>
        <div class="totalperiods">
          <p class="name3">
            总期数
          </p>
          <p class="num3">
            {{ news.period }}期
          </p>
        </div>
      </div>
      <div class="text3 flex">
        <p class="render">
          出借方
        </p>
        <p class="detail1">
          重庆农村商业银行股份有限公司云阳支行
        </p>
      </div>
      <div class="text4 flex">
        <p class="card">
          收款卡
        </p>
        <div class="detail2">
          {{ news.bankInfo }}
        </div>
      </div>
    </div>
    <div v-if="type == '放款成功'" class="button">
      <div class="jilu">
        还款记录
      </div>
      <div v-for="item in totalInfo" :key="item.id" class="infos">
        <div class="first" :class="item.type=='已结清' ? '':'second'">
          第{{ item.id }}期
        </div>
        <div class="time">
          {{ item.time }}
        </div>
        <div class="stepBar" :class="item.type=='已结清' ? '':'third'" v-if="item.id !== totalInfo.length "></div>
        <div class="stepBar1" v-else ></div>
        <div class="dollar">
          <p class="money" :class="item.type=='已结清' ? '':'second'">
            ¥ {{ item.money }}
          </p>
          <p class="type" :class="item.type=='已结清' ? '':'second'">
            {{ item.type }}
          </p>
        </div>
        <div class="things">
          本金{{ item.principal }} + 利息{{ item.interest }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import tabVue from '~/components/tab.vue';

interface news{
  orderOpenId:string,
  amount:number,
  status:string,
  rate:number,
  period:number,
  bankInfo:string,
  firstPeriod:number
}
interface Item{
      id:number,
      period:number,
      time:string,
      money:number,
      type:string,
      principal:number
      interest:number,
}
@Component<any>({
  components: {
    tabVue,
  },
})

export default class Index extends Vue {
  infosArr: Array<any> = []; // 保存数据
  type: string = '放款成功';
  //  WAITING_AUDIT:string= '审核中';
  //   AUDIT_REJECT:string='审核拒绝';
  //   SENDING_MONEY:string='放款中';
  //   SEND_MONEY_SUCCESS:string= '放款成功';
  news:news = {
    orderOpenId: '',
    amount: 0,
    status: '',
    rate: 0,
    period: 0,
    bankInfo: '招商银行(4678)',
    firstPeriod: 1642204800000,
  };
  totalInfo:Array<any> = [];
  lastprincipals:number = 0;
  // 获取路由参数
  fn() {
    this.type =
      this.$route.params.type == undefined
        ? this.type
        : this.$route.params.type;
  }
  // 剩余本金
  lastprincipal() {
    let money = this.news.amount;
    for (const item of this.totalInfo) {
      if (item.type == '已结清') {
        money -= item.principal;
      }
    }

    return money;
  }
  // 分隔贷款
  format(n:string) {
    // n = n.toString()
    const b = parseInt(n).toString();
  const len = b.length;
  if (len <= 3) { return b; }
  const r = len % 3;
  // b.slice(r,len).match(/\d{3}/g).join(",") 每三位数加一个逗号。
  return r > 0 ? (b.slice(0, r) + ',' + b.slice(r, len).match(/\d{3}/g).join(',') + '.00')
     : (b.slice(r, len).match(/\d{3}/g).join(',') + '.00');
  }
  // 调用接口获取详情
  getData() {
    axios
      .get(
        'https://www.fastmock.site/mock/1778ce9775b3b41808bf82c39c9ece0c/axios/details',
      )
      .then(res => {
        this.infosArr = res.data.data;
      });
  }
  // getNews
  getNews() {
    axios.get('https://www.fastmock.site/mock/1778ce9775b3b41808bf82c39c9ece0c/axios/news')
    .then(res => {
       this.news = res.data;
      this.totalInfo = this.getInfo(this.news.amount, this.news.period, this.news.rate);
     this.lastprincipals = this.lastprincipal();
      // console.log(this.totalInfo,'dadad');
      // debugger
    });
  }
  // 时间戳转日期
  getTimes(time:number) { // 2022/05/17
    const date = new Date(time);
    // console.log(date.getMonth());
    // debugger
    const year = date.getFullYear() + '/';
    const mounth = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
    const day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    return year + mounth + day;
  }
  // 月份增加
  getMonth(time:string) {
    let nowTime:Array<string> = [];
      nowTime = time.split('/'); // ['2022', '05', '17']
      let str = '';
    if (parseInt(nowTime[1]) < 12 && parseInt(nowTime[1]) >= 9) {
        str = nowTime[0] + '/' + (parseInt(nowTime[1]) + 1) + '/' + nowTime[2];
      } else if (parseInt(nowTime[1]) < 9) {
        str = nowTime[0] + '/' + ('0' + (parseInt(nowTime[1]) + 1)) + '/' + nowTime[2];
      } else {
        str = (parseInt(nowTime[0]) + 1) + '/' + '01' + '/' + nowTime[2];
      }
      return str;
  }
  // 计算月额
  getInfo(mount:number, period:number, rate:number) {
    rate = rate / 100;
    const mounthRate = parseFloat((rate / 12).toFixed(3));
    let mounthPay = (mount * (mounthRate * (1 + mounthRate) ** period)) / ((1 + mounthRate) ** period - 1);
    mounthPay = parseFloat(mounthPay.toFixed(1));
    let nowTimes = this.getTimes(this.news.firstPeriod); // 当前时间 2022/05/17
    //  console.log(this.news.firstPeriod);
    // debugger

    const totalNews:{}[] = [];
    const times = period;
    let M = mount;
    for (let i = 1; i <= times; i++) {
     const item:Item = {
      id: 0,
      period: 0,
      time: '',
      money: 0,
      type: '',
      principal: 0,
      interest: 0,
    };

      const a = this.getMonth(nowTimes).split('/'); // ['2022','06','17']
      const b = a[0].substring(2, 4) + '/' + a[1] + '/' + a[2];
      item.id = i;
      item.period = i;
      item.money = mounthPay;
      item.time = b;
      nowTimes = this.getMonth(nowTimes); // 2022/06/17
      item.principal = parseFloat((mounthPay - M * mounthRate).toFixed(2));
      item.interest = parseFloat((M * mounthRate).toFixed(2));
      M = M - item.principal;
      totalNews.push(item);

    if (new Date(nowTimes).getTime() < Date.now()) {
        item.type = '已结清';
      } else {
        item.type = '待还款';
      }
    }

    return totalNews;
  }
  mounted() {
    this.getNews();
    this.fn();
    // this.getData();
    //  this.getInfo(50000,24,0.144)
  //  console.log( this.format('50000'));
  //  debugger
  }
}
</script>

<style lang="less" scoped>
.details {
  background-color: #fff;
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
    transform: translateY(-155px);
    background: url(~@/assets/img/bg_hkjl_card_noaml@2x.png) no-repeat;
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
      position: absolute;
      left: 158px;
      top: 27px;
    }
    .text2 {
      width: 157px;
      height: 35px;
      font-size: 35px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 35px;
      // transform: translate(109px, 28px);
      position: absolute;
      left: 109px;
      top: 55px;
    }
    .info {
      display: flex;
      // justify-content: space-around;
      position: relative;
      transform: translateY(50px);
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
    // .line {
    //   position: absolute;
    //   left: 15px;
    //   top: 17px;
    //   width: 4px;
    //   height: 15px;
    //   background: #2364f6;
    //   border-radius: 2px;
    // }
    .jilu {
      position: relative;
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
    .jilu::before {
      content: '';
      position: absolute;
      left: -9px;
      top: 2px;
      width: 4px;
      height: 15px;
      background: #2364f6;
      border-radius: 2px;
    }
    .jilu::after {
      content: '';
      width: 345px;
      height: 1px;
      border: 1px solid #f0f0f0;
      position: absolute;
      left: -9px;
      bottom: -17px;
    }

    .infos {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      // position: absolute;
      // left: 38px;
      // top: 70px;
      transform: translate(38px, 70px);
      margin-bottom: 60px;
      // .left {
      .first {
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
        position: relative;
      }
      .time {
        position: absolute;
        bottom: -21px;
        width: 53px;
        height: 19px;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 19px;
        left: -2px;
      }
      // }
      .stepBar {
        transform: translate(10px, 5px);
        width: 10px;
        height: 10px;
        border: 2px solid #d8d8d8;
        border-radius: 50%;
        position: relative;
        &::before {
          position: absolute;
          left: 2px;
          top: 16px;
          content: '';
          width: 1px;
          height: 56px;
          background: #d8d8d8;
          border-radius: 1px;
        }
      }
      .stepBar1 {
        transform: translate(10px, 5px);
        width: 10px ;
        height: 10px;
        border: 2px solid #333;
        border-radius: 50%;
        position: relative;
      }

      // .right {
      // transform: translateX(20px);
      .dollar {
        transform: translateX(20px);
        display: flex;
        // position: relative;
        .money {
          // width: 58px;
          height: 19px;
          font-size: 15px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 19px;
        }
        .type {
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
      .things {
        position: absolute;
        bottom: -21px;
        left: 84px;
        width: 162px;
        height: 19px;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 19px;
        white-space: nowrap;
      }
      // }
    }
    .infos1 {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      transform: translate(38px, 70px);
      margin-bottom: 60px;
      // .left {
      .first {
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
        position: relative;
      }
      .second {
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
      .time {
        position: absolute;
        bottom: -21px;
        width: 53px;
        height: 19px;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 19px;

      }
      // }
      .stepBar {
        transform: translate(10px, 5px);
        width: 10px;
        height: 10px;
        border: 2px solid #333333;
        border-radius: 50%;
        position: relative;
      }
      .stepBar1 {
        transform: translate(10px, 5px);
        width: 10px !important;
        height: 10px;
        border: 2px solid #333;
        border-radius: 50%;
        position: relative;
      }

      .stepBar::after {
        content: '';
        position: absolute;
        left: 2px;
        top: 16px;
        width: 1px;
        height: 56px;
        background: #d8d8d8;
        border-radius: 1px;
      }
      // .right {
      // transform: translateX(20px);

      .dollar {
        transform: translateX(20px);
        display: flex;
        position: relative;
        .money {
          width: 58px;
          height: 19px;
          font-size: 15px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 19px;
        }
        .type {
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
      .things {
        position: absolute;
        left: 84px;
        bottom: -21px;
        width: 162px;
        height: 19px;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 19px;
        white-space: nowrap;
      }
      // }
    }
  }
}
</style>
