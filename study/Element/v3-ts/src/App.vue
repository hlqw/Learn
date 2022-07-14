<template>
  <div class="app">
    <ul>
      <li ref="lis">454564</li>
    </ul>
  </div>
</template>

<script lang="ts" >
import { defineComponent, onMounted } from "vue"
import { ref } from "vue"
  export default defineComponent({
    setup(){
    const lis = ref('')
    onMounted(()=>{
    console.log(lis);
    
    })
    return {
       }
    }
  })
</script>
<style lang="less">
*{
  padding: 0;
  margin: 0;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
</style>
