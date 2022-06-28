<template>
  <div>
    <h1 class="text-cyan-400">hahhaha</h1>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";
import {watch} from 'vue'
interface DataProps {
  girls: string[];
  selectGirls: string;
  selectFun: (index: number) => void;
}

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  setup() {
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectGirls: "",
      selectFun: (index: number) => {
        data.selectGirls = data.girls[index];
      },
    });
  const overText = ref('红浪漫')
  const overAction = () =>{
    overText.value = '点单完成|' + overText.value
    // 修改标题
    // document.title = overText.value  //不是响应式
  };
  watch([overText,()=> data.selectGirls],(newValue,oldValue) =>{
    console.log(`new--->${newValue}`);
    console.log(`old--->${oldValue}`);
    document.title = newValue[1]
     
  });
    return {
      ...toRefs(data),overText,overAction
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
