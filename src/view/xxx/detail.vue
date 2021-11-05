<template>
  <main>
    <div style="width: 50px; height: 50px;"><center-image :src="'https://vuejs.org/images/logo.png'"/></div>
    <div>
      <button @click="go('xxxList')">goList</button>
    </div>
    <div>
      <section>{{detail.id}}</section>
      <section>
        <div v-if="!showUpdate">{{detail.name}}</div>
        <div v-else><input v-model="form.name"></div>
      </section>
      <section>
        <div v-if="!showUpdate">{{ phone(detail.phone) }}</div>
        <div v-else><input v-model="form.phone"></div>
      </section>
      <section>
        <div v-if="!showUpdate">{{ number(detail.vote) }}</div>
        <div v-else><input v-model="form.vote"></div>
      </section>
      <section>{{ date(detail.date) }}</section>
      <div class="center" style="width: 200px; height: 50px;">
        <div v-if="loading" class="center"><loading-icon style="width: 30px; height: 30px;"/></div>
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

<script setup>
// tip: 导入 component
import LoadingIcon from '@/component/loadingIcon/index.vue'
import CenterImage from '@/component/image/centerImage.vue'
// tip: 导入 data
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { wait, emptyFn, clone, storage, phone, number, date } from '@/fn'
// tip: 定义 各种 use
const store = useStore(), router = useRouter(), route = useRoute(), { t, locale } = useI18n({ inheritLocale: true })
// tip: 定义 页面
const formEl = ref(null)
// tip: 定义 不需要关联的
const rules = {
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  des: [{ required: true, message: '请输入内容', trigger: 'blur' }],
  img: [{ validator: (rule, value, callback) => (form.value.img || form.value.imgsrc) ? callback() : callback(new Error('请选择图片')), trigger: 'blur' }],
}
const cleanForm = {
  ...emptyFn.xxx(), img: '',
  ...store.state.xxxDb.save,
}
// tip: 定义 需要关联的
const form = ref(clone(cleanForm))
const loading = ref(false)
const showUpdate = ref(false)
// tip: 定义 computed 计算的
const detail = computed(() => store.state.xxx.detail)
// tip: 定义 方法
const go = (v) => {
  router.push({ name: v })
}
const findById = async() => {
  await store.dispatch('xxx/findById', { id: route.params.id })
  form.value.des = detail.value.des
}
const readPic = (event) => {
  if (!event.target.files) {
    form.value.img = ''
    return
  }
  if (!event.target.files.length) return
  let reader = new FileReader()
  reader.readAsDataURL(event.target.files[0])
  reader.onload = () => {
    form.value.img = reader.result
  }
}
const onUpdate = () => {
  showUpdate.value = true
  form.value = clone(detail.value)
}
const offUpdate = () => {
  showUpdate.value = false
  form.value = clone(cleanForm)
}
const update = () => {
  formEl.value.validate(async(valid) => {
    if (!valid) return false
    loading.value = true
    let pList = await Promise.all([store.dispatch('xxx/update', form.value), wait(1000)])
    loading.value = false
    if (!pList[0]) return
    showUpdate.value = false
  })
}
// tip: 初始化空数据
store.state.xxx.detail = emptyFn.xxx()
findById()
</script>

<i18n>
en:
  ImageAtDetail: custom block Image in detail page
zh:
  ImageAtDetail: 当前页面的图片来自详情页面
</i18n>
