import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const Aos = () => import('../views/aos')
const FlexPort = () => import('../views/FlexPort/index')

Vue.use(VueRouter)

const routes = [
    {
      path: '/aos',
      name: 'Aos',
      component: Aos
    },{
        path: '/flexPort',
        name: 'FlexPort',
        component: FlexPort
    },
]

const router = new VueRouter({
    routes
})

export default router
