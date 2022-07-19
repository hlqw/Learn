<template>
  <div class="shop">
    <div class="top">
      <img src="../assets/blue.webp" alt="" />
    </div>
    <div class="suggest">4人评价“不起球”</div>

    <div class="color"  v-for="(json, index) in json1" :key="index">
      <button
      @click="select(types[index],item)"
      :class="{ active: condition[types[index]] === item }"
        v-for="(item, i) in json"
        :key="i"
      >
        {{ item }}
      </button>
    </div>

    <div class="button">详细信息：【{{showGoodsInfo}}】</div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { onMounted,computed } from "vue";
import axios from "axios";
export default {
  setup() {
    const state = reactive({
      json1: [],
      json2: [],
      selectIndex: -1,
      types: [], //保存从json2中获取的动态属性的名称
      condition: {}, // 有3个属性，分别是 color，size material
    });

    const select = (type,item) => {
    state.condition[type] = item
    };

   const showGoodsInfo = computed(()=>{
        return state.json2.filter((e)=>{
          return diffObjectByKeys(state.condition,e)
        })
    })
    const diffObjectByKeys = (obj1,obj2)=>{
      let isEqual = true
       for(let key in obj1){
        let v = obj1[key]   // red s miande
        if(obj2[key] && obj2[key] === v){
          continue
        }else{
        return false
        }
      }
      return isEqual
    }
    onMounted(async () => {
      await axios
        .get(
          "https://www.fastmock.site/mock/1778ce9775b3b41808bf82c39c9ece0c/axios/shop"
        )
        .then((res) => {
          state.json1 = res.data.json1;
          state.json2 = res.data.json2;
          console.log(res.data);

      state.types = Object.keys(state.json2[0]); //['color','type','mainliao','price']
      for (let i = 0; i < state.types.length; i++) {
        if (!state.json1[i]) return;
        let propName = state.types[i];
        Object.defineProperty(state.condition, propName, {
          value: state.json1[i][0],
          writable:true,
          enumerable:true,
          configurable:true
        });
      }
        });
      // state.types = Object.keys(state.json2[0]); //['color','type','mainliao','price']
      // for (let i = 0; i < state.types.length; i++) {
      //   if (!state.json1[i]) return;
      //   let propName = state.types[i];
      //   Object.defineProperty(state.condition, propName, {
      //     value: state.json1[i][0],
      //     writable:true,
      //     enumerable:true,
      //     configurable:true
      //   });
      // }
    });
    return {
      ...toRefs(state),
      select,    
      showGoodsInfo   
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