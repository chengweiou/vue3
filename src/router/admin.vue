<template>
  <el-container style="min-height: 100%;">
    <el-header style="border-bottom: solid 1px #fff; "><projHeader /></el-header>
    <el-container>
      <el-aside style="width: auto;"><projAsider></projAsider></el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
    <el-footer>
      <projFooter/>
    </el-footer>
  </el-container>
</template>
<script setup>
// tip: 导入 component
import projHeader from '@/component/nav/projHeader.vue'
import projFooter from '@/component/nav/projFooter.vue'
import projAsider from '@/component/nav/projAsider.vue'
// tip: 导入 data
// tip: 定义 各种 use
// tip: 定义 页面
// tip: 定义 不需要关联的
// tip: 定义 需要关联的
// tip: 定义 computed 计算的
// tip: 定义 方法
// tip: 初始化空数据
</script>
