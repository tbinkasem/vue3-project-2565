<route lang="yaml">
meta:
  layout: public
</route>

<template>
  <div class="flex flex-col gap-4 justify-center items-center min-h-screen">
    <div class="w-20 h-20 bg-pink-300 flex justify-center items-center rounded-md">
      LOGO
    </div>
    <signin-box
      @success="signinSuccess"
      @error="singinError"
    >
    </signin-box>
    <div>FOOTER</div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { store } from '../stores/store.js'
export default {
  props: {
  },
  setupxxx() {
    const form = reactive({
      username: 'somchai',
      password: '',
      remember: false,
    })
    const isValid = computed(() => form.username !== '' &&
        form.password !== '')
    const signinSuccess = function(user) {
      console.log('user=', user)
      console.log(form.username)
    }
    const singinError = function(err) {
      console.log('err=', err)
      // TODO:
    }
    return {
      disabled: {
        type: Boolean,
      },
      form,
      isValid,
      signinSuccess,
      singinError,
    }
  },
  data() {
    return {
      a: 1,
      b: 2,
    }
  },
  methods: {
    async signinSuccess() {
      console.log('signinSuccess')
      this.$router.replace('/home')
    },
    singinError() {
    },
  },
}
</script>
