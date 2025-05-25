import { DirectiveBinding } from 'vue'

// 定义动画类型
type AnimationType =
    | 'fade-in'
    | 'fade-in-up'
    | 'fade-in-down'
    | 'zoom-in'
    | 'slide-in-left'
    | 'slide-in-right'

interface AnimateOptions {
    type: AnimationType
    duration?: number
    delay?: number
}

export const animate = {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        // 默认动画类型
        let type: AnimationType = 'fade-in'
        let duration = 300
        let delay = 0

        if (typeof binding.value === 'string') {
            type = binding.value as AnimationType
        } else if (binding.value) {
            const options = binding.value as AnimateOptions
            type = options.type || type
            duration = options.duration || duration
            delay = options.delay || delay
        }

        // 防止闪烁
        el.style.opacity = '0'

        setTimeout(() => {
            el.style.opacity = ''
            el.style.animation = `${type} ${duration}ms var(--transition-timing-function)`
            el.style.animationDelay = `${delay}ms`
            el.style.animationFillMode = 'both'
        }, 0)
    }
}

// 注册全局指令
export default {
    install(app: any) {
        app.directive('animate', animate)
    }
}