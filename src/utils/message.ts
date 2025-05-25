import { createDiscreteApi } from 'naive-ui'
import { themeOverrides } from '@/theme/themeConfig'

// 创建离散API（可在组件外使用）
const { message } = createDiscreteApi(
    ['message'],
    {
        configProviderProps: {
            themeOverrides
        }
    }
)

// 导出消息服务
export default message

export {
    message
}