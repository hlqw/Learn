<template>
  <div>
    <h2>这是news页面</h2>
    <p>NewsId:{{$route.params.newsId}}</p>
    <ul>
        <li><nuxt-link :to="{name:'index'}">home</nuxt-link></li>
        <li><nuxt-link :to="{name:'news-id',params:{id:123,title:'I am News'}}">news1</nuxt-link></li>

        <li><a href="/news/456">news2</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  transition:'test'
}
</script>

<style>

</style>