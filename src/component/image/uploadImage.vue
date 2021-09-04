<template>
  <div class="pointer" style="width: 100%; height: 100%;">
    <div v-if="src" style="position: relative; width: 100%; height: 100%;">
      <label class="df" style="width: 100%; height: 100%;">
        <centerImage :src="src"/>
        <input type="file" style="display: none;" @change="$emit('change', $event)">
      </label>
      <i class="el-icon-delete" style="padding: 5px; background: #F56C6C; border-radius: 50%; position: absolute; top: -5px; right: -5px;" @click="$emit('change', $event)"></i>
    </div>
    <label v-if="!src" class="center btn-white" style="width: 100%; height: 100%;">
      Upload Photo <input style="display: none;" type="file" @change="$emit('change', $event)" >
    </label>
  </div>
</template>

<script>
import centerImage from '@/component/image/centerImage.vue'
export default {
  components: {
    centerImage,
  },
  props: {
    src: { type: String, default: '' },
  },
  emits: ['change'],
}
</script>
<style scoped>
</style>
