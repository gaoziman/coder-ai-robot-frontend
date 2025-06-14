import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'


// 统一在这里声明所有路由
const routes: Array<RouteRecordRaw> = [
    {
        path: '/', // 路由地址
        component: () => import('@/pages/Index.vue'), // 对应组件
        meta: { // meta 信息
            title: '首页' // 页面标题
        }
    },
    {
        path: '/test',
        name: 'StyleTest',
        component: () => import('@/pages/StyleTest.vue')
    }
]

// 创建路由
const router = createRouter({
    // 指定路由模式，hash 模式指的是 URL 的路径是通过 hash 符号（#）进行标识
    history: createWebHashHistory(),
    // routes: routes 的缩写
    routes,
})

// ES6 模块导出语句，它用于将 router 对象导出，以便其他文件可以导入和使用这个对象
export default router
