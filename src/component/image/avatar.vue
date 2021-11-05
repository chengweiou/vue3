<template>
  <div style="border-radius: 50%; overflow: hidden;" :style="{width: width, height: height}">
    <centerImage :src="src"/>
  </div>
</template>

<script setup>
// tip: 导入 component
import centerImage from '@/component/image/centerImage.vue'
// tip: 导入 data
// tip: 定义 各种 use
// tip: 定义 页面
defineProps({
  width: { type: String, default: '100%' },
  height: { type: String, default: '100%' },
  src: { type: String, default: '' },
})
// tip: 定义 不需要关联的
// tip: 定义 需要关联的
// tip: 定义 computed 计算的
// tip: 定义 方法
// tip: 初始化空数据
</script>

<style scoped>
</style>
