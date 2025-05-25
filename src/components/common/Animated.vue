<!-- src/components/common/Animated.vue -->
<template>
  <transition
      :name="name"
      :mode="mode"
      :appear="appear"
      :duration="duration"
      :css="css"
  >
    <slot></slot>
  </transition>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: 'fade'
  },
  mode: {
    type: String,
    default: 'out-in'
  },
  appear: {
    type: Boolean,
    default: true
  },
  duration: {
    type: [Number, Object],
    default: 300
  },
  css: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
/* 基础渐变 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity v-bind('`${typeof duration === "number" ? duration + "ms" : "300ms"}`') var(--transition-timing-function);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 缩放渐变 */
.zoom-enter-active,
.zoom-leave-active {
  transition: all v-bind('`${typeof duration === "number" ? duration + "ms" : "300ms"}`') var(--transition-timing-function);
}
.zoom-enter-from,
.zoom-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* 上移渐变 */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all v-bind('`${typeof duration === "number" ? duration + "ms" : "300ms"}`') var(--transition-timing-function);
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* 下移渐变 */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all v-bind('`${typeof duration === "number" ? duration + "ms" : "300ms"}`') var(--transition-timing-function);
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 左移渐变 */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all v-bind('`${typeof duration === "number" ? duration + "ms" : "300ms"}`') var(--transition-timing-function);
}
.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

/* 右移渐变 */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all v-bind('`${typeof duration === "number" ? duration + "ms" : "300ms"}`') var(--transition-timing-function);
}
.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>