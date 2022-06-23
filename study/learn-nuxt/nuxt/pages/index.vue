<template>
  <!-- <Tutorial/> -->
  <div>
   <ul>
    <li><nuxt-link :to="{name:'index'}">home</nuxt-link></li>
    <li><nuxt-link :to="{name:'about'}">about</nuxt-link></li>
    <li><nuxt-link :to="{name:'news',params:{newsId:3306}}">news</nuxt-link></li>

   </ul>  
  </div>

</template>

<script>

export default {
    name: "IndexPage",
    // components: { Test,Test2 }
}
</script>
