/* route.js */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './routes/Home.vue'
import Child from './routes/Child.vue'

Vue.use(VueRouter)

export default function createRouter() {
    let router = new VueRouter({
        // 要记得增加mode属性，因为#后面的内容不会发送至服务器，服务器不知道请求的是哪一个路由
        mode: 'history',
        routes: [
            {
                alias: '/',
                path: '/home',
                component: Home
            },
            {
                path: '/child',
                component:Child
            }
        ]
    })

    return router
}