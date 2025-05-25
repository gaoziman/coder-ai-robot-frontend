// src/plugins/motion.ts
import { MotionPlugin } from '@vueuse/motion'
import 'animate.css/animate.min.css'

// 预设动画
export const motionPresets = {
    'fade-in': {
        initial: { opacity: 0 },
        enter: { opacity: 1, transition: { duration: 300 } }
    },
    'slide-up': {
        initial: { opacity: 0, y: 20 },
        enter: { opacity: 1, y: 0, transition: { duration: 300 } }
    },
    'slide-down': {
        initial: { opacity: 0, y: -20 },
        enter: { opacity: 1, y: 0, transition: { duration: 300 } }
    },
    'slide-left': {
        initial: { opacity: 0, x: 20 },
        enter: { opacity: 1, x: 0, transition: { duration: 300 } }
    },
    'slide-right': {
        initial: { opacity: 0, x: -20 },
        enter: { opacity: 1, x: 0, transition: { duration: 300 } }
    },
    'zoom-in': {
        initial: { opacity: 0, scale: 0.9 },
        enter: { opacity: 1, scale: 1, transition: { duration: 300 } }
    },
    'zoom-out': {
        initial: { opacity: 0, scale: 1.1 },
        enter: { opacity: 1, scale: 1, transition: { duration: 300 } }
    },
    'rotate-in': {
        initial: { opacity: 0, rotate: -10 },
        enter: { opacity: 1, rotate: 0, transition: { duration: 300 } }
    }
}

export default {
    install(app: any) {
        // 注册动作插件
        app.use(MotionPlugin, {
            directives: {
                'v-motion': {
                    initial: { opacity: 0 },
                    enter: { opacity: 1, transition: { duration: 300 } }
                },
                ...motionPresets
            }
        })

        // 添加全局属性
        app.config.globalProperties.$motion = motionPresets
    }
}