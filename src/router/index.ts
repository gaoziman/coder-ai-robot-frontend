import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    // 定义您的路由
    {
        path: '/test',
        name: 'StyleTest',
        component: () => import('@/pages/StyleTest.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router