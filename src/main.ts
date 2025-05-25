import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import '@/assets/styles/base.css'
import naive from 'naive-ui'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 导入动画相关
import animateDirective from '@/directives/animate'
import motionPlugin from '@/plugins/motion'

// 创建 Pinia 实例并配置持久化插件
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// 创建 Vue 应用实例
const app = createApp(App)

// 注册全局组件和插件
app.use(router)
app.use(pinia)
app.use(naive)

// 注册动画相关插件和指令
app.use(animateDirective)
app.use(motionPlugin)

// 应用动画样式
app.provide('animation', {
    enabled: true,
    duration: 300,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
})

// 挂载应用
app.mount('#app')