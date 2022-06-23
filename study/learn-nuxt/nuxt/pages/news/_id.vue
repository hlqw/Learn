<template>
  <div>
    <h2>News-content</h2>
    <p>NewsId:{{$route.params.id}}</p>
    <ul>
        <li><nuxt-link :to="{name:'index'}">home</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    validate({params}){
        return /^\d+$/.test(params.id)
    },
    data(){
        return{
            title:this.$route.params.title,
        }
    },
    head(){
        return{
            title:this.title,
            meta:[
                {hid:'description',name:'new1s',content:'this is news page'}
            ]
        }
    }
}
</script>

<style>

</style>