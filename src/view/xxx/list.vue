<template>
  <main>
    <div>
      用的是 public/assets 文件夹下的logo，如果src下的需要在js处import
      <div style="width: 50px; height: 50px;"><center-image :src="'/assets/logo.png'"/></div>
    </div>
    <div>
      <div>
        <section><input v-model="form.name"></section>
        <section style="width: 100px; height: 100px; cursor: pointer;">
          <button @click="reloadDb">reload db img</button>
          <label v-if="form.img" style="width: 100%; height: 100%; display: block;">
            <center-image :src="form.img"/>
            <input type="file" style="display: none;" @change="readPic">
          </label>
          <label v-else style="width: 100%; height: 100%; display: block;">
            {{ t('Image') }} <input type="file" style="display: none;" @change="readPic" >
          </label>
        </section>
        <div style="display: flex;">
          <div v-if="loadingSave" style="height: 20px;"><loading-icon style="width: 20px; "/></div>
          <div v-else><button style="width: 100px; height: 20px;" @click="save">save</button></div>
        </div>
      </div>

    </div>
    <div>
      <button @click="find">reload</button>
      <button @click="reset">reset</button>
      <div>filter.k<input v-model="filter.k" @keyup="changeFilter"></div>
      <div v-if="loading"><loading-icon style="width: 30px; height: 30px;"/></div>
      <div v-else style="display: flex; flex-wrap: wrap;">
        <article v-for="(e, i) in list" :key="i" @click="goDetail(e)">
          <section style="width: 200px; height: 100px; ">
            <div>{{e.name}}</div>
            <div>{{ phone(e.phone) }}</div>
            <div>{{ number(e.vote) }}</div>
            <div>{{ date(e.date, {to: 'MMM dd, yyyy'}) }}</div>
          </section>
        </article>
      </div>
      <section>total: {{total}}</section>
    </div>
    <div>
      message from golbal i18n: {{ t('message') }}
      <button @click="changeLang">chang language</button>
    </div>
  </main>
</template>

// 如果使用i18n custom block 则需要加入本地的t的形式
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
const formDom = ref(null)
// tip: 定义 不需要关联的
const sortList = [
  { label: '日期排序 - 新->旧', value: 'updateAt,false' },
  { label: '日期排序 - 旧->新', value: 'updateAt,true' },
]
const cleanForm = {
  ...emptyFn.xxx(), img: '',
  ...store.state.xxxDb.save,
}
// tip: 定义 需要关联的
const form = ref(clone(cleanForm))
const sort = ref('')
const loading = ref(false)
const loadingSave = ref(false)
// tip: 定义 computed 计算的
const total = computed(() => store.state.xxx.total)
const page = computed(() => store.state.xxx.page)
const filter = computed(() => store.state.xxx.filter)
const list = computed(() => store.state.xxx.list)
// tip: 定义 方法
const go = (v) => {
  router.push({ name: v })
}
const reloadDb = () => {
  form.value = clone(cleanForm)
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
    store.dispatch('xxxDb/save', this.form)
  }
}
const save = async() => {
  if (!form.value.name) return
  loadingSave.value = true
  let pList = await Promise.all([store.dispatch('xxx/save', form.value), wait(1000)])
  loadingSave.value = false
}
const changeFilter = () => {
  if (sort.value) {
    filter.value.sort = sort.value.split(',')[0]
    filter.value.sortAz = sort.value.split(',')[1]
  }
  store.dispatch('xxx/changeFilter')
  find()
  count()
}
const changePage = (v) => {
  store.dispatch('xxx/changePage', { curr: v })
  find()
}
const count = () => {
  store.dispatch('xxx/count')
}
const find = async() => {
  loading.value = true
  await Promise.all([store.dispatch('xxx/find'), wait(1000)])
  loading.value = false
}
const goDetail = (e) => {
  router.push({ name: 'xxx', params: { id: e.id } })
}
const remove = async(e) => {
  await store.dispatch('xxx/remove', {id: e.id})
  count()
  find()
}
const changeLang = () => {
  locale.value = locale.value === 'en' ? 'zh' : 'en'
  storage.set('lang', locale.value)
}
// tip: 初始化空数据
store.dispatch('xxx/resetFilter')
count()
find()
</script>
<i18n>
en:
  Image: custom block Image in list page
zh:
  Image: 当前页面的图片来自列表页面
</i18n>
