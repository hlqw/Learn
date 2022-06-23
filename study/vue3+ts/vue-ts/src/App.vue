<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome HL" />
    <h1>欢迎来到红浪漫洗浴中心</h1>
    <button
      v-for="(item, index) in girls"
      :key="index"
      @click="selectFun(index)"
    >
      {{ index }}:{{ item }}
    </button>
    <div>你选择了【{{ selectGirls ? selectGirls : "大脚" }}】美女为你服务</div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
interface DataProps {
  girls: string[];
  selectGirls: string;
  selectFun: (index: number) => void;
}

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectGirls: "",
      selectFun: (index: number) => {
        data.selectGirls = data.girls[index];
      },
    });
    // const girls = ref(["大脚","刘英","晓红"])
    const selectGirls = ref("");
    const selectFun = (index: number) => {
      data.selectGirls = data.girls[index];
    };
    return {
      ...toRefs(data),
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
