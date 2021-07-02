<template>
  <main>
    <div style="width: 50px; height: 50px;"><centerImage :src="'https://vuejs.org/images/logo.png'"/></div>
    <div>
      <button @click="goList">goList</button>
    </div>
    <div>
      <section>{{detail.id}}</section>
      <section>
        <div v-if="!showUpdate">{{detail.name}}</div>
        <div v-else><input v-model="form.name"></div>
      </section>
      <section>
        <div v-if="!showUpdate">{{ $filter.phone(detail.phone) }}</div>
        <div v-else><input v-model="form.phone"></div>
      </section>
      <section>
        <div v-if="!showUpdate">{{ $filter.number(detail.vote) }}</div>
        <div v-else><input v-model="form.vote"></div>
      </section>
      <section>{{ $filter.date(detail.date) }}</section>
      <div class="center" style="width: 200px; height: 50px;">
        <div v-if="updateLoading" class="center"><loadingIcon style="width: 30px; height: 30px;"/></div>
        <div v-else class="center" style="flex: 1;">
          <article v-if="!showUpdate" class="df df-jcsb">
            <section class="center btn-white" style="width: 50px; height: 30px; border-radius: 3px;" @click="onUpdate()">update</section>
          </article>
          <article v-else class="df df-jcsb" style="flex: 1;">
            <section class="center btn-white" style="width: 50px; height: 30px; border-radius: 3px;" @click="offUpdate()">cancel</section>
            <section class="center btn-white" style="width: 50px; height: 30px; border-radius: 3px;" @click="update()">update</section>
          </article>
        </div>
      </div>
    </div>
    <div>
      message from golbal i18n: {{ t('message') }}
    </div>
    <div>
      {{ t('Image') }}
    </div>
    <div>
      {{ t('ImageAtDetail') }}
    </div>

  </main>
</template>

<script setup >
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ inheritLocale: true })
</script>
<script>
import loadingIcon from '@/component/loadingIcon/index.vue'
import clone from '@/fn/util/clone'
import centerImage from '@/component/image/centerImage.vue'
export default {
  components: {
    centerImage, loadingIcon,
  },
  data() {
    return {
      form: {},
      showUpdate: false,
      updateLoading: false,
    }
  },
  computed: {
    detail() { return this.$store.state.xxx.detail },
  },
  created() {
    this.findById()
  },
  methods: {
    async findById() {
      this.$store.dispatch('xxx/findById', { id: this.$route.params.id })
    },
    goList() {
      this.$router.push({ name: 'xxxList' })
    },
    onUpdate() {
      this.showUpdate = true
      this.form = clone(this.detail)
    },
    offUpdate() {
      this.showUpdate = false
    },
    async update() {
      this.updateLoading = true
      let pList = await Promise.all([this.$store.dispatch('xxx/update', this.form), this.$wait(1000)])
      this.updateLoading = false
      if (!pList[0]) return
      this.showUpdate = false
      this.detail = clone(this.form)
    },
  },
}
</script>
<i18n>
en:
  ImageAtDetail: custom block Image in detail page
zh:
  ImageAtDetail: 当前页面的图片来自详情页面
</i18n>
