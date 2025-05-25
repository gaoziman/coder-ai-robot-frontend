<template>
  <n-config-provider :theme="activeTheme" :theme-overrides="themeOverrides">
    <n-message-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </n-notification-provider>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import {ref, computed, provide} from 'vue'
import {useOsTheme, darkTheme} from 'naive-ui'
import {themeOverrides} from '@/theme/themeConfig'

// 检测系统主题
const osThemeRef = useOsTheme()

// 用户选择的主题模式: 'auto' | 'light' | 'dark'
const themeMode = ref('auto')

// 计算当前应该使用的主题
const activeTheme = computed(() => {
  if (themeMode.value === 'auto') {
    return osThemeRef.value === 'dark' ? darkTheme : null
  }
  return themeMode.value === 'dark' ? darkTheme : null
})

// 切换主题的方法
const toggleTheme = (mode) => {
  themeMode.value = mode
}

// 使用 provide 向子组件提供主题相关功能
provide('themeMode', themeMode)
provide('toggleTheme', toggleTheme)
provide('isDarkTheme', computed(() => activeTheme.value !== null))

// 导出切换主题的方法
defineExpose({
  toggleTheme
})
</script>