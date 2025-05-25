/// <reference types="vite/client" />

// Vue 3 组件类型声明
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

// 环境变量类型声明
interface ImportMetaEnv {
    readonly VITE_API_URL: string
    readonly VITE_APP_TITLE: string
    // 根据需要添加更多环境变量
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

// 全局属性类型扩展
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        // 如果有全局属性，在这里声明
    }
}

// 动画相关类型声明
declare module '@/directives/animate' {
    import type { App } from 'vue'
    const animateDirective: {
        install(app: App): void
    }
    export default animateDirective
}

declare module '@/plugins/motion' {
    import type { App } from 'vue'
    const motionPlugin: {
        install(app: App): void
    }
    export default motionPlugin
}