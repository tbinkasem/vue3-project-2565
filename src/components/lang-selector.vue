<template>
  <select v-model="lang">
    <option>{{ name }}</option>
    <option>{{ lang }}</option>
    <option value="th">
      ไทย
    </option>
    <option value="en">
      English
    </option>
  </select>
</template>
<script>
// tree shaking
// import { store } from '../store/store.js'
import { mapWritableState, mapActions } from 'pinia'
import { useAppStore } from '../stores/app-store.js'
export default {
  // setup() {
  //   const appStore = useAppStore()
  //   return {
  //     appStore,
  //     // lang: appStore.lang,
  //   }
  // },
  data() {
    return {
      // store,
      name: 'Somsak',
    }
  },
  computed: {
    ...mapWritableState(useAppStore, ['lang', 'tempF']),
    upperName() {
      return this.name
    },
  },
  methods: {
    f1() {
      this.setLang()
    },
    f2() {
    },
    ...mapActions(useAppStore, ['setLang']),
  },
}
</script>
