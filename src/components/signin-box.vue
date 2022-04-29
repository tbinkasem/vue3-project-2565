<template>
  <ui-card>
    <!-- card title -->
    <template #title>
      Sign-in
    </template>

    <!-- card body -->
    <form class="pt-3">
      <div class="flex flex-col px-3">
        <label for="username" class="h-8 leading-8">Username</label>
        <input
          ref="username"
          type="text"
          id="username"
          v-model="username"
          :disabled="busy"
          class="border-2 rounded-md h-10 px-2"
        >
      </div>
      <div class="flex flex-col px-3">
        <label for="password" class="h-8 leading-8">Password</label>
        <input
          ref="password"
          type="password" id="password"
          v-model="password"
          :disabled="busy"
          class="border-2 rounded-md h-10 px-2"
        >
      </div>
      <!-- <div class="flex flex-col px-3">
        <label for="password" class="h-8 leading-8">Type</label>
        <select
          v-model="type"
          class="border-2 rounded-md h-10 px-2"
        >
          <option
            v-for="({ value, text }, idx) in filteredTypeList"
            :key="value"
            :value="value"
          >
            {{ text }} {{ idx }}
          </option>
        </select>
      </div> -->
      <div class="px-3 h-10 flex items-center gap-2">
        <input type="checkbox" id="remember" v-model="remember" :disabled="busy" class="w-5 h-5">
        <label for="remember">Remember username?</label>
      </div>
    </form>

    <!-- card actions -->
    <template #actions>
      <ui-button
        ref="signin"
        :disabled="busy"
        @click="signin"
        icon="home"
      >
        Sign-In
      </ui-button>
      <ui-button
        type="reset" :disabled="busy"
        class="border-red-600 bg-white text-black border-2 rounded-md"
        icon="clear"
      >
        Reset
      </ui-button>
    </template>
  </ui-card>
</template>

<script>
// import { store } from '../store/store.js'
import { mapState } from 'pinia'
import { useAppStore } from '../stores/app-store'
export default {
  emits: [
    'success',
    'error',
    'update:form',
  ],
  data() {
    return {
      username: '',
      password: '',
      remember: false,
      ok: true,
      busy: false,
      type: 'S',
      typeList: [
        { value: 'S', text: 'Student' },
        { value: 'T', text: 'Teacher' },
        { value: 'P', text: 'Parent' },
      ],
      type2List: {
        S: 'Student',
        T: 'Teacher',
        P: 'Parent',
      },
    }
  },
  computed: {
    ...mapState(useAppStore, ['lang']),
    lock() {
      return !this.username || !this.password
    },
    filteredTypeList() {
      return this.typeList.filter(x => x.value !== 'P')
    },
  },
  created() {
    // console.log('created')
    // let n = 1
    // clearInterval(this.timer)
    // this.timer = setInterval(() => {
    //   console.log('oooookkkkkkk', n)
    // }, 1000)
  },
  mounted() {
    // document.getElementById('username').focus()
    this.$refs.username.focus()
  },
  beforeUnmount() {
    // clearInterval(this.timer)
  },
  methods: {
    async signin() {
      try {
        let payload = {
          username: this.username,
          password: this.password,
        }
        let { data, headers } = await this.$axios.post('/api/signin', payload)
        if (!data.token) {
          return
        }
        // signin success
        localStorage.setItem('token', data.token)
      } catch (e) {
      }
    },
    onUsernameKeyup(evt) {
      // console.log('xxxx')
      // if (evt.code === 'Enter') {
      this.$refs.password.focus()
      // }
    },
  },
}
</script>
