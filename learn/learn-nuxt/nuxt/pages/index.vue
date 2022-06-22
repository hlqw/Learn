<template>
  <!-- <Tutorial/> -->
  <div>
    <Test/>
    <p>哈哈哈哈</p>
    <Test2/>
  </div>

</template>

<script>
import Test from '../components/test.vue';
import Test2 from '../components/test2.vue';
export default {
    name: "IndexPage",
    components: { Test,Test2 }
}
</script>
