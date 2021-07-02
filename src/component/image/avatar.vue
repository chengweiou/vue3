<template>
  <div :width="width" :height="height" style="border-radius: 50%; overflow: hidden;">
    <centerImage :src="src"/>
  </div>
</template>

<script>
import centerImage from '@/component/image/centerImage'
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
