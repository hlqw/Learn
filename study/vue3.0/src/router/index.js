import {createRouter,createWebHistory} from 'vue-router'
import Test from '../views/Test.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
    {
        path:'/test',
        component:Test
    },
    {
        path:'/shop',
        component:()=> import ('../views/shop.vue')
    },
    {
        path:'/',
        redirect:'/shop'
    }
]
})

export default router