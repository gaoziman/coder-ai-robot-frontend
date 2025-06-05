<template>
  <n-config-provider  :theme-overrides="themeOverrides">
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
import {themeOverrides} from '@/theme/themeConfig'
</script>