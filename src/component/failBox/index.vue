<template>
  <div v-if="show" class="center" style="width: 100%; height: 100%; background: rgba(255, 255, 255, .3); position: fixed; top: 0;  z-index: 1;" @click="off">
    <div class="bg-black center df-column" style="width: 400px; height: 120px;">
      <div >{{name}}</div>
      <div >{{content}}</div>
    </div>
  </div>
</template>

<script setup>
// tip: 导入 component
// tip: 导入 data
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
// tip: 定义 各种 use
const store = useStore(), router = useRouter(), route = useRoute()
// tip: 定义 页面
// tip: 定义 不需要关联的
// tip: 定义 需要关联的
// tip: 定义 computed 计算的
const show = computed(() => store.state.failBox.show)
const name = computed(() => store.state.failBox.name)
const content = computed(() => store.state.failBox.content)
// tip: 定义 方法
const off = () => {
  store.dispatch('failBox/off')
}
// tip: 初始化空数据
</script>
