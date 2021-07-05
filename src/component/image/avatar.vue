<template>
  <div style="border-radius: 50%; overflow: hidden;" :style="{width: width, height: height}">
    <centerImage :src="src"/>
  </div>
</template>

<script>
import centerImage from '@/component/image/centerImage.vue'
export default {
  components: {
    centerImage,
  },
  props: {
    width: { type: String, default: '100%' },
    height: { type: String, default: '100%' },
    src: { type: String, default: '' },
  },
}
</script>
<style scoped>
</style>
