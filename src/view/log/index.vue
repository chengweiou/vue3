<template>
  <main>
    connect status: {{ws.readyState}}<button @click="start">connect</button><button @click="clean">clean</button>
    <div>
      <article v-for="(e, i) in list" :key="i">
        <div>{{e}}</div>
      </article>
    </div>
  </main>
</template>

<script setup>
// tip: 导入 component
// tip: 导入 data
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { wait, emptyFn, clone, storage } from '@/fn'
// tip: 定义 各种 use
// tip: 定义 页面
// tip: 定义 不需要关联的
// tip: 定义 需要关联的
const ws = ref({})
const list = ref([])
// tip: 定义 computed 计算的
// tip: 定义 方法
const start = () => {
  ws.value = new WebSocket('ws://127.0.0.1:8907/adminpath/log')
  ws.value.onopen = () => {
    ws.value.onmessage = (response) => {
      let message = JSON.parse(response.data)
      list.value.unshift(message)
    }
  }
}
const clean = () => {
  list.value = []
}
// tip: 初始化空数据
start()
</script>
