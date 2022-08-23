<template>
  <div v-if="show" class="center" style="width: 100%; height: 100%; background: rgba(255, 255, 255, .3); position: fixed; top: 0; left: 0;" >
    <slot></slot>
  </div>
</template>

<script setup>
/**
 * 一个固定位置，白色小透明的模态窗，用于覆盖在其他部分纸上，不使用z-index，需配合首页布置层级
 */
// tip: 导入 component
// tip: 导入 data
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { wait, empty, clone } from '@/fn'
// tip: 定义 各种 use
const store = useStore(), router = useRouter(), route = useRoute()
// tip: 定义 页面
// tip: 定义 不需要关联的
// tip: 定义 需要关联的
// tip: 定义 computed 计算的
const show = computed(() => store.state.modal.show)
// tip: 定义 方法
const off = () => {
  store.dispatch('modal/off')
}
// tip: 初始化空数据
</script>
