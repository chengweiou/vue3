<template>
  <canvas ref="canvasDom" style="width: 100%; height: 100%;"/>
</template>

<script setup>
/**
 * 小球跳跃
 */
// tip: 导入 component
// tip: 导入 data
import { ref, computed, watch, onMounted, toRefs } from 'vue'
// tip: 定义 各种 use
// tip: 定义 页面
const canvasDom = ref(null)
// tip: 定义 不需要关联的
let jumpTime = 30
let current = 30
let ball = { x: 0, y: 0 }
let floor = 3
let viewMoveTime = 100
let viewMove = 0
// tip: 定义 需要关联的
// tip: 定义 computed 计算的
// tip: 定义 方法
const draw = () => {
  let canvas = canvasDom.value
  if (!canvas) {
    return
  }
  let ctx = canvas.getContext('2d')
  ctx.clearRect(0, -canvas.height, canvas.width * 2, canvas.height * 2)
  let w = canvas.width
  let h = canvas.height
  ctx.beginPath()

  ctx.moveTo(w * 2 / 16, h)
  ctx.lineTo(w * 2 / 16, h * 8 / 10)
  ctx.moveTo(w * 5 / 16, h)
  ctx.lineTo(w * 5 / 16, h * 7 / 10)
  ctx.moveTo(w * 8 / 16, h)
  ctx.lineTo(w * 8 / 16, h * 6 / 10)
  ctx.moveTo(w * 11 / 16, h)
  ctx.lineTo(w * 11 / 16, h * 5 / 10)
  ctx.moveTo(w * 14 / 16, h)
  ctx.lineTo(w * 14 / 16, h * 4 / 10)

  ctx.moveTo(w * 17 / 16, h)
  ctx.lineTo(w * 17 / 16, h * 3 / 10)
  ctx.moveTo(w * 20 / 16, h)
  ctx.lineTo(w * 20 / 16, h * 2 / 10)
  ctx.moveTo(w * 23 / 16, h)
  ctx.lineTo(w * 23 / 16, h * 1 / 10)
  ctx.moveTo(w * 26 / 16, h)
  ctx.lineTo(w * 26 / 16, h * 0 / 10)

  ctx.lineWidth = w / 8
  ctx.strokeStyle = '#4A90E2'
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  if (floor < 5) {
    // start : w * (-1 + 3 * 1) / 16, h * (9 - 1) / 10 - w / 16
    // end : w * (-1 + 3 * 2) / 16, h * (9 - 2) / 10 - w / 16
    let k = current / jumpTime
    ball.x = w * (-1 + 3 * k) / 16 + (floor - 1) * w * 3 / 16
    let y = (-4.2 * k * k + 13.5 * k - 8.33)
    ball.y = h * (9 - y) / 10 - w / 16 - (floor - 1) * h / 10
  }
  ctx.arc(ball.x, ball.y, w / 16, 0, 2 * Math.PI)
  ctx.fillStyle = '#4A90E2'
  ctx.fill()
  ctx.closePath()
  current++

  if (floor === 5) {
    if (viewMoveTime > viewMove) {
      ctx.translate(-w * 12 / 16 * 1 / viewMoveTime, h * 4 / 10 * 1 / viewMoveTime)
      viewMove++
    } else {
      current = jumpTime
      floor = 1
      viewMove = 0
      ctx.translate(w * 12 / 16, -h * 4 / 10)
    }
    requestAnimationFrame(draw)
    return
  }

  if (current >= jumpTime * 2 && current <= jumpTime * 2 + 10) {
    requestAnimationFrame(hold)
    return
  }
  requestAnimationFrame(draw)
}
const hold = () => {
  current++
  if (current > jumpTime * 2 + jumpTime / 1.5) {
    // 下一起点
    current = jumpTime
    floor++
    requestAnimationFrame(draw)
    return
  }
  requestAnimationFrame(hold)
}
// tip: 初始化空数据
// tip 其他生命周期
onMounted(() => {
  let canvas = canvasDom.value
  canvas.width = canvas.clientWidth * 2
  canvas.height = canvas.clientHeight * 2
  requestAnimationFrame(draw)
})
</script>


<style scoped>

</style>
<style>

</style>
