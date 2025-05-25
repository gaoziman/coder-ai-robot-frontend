// src/utils/animation.ts
import { ref, computed } from 'vue'

// 动画配置
export const animationConfig = ref({
    // 是否启用全局动画
    enabled: true,
    // 全局动画持续时间（毫秒）
    duration: 300,
    // 动画缓动函数
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // 动画延迟（毫秒）
    delay: 0,
    // 是否禁用特定组件的动画
    disabledComponents: [] as string[]
})

// 公开的方法用于控制全局动画
export const animation = {
    // 判断组件动画是否应该启用
    isEnabled: (componentName?: string) => {
        if (!animationConfig.value.enabled) return false
        if (componentName && animationConfig.value.disabledComponents.includes(componentName)) return false
        return true
    },

    // 获取动画持续时间
    getDuration: (override?: number) => {
        return override || animationConfig.value.duration
    },

    // 获取动画延迟
    getDelay: (override?: number) => {
        return override || animationConfig.value.delay
    },

    // 获取动画缓动函数
    getEasing: (override?: string) => {
        return override || animationConfig.value.easing
    },

    // 启用全局动画
    enable: () => {
        animationConfig.value.enabled = true
    },

    // 禁用全局动画
    disable: () => {
        animationConfig.value.enabled = false
    },

    // 配置动画设置
    configure: (config: Partial<typeof animationConfig.value>) => {
        animationConfig.value = {
            ...animationConfig.value,
            ...config
        }
    },

    // 禁用特定组件的动画
    disableComponent: (componentName: string) => {
        if (!animationConfig.value.disabledComponents.includes(componentName)) {
            animationConfig.value.disabledComponents.push(componentName)
        }
    },

    // 启用特定组件的动画
    enableComponent: (componentName: string) => {
        const index = animationConfig.value.disabledComponents.indexOf(componentName)
        if (index !== -1) {
            animationConfig.value.disabledComponents.splice(index, 1)
        }
    }
}

// 输出动画配置的计算属性
export const animationStyle = computed(() => {
    return {
        '--animation-duration': `${animationConfig.value.duration}ms`,
        '--animation-easing': animationConfig.value.easing,
        '--animation-delay': `${animationConfig.value.delay}ms`
    }
})

export default animation