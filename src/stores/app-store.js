import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state() {
    return {
      lang: 'jp',
      tempC: 25,
    }
  },
  getters: {
    tempF: (state) => state.tempC * 9 / 5 + 32,
    tempF2(state) {
      return state.tempC * 9 / 5 + 32
    },
  },
  actions: {
    getLang() {

    },
    setLang() {
      console.log('setLang in store')
    },
    // async saveStudent() {
    //   try {
    //     let { data } = await this.$axios.post('/s', { student })
    //     if (data.ok) {
    //       this.store.state.student = student
    //     }
    //   } catch (e) {
    //     console.log('ERROR', e)
    //   }
    // },
  },
})
