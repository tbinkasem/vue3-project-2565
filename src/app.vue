<template>
  <router-view />
  <div id="app-dialog">
  </div>
</template>
<script>
export default {
  methods: {
    async doSaveStudent() {
      await this.saveStudent()
    },
  },
}
</script>
