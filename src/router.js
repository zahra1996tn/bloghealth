import {createRouter , createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Gallery from './components/Gallery.vue'
import User from './components/User.vue'


const routes = [
    { path:'/' , component:Home },
    { path:'/gallery' , component:Gallery },
    { path :'/users', component:User }
]
const router = new createRouter({
    history: createWebHistory(),
    routes
  })
  

export default router