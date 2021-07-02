<template>
  <div v-if="show" class="center" style="width: 100%; height: 100%; background: rgba(255, 255, 255, .3); position: fixed; top: 0;  z-index: 1;" @click="off">
    <div class="bg-black center df-column" style="width: 400px; height: 120px;">
      <div >{{name}}</div>
      <div >{{content}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    show() { return this.$store.state.failBox.show },
    name() { return this.$store.state.failBox.name },
    content() { return this.$store.state.failBox.content },
  },
  methods: {
    off() {
      this.$store.dispatch('failBox/off')
    },
  },
}
</script>
