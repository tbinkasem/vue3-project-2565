<template>
  <h1>WELCOME {{ store.profile?.displayName }}</h1>
  <div>Last Login: {{ store.profile?.lastLogin }}</div>
  <!-- <div>{{ store }}</div> -->
</template>
<script>
import { store } from '../store/store.js'
export default {
  data() {
    return {
      store,
    }
  },
}
</script>
