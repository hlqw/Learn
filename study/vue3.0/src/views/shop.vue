<template>
  <div class="shop">
    <div class="top">
      <img src="../assets/blue.webp" alt="" />
    </div>
    <div class="suggest">4人评价“不起球”</div>

    <div class="color">
      <button
        :class="{ active: selectIndex === index }"
        @click="select(index)"
        v-for="(item, index) in json1[0]"
        :key="index"
      >
        {{ item }}
      </button>
    </div>

    <div class="size">
      <button
        :class="{ active: selectSize === index }"
        @click="select1(index)"
        v-for="(item, index) in json1[1]"
        :key="index"
      >
        {{ item }}
      </button>
    </div>

    <div class="material">
      <button
        :class="{ active: selectMaterial === index }"
        @click="select2(index)"
        v-for="(item, index) in json1[2]"
        :key="index"
      >
        {{ item }}
      </button>
    </div>

    <div class="button">详细信息：【{{}}】</div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { onMounted } from "vue";
import axios from "axios";
export default {
  setup() {
    const state = reactive({
      json1: [],
      json2:[],
      selectIndex:-1,
      selectSize:-1,
      selectMaterial:-1,
      types:[], //保存从json2中获取的动态属性的名称
      condition:{} // 有3个属性，分别是 color，size material
    });
  
   const select=(i)=>{
    state.selectIndex = i
    }
    const select1=(i)=>{
    state.selectSize = i
    }   
    const select2=(i)=>{
    state.selectMaterial = i
    }
    
    onMounted(() => {
      axios
        .get(
          "https://www.fastmock.site/mock/1778ce9775b3b41808bf82c39c9ece0c/axios/shop"
        )
        .then((res) => {
          state.json1 = res.data.json1;
          state.json2 = res.data.json2
          console.log(res.data);
        });
      state.types = Object.keys(state.json2[0]) ['color','type','mainliao','price']
      for(let i=0;i<state.types.length;i++){
      }

    });
    return {
    ...toRefs(state),select,select1,select2
    };
  },
};
</script>
<style >
.shop {
  width: 100vw !important;
  overflow-x: hidden;
}
.top {
  height: 100px;
  width: 100%;
}
img {
  width: 50px;
  height: 50px;
}
.size {
  width: 100%;
  /* height: 150px; */
}
button {
  width: 50px;
  height: 50px;
  margin: 20px;
}
.active {
  border: 1px solid red;
  color: brown;
}
</style>