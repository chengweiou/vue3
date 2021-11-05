<template>
  <canvas ref="canvasDom" :style="{width: width, height: height}"/>
</template>

<script setup>
/**
 * 中心图片一般两种形式，以下采用: 1
 * 1.剪裁掉超出显示框的部分
 * 2.保留全图，宽高比不足的部分纯色填充
 */
// tip: 导入 component
// tip: 导入 data
import { ref, computed, watch, onMounted, toRefs } from 'vue'
// tip: 定义 各种 use
// tip: 定义 页面
const props = defineProps({
  width: { type: String, default: '100%' },
  height: { type: String, default: '100%' },
  src: { type: String, required: true },
})

const { src } = toRefs(props)
watch(src, (v, prevV) => draw())
const canvasDom = ref(null)
// tip: 定义 不需要关联的
// tip: 定义 需要关联的
// tip: 定义 computed 计算的
// tip: 定义 方法
const draw = () => {
  let canvas = canvasDom.value
  canvas.width = canvas.clientWidth * 2 || 100
  canvas.height = canvas.clientHeight * 2 || 100

  let ctx = canvas.getContext('2d')
  let img = new Image()
  img.src = src.value
  img.onerror = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.moveTo(canvas.width / 3, canvas.height / 3)
    ctx.lineTo(canvas.width * 2 / 3, canvas.height * 2 / 3)
    ctx.lineWidth = 3
    ctx.strokeStyle = '#aaa'
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
    ctx.moveTo(canvas.width * 2 / 3, canvas.height / 3)
    ctx.lineTo(canvas.width / 3, canvas.height * 2 / 3)
    ctx.lineWidth = 3
    ctx.strokeStyle = '#aaa'
    ctx.stroke()
    ctx.closePath()
  }
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let imgsw, imgsh, imgw, imgh
    if (img.naturalWidth > img.naturalHeight * canvas.width / canvas.height) {
      imgsh = 0
      imgh = img.naturalHeight
      imgw = canvas.width / canvas.height * img.naturalHeight
      imgsw = (img.naturalWidth - imgw) / 2
    } else {
      imgsw = 0
      imgw = img.naturalWidth
      imgh = canvas.height / canvas.width * img.naturalWidth
      imgsh = (img.naturalHeight - imgh) / 2
    }

    ctx.drawImage(img, imgsw, imgsh, imgw, imgh, 0, 0, canvas.width, canvas.height)
  }
}
// tip: 初始化空数据
// tip 其他生命周期
onMounted(() => {
  draw()
})
</script>


<style scoped>
</style>
