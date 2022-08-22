<template>
  <div @click="test">芜湖市苏火速火速456456----{{todos}}</div>
</template>

<script>
import { computed, onMounted } from 'vue-demi'
import {storeToRefs} from 'pinia'
import {useStore} from './store/index'
export default {
  setup() {
    const store = useStore()
   const {name,age,todos} =storeToRefs(store)
    const test = () => {
     store.addTodo()
      // console.log(todos.value);
      //  console.log(store.ageAdd());
    
   }
    onMounted(() => {
      // console.log(store.ageAdd());
    })
   return {
     test, store, name, age,todos
   }
  }
}
</script>

<style>
div{
  color: red;
}
</style>