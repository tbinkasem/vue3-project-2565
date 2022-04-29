<template>
  <ui-card :disabled="true">
    <template #title>
      REGISTER
    </template>
    <ui-form :disabled="false">
      <div>
        User: <ui-input />
      </div>
      <div>
        Pass: <ui-input />
      </div>
      <div>
        <ui-button @click="doRegister">
          Register
        </ui-button>
      </div>
    </ui-form>
    <div>Copyright &copy; 2012</div>
  </ui-card>
</template>
<script>
export default {
  data() {
    return {
      busy: false,
    }
  },
  methods: {
    doRegister() {
      this.busy = true
      setTimeout(() => {
        this.busy = false
      }, 2000)
    },
  },
}
</script>
